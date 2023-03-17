import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AbstractStrategyComponent } from '../../abstract-strategy.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent extends AbstractStrategyComponent implements OnInit {
  public initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      food: new FormControl(),
    });
  }
}
