import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-intervals',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './intervals.component.html',
  styleUrl: './intervals.component.scss'
})
export class IntervalsComponent {

  // @formatter:off
  default = {
    type: ChartType.LineChart,
    options: {
      title: 'Line intervals, default',
      curveType: 'function',
      lineWidth: 4,
      intervals: { 'style':'line' },
      legend: 'none'
    },
    columns:
      [
        {type: 'number', id: 'x'},
        {type: 'number', id: 'values'},
        {id: 'i0', type: 'number', role: 'interval'},
        {id: 'i1', type: 'number', role: 'interval'},
        {id: 'i2', type: 'number', role: 'interval'},
        {id: 'i2', type: 'number', role: 'interval'},
        {id: 'i2', type: 'number', role: 'interval'},
        {id: 'i2', type: 'number', role: 'interval'}
      ],

    data: [
      [1, 100, 90, 110, 85, 96, 104, 120],
      [2, 120, 95, 130, 90, 113, 124, 140],
      [3, 130, 105, 140, 100, 117, 133, 139],
      [4, 90, 85, 95, 85, 88, 92, 95],
      [5, 70, 74, 63, 67, 69, 70, 72],
      [6, 30, 39, 22, 21, 28, 34, 40],
      [7, 80, 77, 83, 70, 77, 85, 90],
      [8, 100, 90, 110, 85, 95, 102, 110]
    ],
  };
  // @formatter:on

  options_lines = {
    title: 'Line intervals, tailored',
    lineWidth: 4,
    curveType: 'function',
    interval: {
      'i0': {'style': 'line', 'color': '#D3362D', 'lineWidth': 0.5},
      'i1': {'style': 'line', 'color': '#F1CA3A', 'lineWidth': 1},
      'i2': {'style': 'line', 'color': '#5F9654', 'lineWidth': 2},
    },
    legend: 'none',
  };

  options_bars = {
    title: 'Bars, default',
    curveType: 'function',
    series: [{'color': '#D9544C'}],
    intervals: {style: 'bars'},
    legend: 'none',
  };

  options_box = {
    series: [{'color': '#1A8763'}],
    intervals: {style: 'boxes'},
    legend: 'none',
  };
}
