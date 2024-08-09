import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-gantt-charts',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './gantt-charts.component.html',
  styleUrl: './gantt-charts.component.scss'
})
export class GanttChartsComponent {

  // @formatter:off
  simple = {
    type: ChartType.Gantt,
    options: {
      height: 275
    },
    columns:
      [
        { type: 'string', id: 'Task ID' },
        { type: 'string', id: 'Task Name' },
        { type: 'date', id: 'Start Date' },
        { type: 'date', id: 'End Date' },
        { type: 'number', id: 'Duration' },
        { type: 'number', id: 'Percent Complete' },
        { type: 'string', id: 'Dependencies' },
      ],
    data: [
      ['Research', 'Find sources', new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper', null, new Date(2015, 0, 9), this.daysToMilliseconds(3), 25, 'Research,Outline'],
      ['Cite', 'Create bibliography', null, new Date(2015, 0, 7), this.daysToMilliseconds(1), 20, 'Research'],
      ['Complete', 'Hand in paper', null, new Date(2015, 0, 10), this.daysToMilliseconds(1), 0, 'Cite,Write'],
      ['Outline', 'Outline paper', null, new Date(2015, 0, 6), this.daysToMilliseconds(1), 100, 'Research']
    ],
  };

  noDependencies = {
    type: ChartType.Gantt,
    options: {
      height: 400,
      gantt: {
        trackHeight: 30
      }
    },
    columns:
      [
        { type: 'string', id: 'Task ID' },
        { type: 'string', id: 'Task Name' },
        { type: 'string', id: 'Resource' },
        { type: 'date', id: 'Start Date' },
        { type: 'date', id: 'End Date' },
        { type: 'number', id: 'Duration' },
        { type: 'number', id: 'Percent Complete' },
        { type: 'string', id: 'Dependencies' },
      ],
    data: [
      ['2014Spring', 'Spring 2014', 'spring', new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
      ['2014Summer', 'Summer 2014', 'summer', new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
      ['2014Autumn', 'Autumn 2014', 'autumn', new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
      ['2014Winter', 'Winter 2014', 'winter', new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
      ['2015Spring', 'Spring 2015', 'spring', new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
      ['2015Summer', 'Summer 2015', 'summer', new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
      ['2015Autumn', 'Autumn 2015', 'autumn', new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
      ['2015Winter', 'Winter 2015', 'winter', new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
      ['Football', 'Football Season', 'sports', new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
      ['Baseball', 'Baseball Season', 'sports', new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
      ['Basketball', 'Basketball Season', 'sports', new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
      ['Hockey', 'Hockey Season', 'sports', new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
    ],
  };

  grouping = {
    type: ChartType.Gantt,
    options: {
      height: 275
    },
    columns:
      [
        { type: 'string', id: 'Task ID' },
        { type: 'string', id: 'Task Name' },
        { type: 'string', id: 'Resource' },
        { type: 'date', id: 'Start Date' },
        { type: 'date', id: 'End Date' },
        { type: 'number', id: 'Duration' },
        { type: 'number', id: 'Percent Complete' },
        { type: 'string', id: 'Dependencies' },
      ],
    data: [
      ['Research', 'Find sources', null, new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper', 'write', null, new Date(2015, 0, 9), this.daysToMilliseconds(3), 25, 'Research,Outline'],
      ['Cite', 'Create bibliography', 'write', null, new Date(2015, 0, 7), this.daysToMilliseconds(1), 20, 'Research'],
      ['Complete', 'Hand in paper', 'complete', null, new Date(2015, 0, 10), this.daysToMilliseconds(1), 0, 'Cite,Write'],
      ['Outline', 'Outline paper', 'write', null, new Date(2015, 0, 6), this.daysToMilliseconds(1), 100, 'Research']
    ],
  };
  // @formatter:on

  daysToMilliseconds(days: number) {
    return days * 24 * 60 * 60 * 1000;
  }
}
