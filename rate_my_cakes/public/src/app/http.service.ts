import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Cake } from './models/cake';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getCakes(): Observable<Cake[]> {
    return this._http.get<Cake[]>('http://localhost:3000/cakes');
  }

  createCake(newCake: Cake): Observable<Cake> {
    console.log("Is this being hit?");
    return this._http.post<Cake>('http://localhost:3000/cakes', newCake);
  }
}
