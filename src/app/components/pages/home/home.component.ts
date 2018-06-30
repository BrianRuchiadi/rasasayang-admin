import { Component, OnInit } from '@angular/core';
import { NavigationSliderService } from '../../../services/utilities/navigation-slider.service';
import { incomeChart } from '../../../mock/chart';
import { generateIncomeChart } from '../../../functions/chart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../../../styles/pages/_home.scss']
})
export class HomeComponent implements OnInit {
  elementContent: any;
  elementCanvasIncomeChart: any;
  incomeChartData: any;

  constructor(
    private navigationSliderService: NavigationSliderService
  ) { }

  ngOnInit() {
    this.initElementSelector();
    this.initIncomeChart();
    this.observeBurgerState();
  }

  initIncomeChart() {
    this.incomeChartData = incomeChart;

    generateIncomeChart(
      this.elementCanvasIncomeChart,
      this.incomeChartData
    );
  }

  initElementSelector() {
    this.elementContent = document.getElementById('content');
    this.elementCanvasIncomeChart = document.getElementById('income-chart');
    // clientWidth
  }

  observeBurgerState() {
    this.navigationSliderService.slideStateObservable.subscribe(
      (state) => {
        if (!state) {
          this.elementContent.style.animation = 'contentExpand 1s ease-in-out 1';
          setTimeout(() => this.elementContent.style.width = '100vw', 1000);
          return;
        }

        this.elementContent.style.animation = 'contentCollapse 1s ease-in-out 1';
        setTimeout(() => this.elementContent.style.width = 'calc(100vw - 200px)', 1000);
      }
    );
  }

  resizeCanvas(ev) {
    generateIncomeChart(
      this.elementCanvasIncomeChart,
      this.incomeChartData
    );
  }

}
