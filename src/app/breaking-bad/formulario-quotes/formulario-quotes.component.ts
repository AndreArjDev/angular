import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-quotes',
  templateUrl: './formulario-quotes.component.html',
  styleUrls: ['./formulario-quotes.component.css']
})
export class FormularioQuotesComponent implements OnInit {

  formQuotes!: FormGroup;


  constructor(private formbuilder: FormBuilder ) {
   }

  ngOnInit(): void {
    this.formQuotes = this.formbuilder.group({
      quote: ['', Validators.required],
      autor: ['', [Validators.required, Validators.pattern('^[(]{0,1}?[0-9]{2}[)]{0,1}?[ ]{0,1}[0-9]{4,5}[-]{0,1}?[0-9]{4}$')]],
      email: ['', [Validators.required, Validators.email]],
      imagem: [''],

    })
  }

  public isCampoInvalido(campo: string) {
      return this.formQuotes.get(campo)?.invalid;
  }

  enviar(): void {
    if(this.formQuotes.invalid){
      return;
    }
    console.log(this.formQuotes.value)
  }

}
