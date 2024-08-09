import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-area-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './area-charts.component.html',
  styleUrl: './area-charts.component.scss'
})
export class AreaChartsComponent {

  simple = {
    type: ChartType.AreaChart,
    options: {
      title: 'Company Performance',
      hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0}
    },
    columns: ['Year', 'Sales', 'Expenses'],
    data: [
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540]
    ],
  };

  stacked = {
    type: ChartType.AreaChart,
    options: {
      isStacked: 'relative',
      height: 300,
      legend: {position: 'top', maxLines: 3},
      vAxis: {
        minValue: 0,
        ticks: [0, .3, .6, .9, 1]
      }
    },
    columns: this.simple.columns,
    data: this.simple.data,
  };

  fullStacked = {
    type: ChartType.AreaChart,
    options: {
      isStacked: true,
      height: 300,
      legend: {position: 'top', maxLines: 3},
      vAxis: {minValue: 0}
    },
    columns: this.simple.columns,
    data: this.simple.data,
  };
}
