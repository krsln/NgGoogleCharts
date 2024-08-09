import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-scatter-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './scatter-charts.component.html',
  styleUrl: './scatter-charts.component.scss'
})
export class ScatterChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.ScatterChart,
    options: {
      title: 'Age vs. Weight comparison',
      hAxis: {title: 'Age', minValue: 0, maxValue: 15},
      vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
      legend: 'none'
    },
    columns: ['Age', 'Weight'],
    data: [
      [ 8,      12],
      [ 4,      5.5],
      [ 11,     14],
      [ 4,      5],
      [ 3,      3.5],
      [ 6.5,    7]
    ],
  };
  // @formatter:on
}
