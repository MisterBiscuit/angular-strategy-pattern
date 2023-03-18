import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AbstractStrategyComponent, SecondType } from '../';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent extends AbstractStrategyComponent<SecondType> implements OnInit {
  public initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      food: new FormControl(),
    });
  }
}
