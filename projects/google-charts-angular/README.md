# GoogleChartsAngular

[![Support](https://img.shields.io/badge/Patreon-whitesmoke?style=for-the-badge)](https://www.patreon.com/qrsln)
[![npm](https://img.shields.io/npm/v/@qrsln/lootstrap-angular?style=for-the-badge)](https://www.npmjs.com/package/@qrsln/google-charts-angular)
[![npm](https://img.shields.io/npm/dt/@qrsln/lootstrap-angular?style=for-the-badge)](https://npmcharts.com/compare/@qrsln/google-charts-angular?minimal=true)

> A wrapper for the [Google Charts library](https://google-developers.appspot.com/chart/) written in Angular.

[![Demo](https://img.shields.io/badge/Demo-Usage-orange?style=for-the-badge)](https://krsln.github.io/NgGoogleCharts)
![GitHub top language](https://img.shields.io/github/languages/top/krsln/NgGoogleCharts?style=for-the-badge)

## Install

With [npm](https://npmjs.org/) installed, run

```bash
npm install @qrsln/GoogleChartsAngular
```

## Usage

Import the `GoogleChartsModule` in your `app.module.ts`:

```typescript
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  ...
  imports: [
    ...
    GoogleChartsModule,
    ...
  ],
  ...
})
export class AppModule {}
```

And create a `GoogleChart` component somewhere in your application:

```html
<GoogleChart
  [title]="chart.title"
  [type]="chart.type"
  [data]="chart.data"
  [columns]="chart.columns"
  [options]="chart.options"
>
</GoogleChart>
```

## Detailed Instructions

Find the full readme at [GitHub](https://github.com/krsln/NgGoogleCharts).

## License

MIT
