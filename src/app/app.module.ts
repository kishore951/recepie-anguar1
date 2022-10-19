import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddRecepieComponent } from './add-recepie/add-recepie.component';
import { FormsModule } from '@angular/forms';
import { ViewRecepieComponent } from './view-recepie/view-recepie.component';

const appRoutes:Routes=[
{
  path:"",component:AddRecepieComponent
},{
  path:"view",component:ViewRecepieComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRecepieComponent,
    ViewRecepieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
