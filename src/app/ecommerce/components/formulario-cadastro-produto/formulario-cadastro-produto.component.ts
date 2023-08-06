import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cadastro-produto',
  templateUrl:'./formulario-cadastro-produto.component.html',
  styleUrls: ['./formulario-cadastro-produto.component.css']
})
export class FormularioCadastroProdutoComponent implements OnInit {

  formularioCadastro: FormGroup

  constructor(private formbuilder: FormBuilder) {
    this.formularioCadastro = this.formbuilder.group({
        nome: [null, Validators.required],
        preco: [null, Validators.required],
        imagem:[null, [Validators.required, Validators.min(1)]],
    })
   }

  ngOnInit(): void {
  }

  public isCampoInvalido(campo: string){
    return this.formularioCadastro.get(campo)?.invalid;
  }

  public isValorInvalido(campo: string){
    return this.formularioCadastro.get(campo)?.value < 1
  }

  submitForm(): void{
    if(this.formularioCadastro.invalid){
      return;
    }
    alert(this.formularioCadastro.value)
  }

}
