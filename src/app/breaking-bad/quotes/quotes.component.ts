import { InputService } from './../input-pesquisa/service/input.service';
import { Component, OnDestroy} from '@angular/core';
import { QuotesService } from './service/quotes.service';
import { Quote } from './model/quote';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnDestroy {

  quotes: Quote[] = [];
  quantidade!: number;
  private quantidadeSubscription: Subscription;

  constructor(private quotesService: QuotesService, private inputService: InputService) {
    this.quantidadeSubscription = this.inputService.escutar().subscribe( quantidade => {
      console.log(quantidade);
      this.quantidade = quantidade;
      this.buscarQuotes();
     })
  }

  ngOnDestroy(): void {
    this.quantidadeSubscription.unsubscribe();
  }

  buscarQuotes(){
    this.quotesService.buscar(this.quantidade).subscribe(resposta => this.quotes = resposta);
  }
}
