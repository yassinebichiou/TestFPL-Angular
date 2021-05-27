import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  constructor(public service : ServiceService) { }
subjects : any
  ngOnInit(): void {
    this.service.getAllSubjects().subscribe((res: any) => { this.subjects = res },
    (erreur: any) => { },
    () => {
      console.log(this.subjects);
    });


  }
responseForm:any
selected:any
radioChangeHandler(event){
  this.selected=event.target.value
  console.log(this.selected);
  
}


sendResponse(i){



 console.log(this.subjects[i]);
 if (this.selected =="yes") {
   this.subjects[i].responses.yes=this.subjects[i].responses.yes+1
 }

 else if(this.selected=="no"){
  this.subjects[i].responses.no=this.subjects[i].responses.no+1
 }
  
 this.service.updateSubject(this.subjects[i]._id,this.subjects[i]).subscribe(res=>{
   console.log(res);
   
 })

}






}
