import { ComponentType } from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core';

import { AbstractStrategyComponent } from './abstract-strategy.component';

export class Strategy {
  constructor(
    public name: string,
    public label: string,
    public componentClass: ComponentType<AbstractStrategyComponent>,
    public componentRef?: ComponentRef<AbstractStrategyComponent>
  ) {
  }

  public getFormData(): Record<string, any> | undefined {
    return this.componentRef?.instance?.getFormData();
  }
}