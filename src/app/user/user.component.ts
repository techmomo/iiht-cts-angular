import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any[]
  constructor(private service:UserService) { }

  ngOnInit(): void {
   // try{
    this.service.getCachedUser('https://reqres.in/api/users?page=2').subscribe(res=>{
      this.users = res.data;
    });
  //   console.log('try block is finished');
     throw new Error('Unable to process the request');
  // }catch(er){
  //   console.log(er);
  // }
    
  }
}
