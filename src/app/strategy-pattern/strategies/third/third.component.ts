import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

import { AbstractStrategyComponent, ThirdType } from '../';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html'
})
export class ThirdComponent extends AbstractStrategyComponent<ThirdType> implements OnInit {

  public colourControl: FormControl = new FormControl('primary' as ThemePalette, Validators.required);

  public initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      colour: this.colourControl,
    });
  }
}
