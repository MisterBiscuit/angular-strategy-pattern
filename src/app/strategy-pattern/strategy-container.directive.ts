import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[strategyContainer]'
})
export class StrategyContainerDirective {
  constructor(public readonly viewContainerRef: ViewContainerRef) {
  }
}
