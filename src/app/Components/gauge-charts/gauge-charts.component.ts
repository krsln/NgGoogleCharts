import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-gauge-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './gauge-charts.component.html',
  styleUrl: './gauge-charts.component.scss'
})
export class GaugeChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.Gauge,
    options: {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    },
    columns: ['Label', 'Value'],
    data: [
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ],
  };
  // @formatter:on

}
