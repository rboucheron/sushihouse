import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  apiUrl: string = 'https://sushihouse.website/api/drink'; 

  constructor(private http: HttpClient) {}


  public getDrinks(): Observable<any>{
    return this.http.get(this.apiUrl);

  }
  
}