import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AbstractStrategyComponent, FirstType } from '..';

interface IHero {
  value: string;
  name: string;
}

@Component({
  selector: 'app-first-strategy',
  templateUrl: './first-strategy.component.html'
})
export class FirstStrategyComponent extends AbstractStrategyComponent<FirstType> implements OnInit {

  public readonly heroes: IHero[] = [
    { name: 'Bruce Wayne', value: 'bwayne' },
    { name: 'Tony Stark', value: 'tstark' },
    { name: 'Clark Kent', value: 'ckent' },
    { name: 'Steve Rogers', value: 'srogers' },
    { name: 'Bruce Banner', value: 'bbanner' },
  ];

  public initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      superhero: new FormControl(null, Validators.required),
    });
  }
}
