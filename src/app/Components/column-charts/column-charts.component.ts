import { Component } from '@angular/core';
import {GoogleChartsModule} from "../../../../projects/google-charts-angular/src/lib/google-charts.module";
import {HighlighterModule} from "@qrsln/highlighter";

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

}
