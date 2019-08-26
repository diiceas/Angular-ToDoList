import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AutofocusModule } from 'angular-autofocus-fix';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user/user.service';

const routes = [
  { path: '', component: AppComponent },
  { path: 'tasks/:userID', component: TasksComponent }
];

@NgModule({
  declarations: [AppComponent, TasksComponent, RegisterComponent, LoginComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AutofocusModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
