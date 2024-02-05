import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-works';
  users:any;
  // memberData = [
  //   {name:'abc',email:"a@gmail.com"},
  //   {name:'xyz',email:"xyz@gmail.com"},
  //   {name:'zxy',email:"zxy@gmail.com"},
  //   {name:'cba',email:"cba@gmail.com"},

  // ]

  // constructor(private userdata: UserdataService){
  //    console.warn(userdata.users());
  //    this.users = userdata.users();
  // }

  
  constructor(private userdataService: UserdataService){
       
    }

    ngOnInit(): void {
      // Making a GET request
      this.userdataService.getData().subscribe(response => {
        console.log(response);
        // Handle the response data here
      });
  
      // Making a POST request
      const postData = { title: 'don', body: 'don321', userId: 1 };
      this.userdataService.postData(postData).subscribe(response => {
        console.log(response);
        // Handle the response data here
      });
    }
}
