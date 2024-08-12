import { TestBed } from '@angular/core/testing';

import { GoogleChartsModule } from './google-charts.module';
import { ScriptLoaderService } from './Services/script-loader.service';
import { GoogleChartsConfig, GOOGLE_CHARTS_CONFIG } from './Models/GoogleChartsConfig';
import {of, take} from "rxjs";

describe('GoogleChartsModule', () => {
  let service: ScriptLoaderService;

  describe('direct import', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GoogleChartsModule]
      });
    });

    it('should allow instantiation of `ScriptLoaderService`', () => {
      service = TestBed.inject(ScriptLoaderService);
      expect(service).toBeTruthy();
    });
  });

  describe('config via forRoot', () => {
    const mapsApiKey = 'myMapsApiKey';
    const config: GoogleChartsConfig = { mapsApiKey: mapsApiKey, version: '13.5', safeMode: false };
    const configObservable = of(config);

    it('should provide the given config values', () => {

      TestBed.configureTestingModule({
        imports: [GoogleChartsModule.forRoot(config)]
      });

      expect(TestBed.inject(GOOGLE_CHARTS_CONFIG)).toEqual(configObservable);
    });

    it('should accept empty config', () => {
      TestBed.configureTestingModule({
        imports: [GoogleChartsModule.forRoot()]
      });

      expect(TestBed.inject(GOOGLE_CHARTS_CONFIG)).toEqual(of({}));
    });

    // it('should accept a partial config', () => {
    //   TestBed.configureTestingModule({
    //     imports: [GoogleChartsModule.forRoot({ mapsApiKey })]
    //   });
    //
    //   expect(TestBed.inject(GOOGLE_CHARTS_CONFIG)).toMatchObject({ mapsApiKey });
    //
    // });
  });
});
