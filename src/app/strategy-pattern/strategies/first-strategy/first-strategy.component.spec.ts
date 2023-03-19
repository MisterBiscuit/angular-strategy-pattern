import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStrategyComponent } from './first-strategy.component';

describe('FirstComponent', () => {
  let component: FirstStrategyComponent;
  let fixture: ComponentFixture<FirstStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
