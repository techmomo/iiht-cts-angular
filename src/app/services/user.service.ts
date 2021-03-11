import { Injectable } from '@angular/core';
import { HttpClient as Http } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheService } from './CacheService';
import { shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private cacheService:CacheService = new CacheService();

  users:Observable<any>;
  constructor(private http:Http) { 

  }

  getCachedUser(_url:string){
    this.getApiData(_url);
    return this.users;
  }
  getApiData(_url){
    this.users = this.http.get(_url).pipe( shareReplay(1));

  }
  getUser(_url:string): Observable<any>{
    // get api response from http client module
    // use interim cache instead
    let users:Observable<any>;
    if(this.cacheService.getItem(_url)!== undefined ){
      users = this.cacheService.getItem(_url); // 
    }else{
      let res = this.http.get(_url);
      // set the value in cache
      this.cacheService.setItem(_url,res);
      users = res;
    }
    return users;
  }
}

// Angular 
// build on top on Node Js -- Event Emitter 
// Angular is reactive
// we perform async calls - 
// Event Emitter
// Someone who sends an event
// others listen on the events being sent
