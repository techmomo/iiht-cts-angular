import { Observable } from 'rxjs';

export class CacheService{
    // create a map of api calls
   private httpRequests:Map<string,Observable<any>> = new Map();

  // using localstore
  setItem(key:string,value:Observable<any>){
    //   if(!localStorage.getItem(key)){
    //     localStorage.setItem(key, JSON.stringify(value));
    //   }
    this.httpRequests.set(key,value);
  }
  getItem(key:string){
    // let strValue = localStorage.getItem(key);
    // return JSON.parse(strValue);
    return this.httpRequests.get(key);
  }
}
