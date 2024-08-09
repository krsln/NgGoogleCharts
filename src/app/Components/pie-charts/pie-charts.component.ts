import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-pie-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './pie-charts.component.html',
  styleUrl: './pie-charts.component.scss'
})
export class PieChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.PieChart,
    options: {
      title: 'My Daily Activities'
    },
    columns: ['Task', 'Hours per Day'],
    data: [
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
  };

  pie_3D = {
    type: ChartType.PieChart,
    options: {
      title: 'My Daily Activities',
      is3D: true,
    },
    columns: ['Task', 'Hours per Day'],
    data: [
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
  };

  donut = {
    type: ChartType.PieChart,
    options: {
      title: 'My Daily Activities',
      pieHole: 0.4,
    },
    columns: ['Task', 'Hours per Day'],
    data: [
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
  };

  slice = {
    type: ChartType.PieChart,
    options: {
      title: 'Indian Language Use',
      legend: 'none',
      pieSliceText: 'label',
      slices: {
        4: {offset: 0.2},
        12: {offset: 0.3},
        14: {offset: 0.4},
        15: {offset: 0.5},
      },
    },
    columns: ['Language', 'Speakers (in millions)'],
    data: [
      ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
      ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
      ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
      ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
      ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
      ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
      ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
    ],
  };
  // @formatter:on
}
