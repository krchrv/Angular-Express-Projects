import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks;
  thirdTask;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getTasksFromService()
    this.getOneTaskFromService()
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our tasks!:", data);
      this.tasks = data;
    })
  }

  getOneTaskFromService() {
    let observable = this._httpService.getTaskById('5ddb56c97ed1392a3c71c825')
    observable.subscribe(data => {
      console.log("3rd task***", data);
      this.thirdTask = data;
    })
  }
}
