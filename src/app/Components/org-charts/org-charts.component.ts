import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-org-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './org-charts.component.html',
  styleUrl: './org-charts.component.scss'
})
export class OrgChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.OrgChart,
    options: {'allowHtml':true },
    columns:
      [
        { type: 'string', id: 'Name' },
        { type: 'string', id: 'Manager' },
        { type: 'string', id: 'ToolTip' }
      ],
    data: [
      [{ v: 'Mike', f:  (`Mike<div style="color:red; font-style:italic">President</div>`) }, '', 'The President'],
      [{ v: 'Jim', f:  (`Jim<div style="color:red; font-style:italic">Vice President</div>`) }, 'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
    ]as any[][],
  };
  // @formatter:on
}
