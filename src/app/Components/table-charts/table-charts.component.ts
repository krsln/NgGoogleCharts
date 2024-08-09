import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-table-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './table-charts.component.html',
  styleUrl: './table-charts.component.scss'
})
export class TableChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.Table,
    options: {
      showRowNumber: true,
      width: '100%',
      // height: '100%'
    },
    columns: [
      { type: 'string', label: 'Name' },
      { type: 'number', label: 'Salary' },
      { type: 'boolean', label: 'Full Time Employee' }
    ],
    data: [
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ] as any[][],
  };
  // @formatter:on
}
