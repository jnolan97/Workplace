import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FunfactsComponent } from './funfacts/funfacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
//import { AddPlayerComponent } from './add-player/add-player.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TasksComponent } from './tasks/tasks.component';
//import { ShowPlayerComponent } from './show-player/show-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
