import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingBadComponent } from './breaking-bad.component';

describe('BrakingBadComponent', () => {
  let component: BreakingBadComponent;
  let fixture: ComponentFixture<BreakingBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingBadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakingBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
