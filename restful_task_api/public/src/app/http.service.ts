import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getTaskById(id: string) {
    return this._http.get(`/tasks/${id}`);
  }

  createTask(newTask) {
    return this._http.post('/tasks', newTask);
  }

  deleteTaskById(id: string) {
    return this._http.delete(`/tasks/${id}`);
  }

  editTaskById(id: string, thisTask) {
    return this._http.put(`/tasks/${id}`, thisTask);
  }
}
