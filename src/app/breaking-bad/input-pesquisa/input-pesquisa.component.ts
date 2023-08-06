import { Component} from '@angular/core';
import { InputService } from './service/input.service';

@Component({
  selector: 'app-input-pesquisa',
  templateUrl: './input-pesquisa.component.html',
  styleUrls: ['./input-pesquisa.component.css']
})
export class InputPesquisaComponent {

  quantidade: number = 1;

  constructor(private inputService: InputService) { }

  enviarQuantidade(): void {
      if(this.quantidade<1){
        alert('deu ruim')
        return;
      }
      this.inputService.notificar(this.quantidade);
  }

}
