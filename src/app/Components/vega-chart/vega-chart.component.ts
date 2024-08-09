import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-vega-chart',
  standalone: true,
    imports: [
        GoogleChartsModule,
        HighlighterModule
    ],
  templateUrl: './vega-chart.component.html',
  styleUrl: './vega-chart.component.scss'
})
export class VegaChartComponent {

  // @formatter:off
  simple = {
    type: ChartType.VegaChart,
    options: {
    },
    columns: [
      { type: 'string', id: 'category' },
      { type: 'number', id: 'amount' },
    ],
    data: [
      ['A', 28],
      ['B', 55],
      ['C', 43],
      ['D', 91],
      ['E', 81],
      ['F', 53],
      ['G', 19],
      ['H', 87],
    ] ,
  };
  // @formatter:on
}
