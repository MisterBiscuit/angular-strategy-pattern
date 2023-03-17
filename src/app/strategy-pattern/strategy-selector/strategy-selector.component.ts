import { Component, OnInit, ViewChild } from '@angular/core';

import { FirstComponent, SecondComponent, ThirdComponent } from '../strategies';
import { Strategy } from '../strategy';
import { StrategyContainerDirective } from '../strategy-container.directive';

@Component({
  selector: 'app-strategy-selector',
  templateUrl: './strategy-selector.component.html'
})
export class StrategySelectorComponent implements OnInit {

  @ViewChild(StrategyContainerDirective, { static: true }) public strategyContainer!: StrategyContainerDirective;

  public strategies: Strategy[] = [
    new Strategy('first', 'First', FirstComponent),
    new Strategy('second', 'Second', SecondComponent),
    new Strategy('third', 'Third', ThirdComponent),
  ];

  public selectedStrategy!: Strategy;
  public strategyValues: Record<string, any> | undefined;

  public ngOnInit(): void {
    this._setStrategy(this.strategies[0]);
  }

  public switchStrategy(index: number): void {
    this._setStrategy(this.strategies[index]);
  }

  public doSomething(): void {
    this.strategyValues = this.selectedStrategy.getFormData();
  }
  
  private _setStrategy(strategy: Strategy): void {
    this.strategyValues = undefined;
    this.selectedStrategy = strategy;
    this.strategyContainer.viewContainerRef.clear();
    strategy.componentRef = this.strategyContainer.viewContainerRef.createComponent(strategy.componentClass);
  }
}
