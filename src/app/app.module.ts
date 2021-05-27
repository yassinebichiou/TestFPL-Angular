import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    AddSubjectComponent,
    SubjectsListComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
