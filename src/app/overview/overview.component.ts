import { Component } from '@angular/core';
import {HighlighterModule} from "@qrsln/highlighter";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    HighlighterModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  Package = {
    Host: 'https://img.shields.io/', Style: '?style=for-the-badge',
    Name: '@qrsln/google-charts-angular', npm: 'https://www.npmjs.com/package/@qrsln/google-charts-angular'
  };
}
