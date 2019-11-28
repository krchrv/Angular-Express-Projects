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
  newTask: any;
  thisTask: any;
  wasEditBtnClicked: boolean;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.wasEditBtnClicked = false;
    this.newTask = { title: '', description: '' };
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
    let observable = this._httpService.getTaskById('5ddb56c97ed1392a3c71c825');
    observable.subscribe(data => {
      console.log("3rd task***", data);
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

  onDeleteBtn(id: string) {
    let obs = this._httpService.deleteTaskById(id);
    obs.subscribe(data => {
      console.log("Deleting task*****", data);
      this.getTasksFromService();
      this.wasEditBtnClicked = false;
    })
  }

  onEditBtn(thisTask: Object) {
    this.wasEditBtnClicked = true;
    this.thisTask = thisTask;
  }

  onFormSubmit() {
    console.log("TITLE INPUT*****", this.newTask.title);
    let obs = this._httpService.createTask({ 
      title: this.newTask.title,
      description: this.newTask.description
    });

    obs.subscribe(data => {
      console.log("Form data***:", data);
      this.getTasksFromService();
      this.newTask = { title: '', description: '' };
    })
  }

  onEditFormSubmit() {
    let obs = this._httpService.editTaskById(this.thisTask._id, this.thisTask);
    obs.subscribe(data => {
      console.log("Edit form button click****", data);
    })
  }
}
