import { Component } from '@angular/core';
import {GoogleChartsModule} from "../../../../projects/google-charts-angular/src/lib/google-charts.module";
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType} from "../../../../projects/google-charts-angular/src/lib/Models/Enums";

@Component({
  selector: 'app-candlestick-charts',
  standalone: true,
    imports: [
        GoogleChartsModule,
        HighlighterModule
    ],
  templateUrl: './candlestick-charts.component.html',
  styleUrl: './candlestick-charts.component.scss'
})
export class CandlestickChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.CandlestickChart,
    options: {
      legend:'none'
    },
    data: [
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ],
  };

  waterfall  = {
    type: ChartType.CandlestickChart,
    options: {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    },
    data: [
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
      // Treat the first row as data.
    ],
  };

  // @formatter:on
}
