import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStrategyComponent } from './third-strategy.component';

describe('ThirdComponent', () => {
  let component: ThirdStrategyComponent;
  let fixture: ComponentFixture<ThirdStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
