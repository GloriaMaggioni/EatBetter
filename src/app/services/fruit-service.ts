import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FruitsModel } from '../models/fruits-model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private http = inject(HttpClient);
  private baseUrl : string = 'https://www.fruityvice.com/api/fruit/all'

  
  fruits$ = new BehaviorSubject<FruitsModel[]> ([])
  



  // chiamata per prendere tutti i frutti

  getAllFruits(){
   return this.http.get(this.baseUrl).subscribe({
      next: (response: any) =>{
        this.fruits$.next(response);
        console.log('Dati dalla chiamata api',response)
      },
       error: (err: any) => console.error('Errore nella chiamata', err)
    })
  }
}
