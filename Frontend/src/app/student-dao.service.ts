import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { stuBean } from './studentBean';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentDAOService {
  private baseUrl: string = 'http://localhost:8080/SWBackend/jaxrs';

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<stuBean> {
    return this.http.get<stuBean>(`${this.baseUrl}/Student/${id}`,
                                  {headers: this.getHeaders()});
  }
 
  getAll(): Observable<stuBean[]> {
     return this.http.get<stuBean[]>(`${this.baseUrl}/Student`,
                                  {headers: this.getHeaders()});
  }
 
  save(data, likes){
    let likesList = "";
    for(let i = 0; i < likes.length; i++) {
      if(i == 0) {likesList = likes[i]}
      else {likesList = likesList.concat(" & " + likes[i])}
    }
    let values = {
      sid: data.sid, fName: data.fName, lName: data.lName, address: data.address,
      city: data.city, state: data.state, zip: data.zip, phone: data.phone,
      email: data.email, date: data.date, likes: likesList,
      interested: data.interested, rating: data.rating
    };
    console.log('Saving student ' + JSON.stringify(values));
    return this.http.put(`${this.baseUrl}/Student`, JSON.stringify(values),
                         {headers: this.getHeaders()});
  }
 
  private getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
