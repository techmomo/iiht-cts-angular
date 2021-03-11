import { Component, OnInit } from '@angular/core';
import { EmptyError } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'hello-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any[]

  // constructor injection for initialising service within controller / or any other angular class
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getCachedUser('https://reqres.in/api/users?page=2').subscribe(req=>{
      this.users = req.data
    }); 
    throw new EmptyError();
    //throw new Error('Test Custom Error Handler')  
  }
}
