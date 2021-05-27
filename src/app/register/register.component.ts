import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private authService: AuthServiceService ,public router:Router) { }

  registerForm:any=FormGroup
  
    ngOnInit(): void {
      this.registerForm = new FormGroup({
        name: new FormControl('',Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
  
  }
      register () {
      if (this.registerForm.valid ) {
        this.authService.register(this.registerForm.value).subscribe((res)=>{
          alert("You registered successfully!" );
          this.router.navigateByUrl("signIn")
        })
  
      }
      else {
        alert("Verify inputs!");
      }
    }
  

}
