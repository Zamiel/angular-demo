import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ApexChart, ApexAxisChartSeries, ChartComponent, ApexTooltip } from 'ng-apexcharts';

@Component({
  selector: 'app-ag-graph-cell-renderer',
  standalone: true,
  imports: [
    ChartComponent,
  ],
  templateUrl: './ag-graph-cell-renderer.component.html',
  styleUrl: './ag-graph-cell-renderer.component.scss'
})
export class AgGraphCellRendererComponent implements ICellRendererAngularComp {
  protected chart: ApexChart = {
    type: 'line',
    height: 39,
    sparkline: {
      enabled: true
    }
  } as ApexChart;
  protected options?: { series: ApexAxisChartSeries };
  protected tooltip: ApexTooltip =  { enabled: false };

  agInit(params: ICellRendererParams): void {
    this.chart.width = (params.column?.getActualWidth() ?? 0) - 50;
    console.log(params.column?.getActualWidth());
    this.options = {
      series: [
        {
          name: 'chart-line-sparkline',
          data: params.value,
          type: 'line',
        }
      ]
    };
  }

  refresh(params: ICellRendererParams): boolean {
    this.agInit(params);
    return true;
  }
}
