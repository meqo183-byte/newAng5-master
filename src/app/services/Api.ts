import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http : HttpClient){
   
  } 

    baseUrl = "https://restaurant.stepprojects.ge/api/"

    getAll(url : string){
     return this.http.get(this.baseUrl + url)

    }


   baseUrl2 = "https://restaurantapi.stepacademy.ge/api/"
    getAll2(url : string){
      return this.http.get(this.baseUrl2 + url,{
        headers : {
         "X-API-KEY" : "14c34c99-91b6-41a8-ad96-f4d3dc43e35b",
      }})
    }

   postUser(obj : any){
    return this.http.post("https://restaurantapi.stepacademy.ge/api/auth/login", obj, {
          headers : {
         "X-API-KEY" : "14c34c99-91b6-41a8-ad96-f4d3dc43e35b"}

    })
   }


    postObj(url : string, obj : any){
     return this.http.post(this.baseUrl + url, obj)   

    }
    updateObj(url : string, obj : any){
     return this.http.put(this.baseUrl + url, obj) 

    }

    deelteById(url : string){
      return  this.http.delete(this.baseUrl + url)
    }

}
