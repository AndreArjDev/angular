import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddCarrinhoComponent } from './btn-add-carrinho.component';

describe('BtnAddCarrinhoComponent', () => {
  let component: BtnAddCarrinhoComponent;
  let fixture: ComponentFixture<BtnAddCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
