import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-column-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './column-charts.component.html',
  styleUrl: './column-charts.component.scss'
})
export class ColumnChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.ColumnChart,
    options: { },
    columns:
      ['Element', 'Density' ],
    data: [
      ['Copper',  8.94, ],
      ['Silver',  10.49,],
      ['Gold',    19.30,],
      ['Platinum', 21.45 ],
    ],
  };

  coloring  = {
    type: ChartType.ColumnChart,
    options: { },
    columns:
      ['Element', 'Density', { role: 'style' }],
    data: [
      ['Copper',  8.94, '#b87333'],            // RGB value
      ['Silver',  10.49, 'silver'],            // English color name
      ['Gold',    19.30, 'gold'],
      ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
    ],
  };

  styled = {
    type: ChartType.ColumnChart,
    options: { },
    columns:
      ['Year', 'Visitations', { role: 'style' } ],
    data: [
      ['2010', 10, 'color: gray'],
      ['2020', 14, 'color: #76A7FA'],
      ['2030', 16, 'opacity: 0.2'],
      ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
      ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
    ],
  };

  labeling  = {
    type: ChartType.ColumnChart,
    options: {  },
    columns:
      ['Element', 'Density', { role: 'style' }, { role: 'annotation' } ],
    data: [
      ['Copper', 8.94, '#b87333', 'Cu' ],
      ['Silver', 10.49, 'silver', 'Ag' ],
      ['Gold', 19.30, 'gold', 'Au' ],
      ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
    ]
  };
  // @formatter:on

}
