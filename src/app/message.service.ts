import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }



  likePost(id) {
    var token = sessionStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json', 'Authorization': 'Bearer ' + token })
    };
    console.log(httpOptions);
    return this.http.post('http://localhost:8080/api/messages/2/vote/like',null,httpOptions);
  }

}
