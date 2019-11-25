import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask();
  }

  getTasks() {

    let tempObservable = this._http.get('/tasks');

    tempObservable.subscribe(data => console.log("Got our tasks!: ", data));
  }

  getOneTask() {

    let tempObservable = this._http.get('/tasks/5ddb56a67ed1392a3c71c823');

    tempObservable.subscribe(data => console.log("One task: ", data));

  }
}
