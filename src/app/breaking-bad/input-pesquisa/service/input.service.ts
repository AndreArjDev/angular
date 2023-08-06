import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  //eventEmitter:  EventEmitter<number>= new EventEmitter();
  //private inputSubject = new Subject<number>();
  //private inputSubject = new BehaviorSubject<number>(1);
  private inputSubject = new ReplaySubject<number>(3);

  notificar(quantidade: number): void {
    this.inputSubject.next(quantidade);
  }

  escutar(): Observable<number> {
      return this.inputSubject.asObservable();
  }

}
