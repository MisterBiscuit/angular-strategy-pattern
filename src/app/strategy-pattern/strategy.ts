import { ComponentType } from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core';

import { AbstractStrategyComponent, StrategyResultType } from './strategies';

export class Strategy {
  constructor(
    public name: string,
    public label: string,
    public componentClass: ComponentType<AbstractStrategyComponent<StrategyResultType>>,
    public componentRef?: ComponentRef<AbstractStrategyComponent<StrategyResultType>>
  ) {
  }

  public getFormData(): StrategyResultType {
    return this.componentRef?.instance?.getFormData();
  }
}
