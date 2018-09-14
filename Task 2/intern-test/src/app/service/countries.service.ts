import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CONSTANTS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpService: HttpClient) { }

 
  getCountries() {

    return this._httpService.get(CONSTANTS.AFRICA);
}

}
