import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  apiUrl: string = 'https://sushihouse.website/api/box'; 

  constructor(private http: HttpClient) {}

  public getBoxs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  public getBox(id: number): Observable<any> {
    const url: string = this.apiUrl + '?id=' + id; 
    return this.http.get(url);

  }
}
