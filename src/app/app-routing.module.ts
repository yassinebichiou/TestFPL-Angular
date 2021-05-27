import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';

const routes: Routes = [
  { path: "register" , component: RegisterComponent},
  { path: "signIn" , component: LogInComponent},
  { path:"addSubject",component: AddSubjectComponent},
  {path : "subjectslist", component: SubjectsListComponent},
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
export const RoutingComponent =[RegisterComponent,LogInComponent,AddSubjectComponent,SubjectsListComponent]
