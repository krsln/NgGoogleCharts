import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterModule, Router, NavigationEnd} from '@angular/router';
import {ThemeModule} from "@qrsln/lootstrap-angular/Libs/Theme";
import {NotifyModule} from "@qrsln/lootstrap-angular/Libs/Notify";
import {SidenavModule} from "@qrsln/lootstrap-angular/Libs/Sidenav";
import {TreeItem, TreeViewModule} from "@qrsln/lootstrap-angular/Libs/TreeView";
import {BreadcrumbModule} from "@qrsln/lootstrap-angular/Libs/Breadcrumb";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ThemeModule, NotifyModule, SidenavModule, TreeViewModule, BreadcrumbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  Mobile: boolean = false;
  Expanded = true;

  toggle = false;

  TreeItems: TreeItem [] = [];

  constructor(private router: Router,
              // private breakpoint: BreakpointService
  ) {
  }

  ngOnInit(): void {
    // this.breakpoint.Observe(['(max-width: 767px)']).subscribe((result) => {
    //   // console.log(result);
    //   this.Mobile = result.Matches;
    //   if (this.Mobile && this.Expanded) {
    //     this.Expanded = false;
    //   }
    // });

    const r = '/';
    this.TreeItems = [
      {
        Data: '/Overview',
        Content: {Text: 'Overview', Icon: 'fa-solid fa-folder'}, Expanded: true,
      } as TreeItem,
      {
        // Data: r.concat('Overview'),
        Content: {Text: 'Chart Types', Icon: 'fa-solid fa-folder'}, Expanded: true,
        Children: [
          // Annotation Charts
          {Data: r.concat('AreaCharts'), Content: {Text: 'Area Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('BarCharts'), Content: {Text: 'Bar Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('BubbleCharts'), Content: {Text: 'Bubble Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('CalendarCharts'), Content: {Text: 'Calendar Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('CandlestickCharts'), Content: {Text: 'Candlestick Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('ColumnCharts'), Content: {Text: 'Column Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('ComboCharts'), Content: {Text: 'Combo Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('DiffCharts'), Content: {Text: 'Diff Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('DonutCharts'), Content: {Text: 'Donut Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('GanttCharts'), Content: {Text: 'Gantt Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('GaugeCharts'), Content: {Text: 'Gauge Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('GeoCharts'), Content: {Text: 'Geo Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('Histograms'), Content: {Text: 'Histograms', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('Intervals'), Content: {Text: 'Intervals', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('LineCharts'), Content: {Text: 'Line Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('Maps'), Content: {Text: 'Maps', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('OrgCharts'), Content: {Text: 'Org Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('PieCharts'), Content: {Text: 'Pie Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('SankeyDiagrams'), Content: {Text: 'Sankey Diagrams', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('ScatterCharts'), Content: {Text: 'Scatter Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('SteppedAreaCharts'), Content: {Text: 'Stepped Area Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('TableCharts'), Content: {Text: 'Table Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('Timelines'), Content: {Text: 'Timelines', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('TreeMapCharts'), Content: {Text: 'Tree Map Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('Trendlines'), Content: {Text: 'Trendlines', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('VegaChart'), Content: {Text: 'VegaChart', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('WaterfallCharts'), Content: {Text: 'Waterfall Charts', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('WordTrees'), Content: {Text: 'Word Trees', Icon: 'fa-solid fa-layer-group',},},
          {Data: r.concat('MiscellaneousExamples'), Content: {Text: 'Miscellaneous Examples', Icon: 'fa-solid fa-layer-group',},},
        ]
      } as TreeItem,
      {
        Data: '/Todo/Overview',
        Content: {Text: 'Todo', Icon: 'fa-solid fa-folder'}, Expanded: true,
      } as TreeItem,
      {
        Data: '/Hmm/Overview',
        Content: {Text: 'Hmm', Icon: 'fa-solid fa-folder'}, Expanded: true,
      } as TreeItem,
    ];

    this.CheckUrl(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.CheckUrl(event.url);
      }
    });
  }

  CheckUrl(url: string): void {
    //I need here the path of route E.G '/page/:id/' from root
    const pathList = url.split('/');
    // console.log(pathList, pathList[2]);

    const IsLootstrap = pathList.indexOf('Lootstrap-angular') > -1;
    const IsTooltip = pathList.indexOf('NgTooltip') > -1;
    const IsMapper = pathList.indexOf('NgMapper') > -1;
    const IsHighlighter = pathList.indexOf('NgHighlighter') > -1;

    const Lootstrap = this.TreeItems.find(x => x.Content.Text === 'Lootstrap-angular');
    const Tooltip = this.TreeItems.find(x => x.Content.Text === 'Tooltip');
    const Mapper = this.TreeItems.find(x => x.Content.Text === 'Mapper');
    const Highlighter = this.TreeItems.find(x => x.Content.Text === 'Highlighter');

    if (Lootstrap) {
      // Lootstrap.Expanded = IsLootstrap;
      Lootstrap.Checked = url === '/Lootstrap-angular/Overview';
      // const selected = LootBox.Children.find(x => x.Text == pathList[2]);
      const selected = Lootstrap.Children.find(x => '/' + x.Data == url);
      if (selected) {
        selected.Checked = true;
      }
    }

    if (Tooltip) {
      // Tooltip.Expanded = IsTooltip;
      Tooltip.Checked = Tooltip.Data == url;
    }
    if (Mapper) {
      // Mapper.Expanded = IsMapper;
      Mapper.Checked = Mapper.Data == url;
    }
    if (Highlighter) {
      // Highlighter.Expanded = IsHighlighter;
      Highlighter.Checked = Highlighter.Data == url;
    }
  }

  SelectedItems(results: TreeItem[]) {
    // console.log('SelectedItems', results[0]);
    if (results[0] && results[0].Data) {
      this.router.navigate([results[0].Data]).then();
    }
  }
}
