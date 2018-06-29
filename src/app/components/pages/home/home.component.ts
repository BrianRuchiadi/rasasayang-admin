import { Component, OnInit } from '@angular/core';
import { NavigationSliderService } from '../../../services/utilities/navigation-slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../../../styles/pages/_home.scss']
})
export class HomeComponent implements OnInit {
  elementContent: any;

  constructor(
    private navigationSliderService: NavigationSliderService
  ) { }

  ngOnInit() {
    this.initElementSelector();
    this.observeBurgerState();
  }

  initElementSelector() {
    this.elementContent = document.getElementById('content');
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

}
