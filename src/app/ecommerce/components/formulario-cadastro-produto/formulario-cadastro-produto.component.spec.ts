import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastroProdutoComponent } from './formulario-cadastro-produto.component';

describe('FormularioCadastroProdutoComponent', () => {
  let component: FormularioCadastroProdutoComponent;
  let fixture: ComponentFixture<FormularioCadastroProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCadastroProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
