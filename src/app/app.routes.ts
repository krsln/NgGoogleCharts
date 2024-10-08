import {Routes} from '@angular/router';
import {GeoChartsComponent} from "./Components/geo-charts/geo-charts.component";
import {AreaChartsComponent} from "./Components/area-charts/area-charts.component";
import {BarChartsComponent} from "./Components/bar-charts/bar-charts.component";
import {BubbleChartsComponent} from "./Components/bubble-charts/bubble-charts.component";
import {CalendarChartsComponent} from "./Components/calendar-charts/calendar-charts.component";
import {CandlestickChartsComponent} from "./Components/candlestick-charts/candlestick-charts.component";
import {ColumnChartsComponent} from "./Components/column-charts/column-charts.component";
import {ComboChartsComponent} from "./Components/combo-charts/combo-charts.component";
import {DiffChartsComponent} from "./Components/diff-charts/diff-charts.component";
import {GanttChartsComponent} from "./Components/gantt-charts/gantt-charts.component";
import {GaugeChartsComponent} from "./Components/gauge-charts/gauge-charts.component";
import {HistogramsComponent} from "./Components/histograms/histograms.component";
import {IntervalsComponent} from "./Components/intervals/intervals.component";
import {LineChartsComponent} from "./Components/line-charts/line-charts.component";
import {MapsComponent} from "./Components/maps/maps.component";
import {OrgChartsComponent} from "./Components/org-charts/org-charts.component";
import {PieChartsComponent} from "./Components/pie-charts/pie-charts.component";
import {SankeyDiagramsComponent} from "./Components/sankey-diagrams/sankey-diagrams.component";
import {TableChartsComponent} from "./Components/table-charts/table-charts.component";
import {TimelinesComponent} from "./Components/timelines/timelines.component";
import {TreeMapChartsComponent} from "./Components/tree-map-charts/tree-map-charts.component";
import {TrendlinesComponent} from "./Components/trendlines/trendlines.component";
import {VegaChartComponent} from "./Components/vega-chart/vega-chart.component";
import {WordTreesComponent} from "./Components/word-trees/word-trees.component";
import {ScatterChartsComponent} from "./Components/scatter-charts/scatter-charts.component";
import {SteppedAreaChartsComponent} from "./Components/stepped-area-charts/stepped-area-charts.component";
import {AppComponent} from "./app.component";
import {OverviewComponent} from "./overview/overview.component";

export const routes: Routes = [
  {path: 'Overview', data: {breadcrumb: 'Overview'}, component: OverviewComponent},

  {path: 'AreaCharts', component: AreaChartsComponent},
  {path: 'BarCharts', component: BarChartsComponent},
  {path: 'BubbleCharts', component: BubbleChartsComponent},
  {path: 'CalendarCharts', component: CalendarChartsComponent},
  {path: 'CandlestickCharts', component: CandlestickChartsComponent},
  {path: 'ColumnCharts', component: ColumnChartsComponent},
  {path: 'ComboCharts', component: ComboChartsComponent},
  {path: 'DiffCharts', component: DiffChartsComponent},
  {path: 'DonutCharts', data: {}, component: PieChartsComponent}, // todo: redirect PieCharts#Donut
  {path: 'GanttCharts', component: GanttChartsComponent},
  {path: 'GaugeCharts', component: GaugeChartsComponent},
  {path: 'GeoCharts', component: GeoChartsComponent},
  {path: 'Histograms', component: HistogramsComponent},
  {path: 'Intervals', component: IntervalsComponent},
  {path: 'LineCharts', component: LineChartsComponent},
  {path: 'Maps', component: MapsComponent},
  {path: 'OrgCharts', component: OrgChartsComponent},
  {path: 'PieCharts', component: PieChartsComponent},
  {path: 'SankeyDiagrams', component: SankeyDiagramsComponent},
  {path: 'ScatterCharts', component: ScatterChartsComponent},
  {path: 'SteppedAreaCharts', component: SteppedAreaChartsComponent},
  {path: 'TableCharts', component: TableChartsComponent},
  {path: 'Timelines', component: TimelinesComponent},
  {path: 'TreeMapCharts', component: TreeMapChartsComponent},
  {path: 'Trendlines', component: TrendlinesComponent},
  {path: 'VegaChart', component: VegaChartComponent},
  {path: 'WaterfallCharts', component: CandlestickChartsComponent}, // todo: redirect CandlestickCharts#Waterfall
  {path: 'WordTrees', component: WordTreesComponent},

  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/Overview', pathMatch: 'full'}
    ]
  },

];
