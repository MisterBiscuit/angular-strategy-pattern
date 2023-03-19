import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from '../material-components.module';

import { FirstStrategyComponent, SecondStrategyComponent, ThirdStrategyComponent } from './strategies';
import { StrategyContainerDirective } from './strategy-container.directive';
import { StrategySelectorComponent } from './strategy-selector/strategy-selector.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
  ],
  declarations: [
    FirstStrategyComponent,
    SecondStrategyComponent,
    ThirdStrategyComponent,
    StrategySelectorComponent,
    StrategyContainerDirective,
  ],
  exports: [
    StrategySelectorComponent,
  ],
})
export class StrategyPatternModule {
}
