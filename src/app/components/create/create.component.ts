import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  user: User;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  fetchUsers(login, password) {
    this.userService
    .login(login, password)
    .subscribe((data: User) => {
      this.user = data;
      console.log('Data Requested ....');
      localStorage.setItem('token',this.user.token);
      localStorage.setItem('username',this.user.username);
      console.log('Token Saved');
      console.log(localStorage.getItem('token'));
      if(this.user.token != null)
        this.router.navigate(['/list']);
    });
  };

  logout() {
    console.log("logout?");
    localStorage.clear;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
