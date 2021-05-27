import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(public service : ServiceService , public  router:Router) { }
  subjectForm:any
  ngOnInit(): void {

    this.subjectForm = new FormGroup({
      title : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
    });
  }

  addSubject(){

    this.service.addSubject(this.subjectForm.value).subscribe(res=>{
      console.log(res);
      
    },err=>{

    })

    this.router.navigateByUrl("subjectslist")
  }










}
