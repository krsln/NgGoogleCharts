import {Component} from '@angular/core';
import {GoogleChartsModule} from "../../../../projects/google-charts-angular/src/lib/google-charts.module";
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType} from "../../../../projects/google-charts-angular/src/lib/Models/Enums";

@Component({
  selector: 'app-bar-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './bar-charts.component.html',
  styleUrl: './bar-charts.component.scss'
})
export class BarChartsComponent {

  simple = {
    type: ChartType.BarChart,
    options: {},
    columns: ['Element', 'Density'],
    data: [
      ['Copper', 8.94],
      ['Silver', 10.49],
      ['Gold', 19.30],
      ['Platinum', 21.45],
    ],
  };

  coloring = {
    type: ChartType.BarChart,
    options: {},
    columns: ['Element', 'Density', {role: 'style'}],
    data: [
      ['Copper', 8.94, '#b87333'],            // RGB value
      ['Silver', 10.49, 'silver'],            // English color name
      ['Gold', 19.30, 'gold'],
      ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
    ],
  };

  styled = {
    type: ChartType.BarChart,
    options: {},
    columns: ['Year', 'Visitations', {role: 'style'}],
    data: [
      ['2010', 10, 'color: gray'],
      ['2020', 14, 'color: #76A7FA'],
      ['2030', 16, 'opacity: 0.2'],
      ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
      ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
    ],
  };

  labeling = {
    type: ChartType.BarChart,
    options: {},
    columns: ['Element', 'Density', {role: 'style'}, {role: 'annotation'}],
    data: [
      ['Copper', 8.94, '#b87333', 'Cu'],
      ['Silver', 10.49, 'silver', 'Ag'],
      ['Gold', 19.30, 'gold', 'Au'],
      ['Platinum', 21.45, 'color: #e5e4e2', 'Pt']
    ],
  };

  material = {
    type: ChartType.BarChart,
    options: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
      bars: 'horizontal' // Required for Material Bar Charts.
    },
    columns:  ['Year', 'Sales', 'Expenses', 'Profit'],
    data: [
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ],
  };

}
