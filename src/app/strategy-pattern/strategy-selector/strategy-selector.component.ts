import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { FirstComponent, SecondComponent, StrategyResultType, ThirdComponent } from '../strategies';
import { Strategy } from '../strategy';
import { StrategyContainerDirective } from '../strategy-container.directive';

@Component({
  selector: 'app-strategy-selector',
  templateUrl: './strategy-selector.component.html'
})
export class StrategySelectorComponent implements OnInit {

  @ViewChild(StrategyContainerDirective, { static: true }) public strategyContainer!: StrategyContainerDirective;

  @Output() valueUpdated: EventEmitter<StrategyResultType> = new EventEmitter<StrategyResultType>();

  public strategies: Strategy[] = [
    new Strategy('first', 'First', FirstComponent),
    new Strategy('second', 'Second', SecondComponent),
    new Strategy('third', 'Third', ThirdComponent),
  ];

  public selectedStrategy!: Strategy;

  public ngOnInit(): void {
    this._switchStrategy(this.strategies[0]);
  }

  public setStrategy(index: number): void {
    this._switchStrategy(this.strategies[index]);
  }

  public triggerValueEvent(): void {
    this.valueUpdated.emit(this.selectedStrategy.getFormData());
  }
  
  private _switchStrategy(strategy: Strategy): void {
    if (this.selectedStrategy) {
      this.strategyContainer.viewContainerRef.detach();
    }
    
    this.valueUpdated.emit(undefined);
    this.selectedStrategy = strategy;

    if (strategy.componentRef) {
      this.strategyContainer.viewContainerRef.insert(strategy.componentRef.hostView);
    } else {
      strategy.componentRef = this.strategyContainer.viewContainerRef.createComponent(strategy.componentClass);
    }
  }
}
