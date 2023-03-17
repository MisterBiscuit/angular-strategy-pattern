import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AbstractStrategyComponent } from '../../abstract-strategy.component';

interface IHero {
  value: string;
  name: string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent extends AbstractStrategyComponent implements OnInit {

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
