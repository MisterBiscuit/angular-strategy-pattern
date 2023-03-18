import { Component } from '@angular/core';

import { StrategyResultType } from './strategy-pattern/strategies';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly title = 'Angular strategy pattern';
  public strategyData: (StrategyResultType)[] = [];

  public addStrategyData(data: StrategyResultType): void {
    this.strategyData.push(data);
  }
}
