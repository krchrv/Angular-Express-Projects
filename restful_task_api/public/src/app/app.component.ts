import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks;
  aTask;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
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
    let observable = this._httpService.getTaskById('5ddb56c97ed1392a3c71c825');
    observable.subscribe(data => {
      console.log("3rd task***", data);
    })
  }

  onButton(num: number): void {
    console.log(`Button click with param: ${num}`);
    this.getTasksFromService()
    let obs = this._httpService.postToServer({data: num})
    obs.subscribe(data => {
      console.log("Got data??", data);
    })
  }

  onShowBtn(id: string): void {
    console.log(`The id that was clicked: ${id}`);
    let obs = this._httpService.getTaskById(id);
    obs.subscribe(data => {
      console.log("onShowBtn data:", data);
      this.aTask = data;
    })
  }
}
