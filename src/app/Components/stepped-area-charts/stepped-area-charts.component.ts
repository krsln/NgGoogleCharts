import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-stepped-area-charts',
  standalone: true,
    imports: [
        GoogleChartsModule,
        HighlighterModule
    ],
  templateUrl: './stepped-area-charts.component.html',
  styleUrl: './stepped-area-charts.component.scss'
})
export class SteppedAreaChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.SteppedAreaChart,
    options: {
      backgroundColor: '#ddd',
      legend: { position: 'bottom' },
      connectSteps: false,
      colors: ['#4374E0', '#E49307'],
      isStacked: true,
    },
    columns: ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
    data: [
      ['Alfred Hitchcock (1935)', 8.4,         7.9],
      ['Ralph Thomas (1959)',     6.9,         6.5],
      ['Don Sharp (1978)',        6.5,         6.4],
      ['James Hawes (2008)',      4.4,         6.2]
    ],
  };
  // @formatter:on
}
