import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from '../material-components.module';

import { FirstComponent, SecondComponent, ThirdComponent } from './strategies';
import { StrategyContainerDirective } from './strategy-container.directive';
import { StrategySelectorComponent } from './strategy-selector/strategy-selector.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
  ],
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    StrategySelectorComponent,
    StrategyContainerDirective,
  ],
  exports: [
    StrategySelectorComponent,
  ],
})
export class StrategyPatternModule {
}
