import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getCakeById(id: string) {
    return this._http.get(`http://localhost:3000/cakes/${id}`);
  }

  getCakes() {
    return this._http.get('http://localhost:3000/cakes');
  }

  createCake(newCake) {
    return this._http.post('http://localhost:3000/cakes', newCake);
  }

  postRating(id: string, cakeRating) {
    return this._http.post(`http://localhost:3000/rate/${id}/`, cakeRating);
  }
}
             