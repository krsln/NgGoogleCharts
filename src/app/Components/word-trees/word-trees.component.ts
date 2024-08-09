import {Component} from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";
import {ChartType, GoogleChartsModule} from "@qrsln/google-charts-angular";

@Component({
  selector: 'app-word-trees',
  standalone: true,
  imports: [
    GoogleChartsModule,
    HighlighterModule
  ],
  templateUrl: './word-trees.component.html',
  styleUrl: './word-trees.component.scss'
})
export class WordTreesComponent {

  // @formatter:off
  simple = {
    type: ChartType.WordTree,
    options: {
      wordtree: {
        format: 'implicit',
        word: 'cats'
      }
    },
    columns: ['Phrases'],
    data: [
      ['cats are better than dogs'],
      ['cats eat kibble'],
      ['cats are better than hamsters'],
      ['cats are awesome'],
      ['cats are people too'],
      ['cats eat mice'],
      ['cats meowing'],
      ['cats in the cradle'],
      ['cats eat mice'],
      ['cats in the cradle lyrics'],
      ['cats eat kibble'],
      ['cats for adoption'],
      ['cats are family'],
      ['cats eat mice'],
      ['cats are better than kittens'],
      ['cats are evil'],
      ['cats are weird'],
      ['cats eat mice'],
    ],
  };
  // @formatter:on
}
