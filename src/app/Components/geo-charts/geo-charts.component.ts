import {Component} from '@angular/core';
import {GoogleChartsModule} from "../../../../projects/google-charts-angular/src/lib/google-charts.module";
import {ChartType} from "../../../../projects/google-charts-angular/src/lib/Models/Enums";
import {HighlighterModule} from "@qrsln/highlighter";

@Component({
  selector: 'app-geo-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './geo-charts.component.html',
  styleUrl: './geo-charts.component.scss'
})
export class GeoChartsComponent {
  chartType = ChartType;

  region = {
    type: ChartType.GeoChart,
    options: {},
    columns: ['Country', 'Popularity'],
    data: [
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
  };

  marker = {
    type: ChartType.GeoChart,
    options: {
      region: 'IT',
      displayMode: 'markers',
      colorAxis: {colors: ['green', 'blue']}
    },
    columns: ['City', 'Population', 'Area'],
    data: [
      ['Rome', 2761477, 1285.31],
      ['Milan', 1324110, 181.76],
      ['Naples', 959574, 117.27],
      ['Turin', 907563, 130.17],
      ['Palermo', 655875, 158.9],
      ['Genoa', 607906, 243.60],
      ['Bologna', 380181, 140.7],
      ['Florence', 371282, 102.41],
      ['Fiumicino', 67370, 213.44],
      ['Anzio', 52192, 43.43],
      ['Ciampino', 38262, 11]
    ],
  };

}
