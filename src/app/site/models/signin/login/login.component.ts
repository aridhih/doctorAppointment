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
    console.log(this.username + "   " + this.password)
  }


  ValidateInput(event: any, type: string) {
    this.error[type] = event.target.value.length === 0 ? `${type} is required` : '';
    this.error.isError = event.target.value.length === 0;
  }
}
