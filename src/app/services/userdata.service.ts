import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

 

  // users(){
  //   return [
  //     {
  //       name:"anil",
  //       age:28,
  //       email:"anil@gmail.com",
  //     },
  //     {
  //       name:"annu",
  //       age:20,
  //       email:"annu@gmail.com",
  //     },
  //     {
  //       name:"anuj",
  //       age:24,
  //       email:"anuj@gmail.com",
  //     },
  //     {
  //       name:"ayushman",
  //       age:33,
  //       email:"ayshman@gmail.com",
  //     },
  //   ]
  // }
  //  url = "https://jsonplaceholder.typicode.com/userss";
   

  //   users() {
  //     return this.http.get(this.url).toPromise()
  //       .then(response => JSON.stringify(response)) // Stringify the JSON response
  //       .catch(error => {
  //         console.error('Error fetching user data:', error);
  //         throw error; // Rethrow the error
  //       });
  //   }

  constructor(private http:HttpClient) { 

  }

  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', data);
  }
}
