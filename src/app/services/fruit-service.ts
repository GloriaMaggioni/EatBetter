import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FruitsModel } from '../models/fruits-model';
import { error } from 'console';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private http = inject(HttpClient);
  private baseUrl : string = '/api/fruit/all'

  // fruits : FruitsModel[] = []
  fruits$ = new BehaviorSubject<FruitsModel[]> ([])
  
  // api url per prendere tutti i frutti /api/fruit/all


  // chiamata per prendere tutti i frutti

  getAllFruits(){
    this.http.get(this.baseUrl).subscribe({
      next: (data: any) =>{
        this.fruits$ = data;
        console.log(data)
      },
      error: (err: any) => console.error('Errore nella chiamata', error)
    })
  }
}
