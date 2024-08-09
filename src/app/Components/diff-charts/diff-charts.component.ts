import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-diff-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './diff-charts.component.html',
  styleUrl: './diff-charts.component.scss'
})
export class DiffChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.ComboChart,
    options: {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    },
    columns: ['Major', 'Degrees'],
    data: [
        ['Business', 256070], ['Education', 108034],
        ['Social Sciences & History', 127101], ['Health', 81863],
        ['Psychology', 74194],

        ['Business', 358293], ['Education', 101265],
        ['Social Sciences & History', 172780], ['Health', 129634],
        ['Psychology', 97216]
    ],
  };
  // @formatter:on
}
