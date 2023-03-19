import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStrategyComponent } from './second-strategy.component';

describe('SecondComponent', () => {
  let component: SecondStrategyComponent;
  let fixture: ComponentFixture<SecondStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
