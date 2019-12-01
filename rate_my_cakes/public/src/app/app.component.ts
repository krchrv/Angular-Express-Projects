import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cake } from './models/cake';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake = new Cake();
  allCakes: Cake[] = [];
  wasViewHit: boolean;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newCake = { cakeURL: '', baker: '', rating: null };
    this.getCakesFromService();
  }

  getCakesFromService() {
    let obs = this._httpService.getCakes();
    obs.subscribe(data => {
      console.log("All Cakes???******", data);
      this.allCakes = data;
    })
  }

  onCakeSubmit(event: Event, cakeForm: NgForm) {
    event.preventDefault();
    this.newCake = cakeForm.value;
    this.allCakes.push(this.newCake);
    let obs = this._httpService.createCake(this.newCake);
    obs.subscribe(data => {
      console.log("data***", data);
    })
    // this.newCake = new Cake();
    this.getCakesFromService();
  }

  onViewCakes() {
    if(this.wasViewHit) {
      this.wasViewHit = false;
    } else {
      this.wasViewHit = true;
    }
  }

  onRateForm(event: Event, rateForm: NgForm, cake: Cake) {
    event.preventDefault();
    cake.rating = rateForm.value;
    console.log("Cake selected rating: ", cake.rating);
    console.log("Cakes array***", this.allCakes);
  }
}