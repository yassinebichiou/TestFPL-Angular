import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm:any=FormGroup
  constructor(private authService: AuthServiceService ,public router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('', Validators.required),
      loginPassword: new FormControl('', Validators.required)
  });
  }
  data:any
  dataFound : any
login(){
  if (this.loginForm){
    console.log("eeee");

  
    this.authService.login().subscribe((res)=>{
      console.log(res);


     this.data=res;
    },

    (err:any)=>{},
    ()=>{
      this.dataFound= this.data.find((element:any)=>element.email==this.loginForm.get("loginEmail").value&&element.password==this.loginForm.get("loginPassword").value)
      console.log(this.dataFound);
    })

   setTimeout (() => {
 
    if(this.dataFound){
      console.log("aaaa");

         alert("Welcome ! you have the access!")
    this.authService.generateToken(this.dataFound).subscribe((res)=>{
      console.log(res);

      localStorage.setItem('token',JSON.stringify(res));
    })

    this.router.navigateByUrl("addSubject")

    }
    else {
      console.log("gggg");

       alert("Verify e-mail adress or password please !")
    }
 }, 2000);
  }
  else{
    alert("Verify e-mail adress or password please !")
  }
}



}




