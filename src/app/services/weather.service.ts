import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient ) { }
  weatherURL='http://localhost:3000/api/weather';
  search(obj:any){
    return this.httpClient.post<{apiRes:any}>(this.weatherURL,obj);
  }

}
