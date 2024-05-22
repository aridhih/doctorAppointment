import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username : string = "";
  password : string = "";
  error : any = {
    username : "",
    password : "",
    isError : false
  }

  public constructor(){

  }
  public getData(){
    console.log(this.username + " " + this.password)
  }


  validateInput(){


  }
}
