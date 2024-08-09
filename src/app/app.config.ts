import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideGoogleCharts} from "../../projects/google-charts-angular/src/lib/google-charts.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideGoogleCharts({
      version: 'current',
      // safeMode: true,
      mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' // from https://developers.google.com/chart/interactive/docs/gallery/geochart
    }),
  ]
};
