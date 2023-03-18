import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { StrategyResultType } from '.';

@Component({
  template: ''
})
export abstract class AbstractStrategyComponent<T extends StrategyResultType> implements OnInit {

  public formGroup!: FormGroup;

  public abstract initFormGroup(): void;

  constructor(protected readonly formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.initFormGroup();
  }

  public getFormData(): T | undefined {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return undefined;
    }
    return this.formGroup?.value;
  }
}
