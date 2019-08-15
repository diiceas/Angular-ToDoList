import { BrowserModule } from "@angular/platform-browser";
import { NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./register/register.component";
import { TaskService } from "./shared/task.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskComponent, LoginComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
