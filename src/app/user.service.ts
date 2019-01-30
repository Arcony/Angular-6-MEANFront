import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  listMessages() {
    return this.http.get('http://localhost:8080/api/messages');
  }

  
  register(email, username, password, bio) {
    const user =  {
      email: email,
      username: username,
      password: password,
      bio: bio
    }

    return this.http.post('http://localhost:8080/api/users/register/',user);
  }

  login (email, password) {

    const user =  {
      email: email,
      password: password,
    }
    return this.http.post('http://localhost:8080/api/users/login',user);
  }

}
