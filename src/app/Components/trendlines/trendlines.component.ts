import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-trendlines',
  standalone: true,
    imports: [
        GoogleChartsModule,
        HighlighterModule
    ],
  templateUrl: './trendlines.component.html',
  styleUrl: './trendlines.component.scss'
})
export class TrendlinesComponent {

  // @formatter:off
  linear = {
    type: ChartType.ScatterChart,
    options: {
      title: 'Age of sugar maples vs. trunk diameter, in inches',
      hAxis: {title: 'Diameter'},
      vAxis: {title: 'Age'},
      legend: 'none',
      trendlines: { 0: {} }    // Draw a trendline for data series 0.
    },
    columns: ['Diameter', 'Age'],
    data: [
      [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]
    ],
  };

  exponential = {
    type: ChartType.ScatterChart,
    options: {
      title: 'Descendants by Generation',
      hAxis: {title: 'Generation', minValue: 0, maxValue: 3},
      vAxis: {title: 'Descendants', minValue: 0, maxValue: 2100},
      trendlines: {
        0: {
          type: 'exponential',
          visibleInLegend: true,
          color: 'green',
        }
      }
    },
    columns: ['Generation', 'Descendants'],
    data: [
      [0, 1], [1, 33], [2, 269], [3, 2013]
    ],
  };
  // @formatter:on
}
