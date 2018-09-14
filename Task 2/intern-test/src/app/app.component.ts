import { Component, OnInit } from '@angular/core';
import { CountriesService } from './service/countries.service'
import { ToastrService } from 'ngx-toastr';
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hamza Bashir';
  countries;
  timezones;
  displayColour = false;

  constructor(private country: CountriesService, private toastr: ToastrService){
    this.toastr.info('Welcome to app by Hamza Bashir');
  }

  ngOnInit(){
    this.country.getCountries().subscribe(
      res=>{
        console.log(res)
        this.countries = res;
      }
    );
    var map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
  });
  }
}
