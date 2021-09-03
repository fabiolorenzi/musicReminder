import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AddSongFormComponent } from './components/add-song-form/add-song-form.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddSongFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
