import {Component} from '@angular/core';
import {GoogleChartsModule} from "../../../../projects/google-charts-angular/src/lib/google-charts.module";
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType} from "../../../../projects/google-charts-angular/src/lib/Models/Enums";

@Component({
  selector: 'app-calendar-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './calendar-charts.component.html',
  styleUrl: './calendar-charts.component.scss'
})
export class CalendarChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.Calendar,
    options: {
      title: "Red Sox Attendance",
      height: 350,
    },
    columns:
      [{ type: 'date', id: 'Date' },{ type: 'number', id: 'Won/Loss' }],
    data: [
      [ new Date(2024, 0, 13), 37032 ],
      [ new Date(2024, 10, 14), 38024 ],
      [ new Date(2024, 10, 25), 38024 ],
      [ new Date(2024, 10, 26), 38108 ],
      [ new Date(2024, 11, 27), 38229 ],
      // Many rows omitted for brevity.
      [ new Date(2025, 1, 4), 38177 ],
      [ new Date(2025, 1, 5), 38705 ],
      [ new Date(2025, 1, 12), 38210 ],
      [ new Date(2025, 1, 13), 38029 ],
      [ new Date(2025, 1, 19), 38823 ],
      [ new Date(2025, 1, 23), 38345 ],
      [ new Date(2025, 1, 24), 38436 ],
      [ new Date(2025, 1, 30), 38447 ]
    ],
  };

  // @formatter:on

}
