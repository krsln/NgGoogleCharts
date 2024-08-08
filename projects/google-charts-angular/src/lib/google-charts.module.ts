import {ModuleWithProviders, NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
import {GOOGLE_CHARTS_CONFIG, GoogleChartsConfig} from "./Models/GoogleChartsConfig";
import {ScriptLoaderService} from "./Services/script-loader.service";
import {ChartEditorComponent} from "./Components/chart-editor/chart-editor.component";
import {ChartWrapperComponent} from "./Components/chart-wrapper/chart-wrapper.component";
import {ControlWrapperComponent} from './Components/control-wrapper/control-wrapper.component';
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import { GoogleChartComponent } from './Components/google-chart/google-chart.component';


@NgModule({
  declarations: [ChartEditorComponent, ChartWrapperComponent, ControlWrapperComponent, DashboardComponent, GoogleChartComponent],
  exports: [ChartEditorComponent, ChartWrapperComponent],
  // imports: [CommonModule],
  providers: [ScriptLoaderService],
})
export class GoogleChartsModule {
  public static forRoot(config: GoogleChartsConfig = {}): ModuleWithProviders<GoogleChartsModule> {
    return {
      ngModule: GoogleChartsModule,
      providers: [{provide: GOOGLE_CHARTS_CONFIG, useValue: config}]
    };
  }
}
