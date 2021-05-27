import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL = environment.baseURL


  constructor(public http:HttpClient) { }



  addSubject(data)
  {
    return this.http.post( this.baseURL + '/subject/addSubject',data)
  }



  getAllSubjects(){
    return this.http.get(this.baseURL + '/subject/getAllSubjects')
  }

  updateSubject(id,updatedSubject){
      return this.http.put(this.baseURL + '/subject/updateSubject/'+ id,updatedSubject)
  }
}