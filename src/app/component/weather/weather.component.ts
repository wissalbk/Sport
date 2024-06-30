import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
weatherForm!:FormGroup;
apiResult:any;

  constructor(private formBuilder:FormBuilder,private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherForm=this.formBuilder.group({
      city:['']
    })
  }
searchWeather(){

  console.log("here objet",this.weatherForm.value)

this.weatherService.search(this.weatherForm.value).subscribe((res)=>{
  console.log("Here result search",res.apiRes);
  this.apiResult=res.apiRes;

})
}
}
