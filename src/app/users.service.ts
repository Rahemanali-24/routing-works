import { Injectable } from '@angular/core';


interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any,
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
    const data: dataType ={
      name: 'amil',
      id:100,
      indian:true,
      address:'404 web page not found',
    }
    return data;
  }

}
