import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }



  likePost(id) {
    var token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json', 'Authorization': 'Bearer ' + token })
    };
    return this.http.post('http://localhost:8080/api/messages/'+id+'/vote/like',null,httpOptions);
  }


    dislikePost(id) {
      var token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type':  'application/json', 'Authorization': 'Bearer ' + token })
      };
      return this.http.post('http://localhost:8080/api/messages/'+id+'/vote/dislike',null,httpOptions);
    }


}
