import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPesquisaComponent } from './input-pesquisa.component';

describe('InputPesquisaComponent', () => {
  let component: InputPesquisaComponent;
  let fixture: ComponentFixture<InputPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
