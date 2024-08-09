import {Inject, Injectable, LOCALE_ID, NgZone, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {Observable, of, Subject} from 'rxjs';
import {map, mergeMap, switchMap} from 'rxjs/operators';

import {GOOGLE_CHARTS_LAZY_CONFIG, GoogleChartsConfig} from "../Models/GoogleChartsConfig";
import {getDefaultConfig} from "../Helpers";

@Injectable({providedIn: 'root'})
export class ScriptLoaderService {
  private readonly scriptSource = 'https://www.gstatic.com/charts/loader.js';
  private readonly scriptLoadSubject = new Subject<void>();

  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    @Inject(GOOGLE_CHARTS_LAZY_CONFIG) private readonly config$: Observable<GoogleChartsConfig>
  ) {
  }

  /**
   * Checks whether `google.charts` is available.
   *
   * If not, it can be loaded by calling `loadChartPackages`.
   *
   * @returns `true` if `google.charts` is available, `false` otherwise.
   */
  public isGoogleChartsAvailable(): boolean {
    return !(typeof google === 'undefined' || typeof google.charts === 'undefined');
  }

  /**
   * Loads the Google Chart script and the provided chart packages.
   * Can be called multiple times to load more packages.
   *
   * When called without any arguments, this will just load the default package
   * containing the namespaces `google.charts` and `google.visualization` without any charts.
   *
   * @param packages The packages to load.
   * @returns A stream emitting as soon as the chart packages are loaded.
   */
  public loadChartPackages(...packages: string[]): Observable<null> | null {
    if (isPlatformBrowser(this.platformId)) {
      return this.loadGoogleCharts().pipe(
        mergeMap(() => this.config$),
        map(config => {
          return {...getDefaultConfig(), ...(config || {})};
        }),
        switchMap((googleChartsConfig: GoogleChartsConfig) => {
          return new Observable<null>(observer => {
            const config = {
              packages,
              language: this.localeId,
              mapsApiKey: googleChartsConfig.mapsApiKey,
              safeMode: googleChartsConfig.safeMode
            };

            google.charts.load(googleChartsConfig.version!, config).then();
            google.charts.setOnLoadCallback(() => {
              this.zone.run(() => {
                observer.next();
                observer.complete();
              });
            });
          });
        })
      );
    }
    return null;
  }

  /**
   * Loads the Google Charts script. After the script is loaded, `google.charts` is defined.
   *
   * @returns A stream emitting as soon as loading has completed.
   * If the google charts script is already loaded, the stream emits immediately.
   */
  private loadGoogleCharts(): Observable<void> {
    if (this.isGoogleChartsAvailable()) {
      return of(undefined);
    } else if (!this.isLoadingGoogleCharts()) {
      if (isPlatformBrowser(this.platformId)) {
        this.loadScript(this.scriptSource).then(script => {
          script.onload = () => {
            this.zone.run(() => {
              this.scriptLoadSubject.next();
              this.scriptLoadSubject.complete();
            });
          };

          script.onerror = () => {
            this.zone.run(() => {
              console.error('Failed to load the google charts script!');
              this.scriptLoadSubject.error(new Error('Failed to load the google charts script!'));
            });
          };
        });
      }
    }

    return this.scriptLoadSubject.asObservable();
  }

  private isLoadingGoogleCharts() {
    return this.getGoogleChartsScript() != null;
  }

  private getGoogleChartsScript(): HTMLScriptElement | undefined {
    const pageScripts = Array.from(this.document.getElementsByTagName('script'));
    return pageScripts.find(script => script.src === this.scriptSource);
  }

  private loadScript(src: string, async: boolean = true, defer: boolean = true): Promise<HTMLScriptElement> {
    return new Promise((resolve, reject) => {
      const script = this.document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = async;
      script.defer = defer;

      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));

      this.document.head.appendChild(script);
      return script;
    });
  }
}
