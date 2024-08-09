import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-bubble-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './bubble-charts.component.html',
  styleUrl: './bubble-charts.component.scss'
})
export class BubbleChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.BubbleChart,
    options: {
      title: 'Fertility rate vs life expectancy in selected countries (2010).' +
        ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
      hAxis: {title: 'Life Expectancy'},
      vAxis: {title: 'Fertility Rate'},
      bubble: {textStyle: {fontSize: 11}}
    },
    columns:
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
    data: [
      ['CAN',    80.66,              1.67,      'North America',  33739900],
      ['DEU',    79.84,              1.36,      'Europe',         81902307],
      ['DNK',    78.6,               1.84,      'Europe',         5523095],
      ['EGY',    72.73,              2.78,      'Middle East',    79716203],
      ['GBR',    80.05,              2,         'Europe',         61801570],
      ['IRN',    72.49,              1.7,       'Middle East',    73137148],
      ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
      ['ISR',    81.55,              2.96,      'Middle East',    7485600],
      ['RUS',    68.6,               1.54,      'Europe',         141850000],
      ['USA',    78.09,              2.05,      'North America',  307007000]
    ],
  };

  byNumbers = {
    type: ChartType.BubbleChart,
    options: {
      colorAxis: {colors: ['yellow', 'red']}
    },
    columns:
      ['ID', 'X', 'Y', 'Temperature'],
    data: [
      ['',   80,  167,      120],
      ['',   79,  136,      130],
      ['',   78,  184,      50],
      ['',   72,  278,      230],
      ['',   81,  200,      210],
      ['',   72,  170,      100],
      ['',   68,  477,      80]
    ],
  };
  // @formatter:on

}
