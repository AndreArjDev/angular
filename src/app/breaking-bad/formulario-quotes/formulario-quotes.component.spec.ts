import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioQuotesComponent } from './formulario-quotes.component';

describe('FormularioQuotesComponent', () => {
  let component: FormularioQuotesComponent;
  let fixture: ComponentFixture<FormularioQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
