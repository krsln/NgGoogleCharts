import { Component } from '@angular/core';
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";
import {HighlighterModule} from "@qrsln/highlighter";

@Component({
  selector: 'app-line-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './line-charts.component.html',
  styleUrl: './line-charts.component.scss'
})
export class LineChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.LineChart,
    options: {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    },
    columns: ['Year', 'Sales', 'Expenses'],
    data: [
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ],
  };

  material = {
    type: ChartType.LineChart,
    options: {
      chart: {
        title: 'Box Office Earnings in First Two Weeks of Opening',
        subtitle: 'in millions of dollars (USD)'
      },
      width: 900,
      height: 500
    },
    columns: [
      {type: 'number', label: 'Day'},
      {type: 'number', label: 'Guardians of the Galaxy'},
      {type: 'number', label: 'The Avengers'},
      {type: 'number', label: 'Transformers: Age of Extinction'},
    ],
    data: [
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ],
  };
  // @formatter:on
}
