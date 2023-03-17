import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

import { AbstractStrategyComponent } from '../../abstract-strategy.component';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html'
})
export class ThirdComponent extends AbstractStrategyComponent implements OnInit {

  public initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      colour: new FormControl('primary' as ThemePalette, Validators.required),
    });
  }
}
