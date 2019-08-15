import { TaskService } from "../shared/task.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

import generateID from "src/utils/id-generator";

@Component({
  selector: "app-task",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class TaskComponent implements OnInit {
  private login: string;
  private password: string;
  private repeatPasword: string;
  private isPasswordsSame: boolean = true;
  private isFormValid: boolean = false;

  constructor(private service: TaskService, private firestore: AngularFirestore) {}

  ngOnInit() {}

  onLoginChange(login) {
    this.login = login;
    this.validateForm();
  }

  onPasswordChange(password) {
    this.password = password;
    this.validateForm();
  }

  onRepeatPasswordChange(repeatPassword) {
    this.repeatPasword = repeatPassword;
    this.isPasswordsSame = this.password === this.repeatPasword;
    this.validateForm();
  }

  validateForm() {
    this.isFormValid = !!(this.login && this.isPasswordsSame && this.password && this.repeatPasword);
  }

  submitRegisterForm(form: NgForm) {
    const userID = generateID();
    this.firestore.collection("user").add({
      userID,
      login: "user2",
      password: "user2"
    });
  }

  getUserData(password: string, login: string) {}

  createUser(password: string, login: string) {
    const userID = generateID();
    this.firestore.collection("users").add({
      userID,
      password,
      login
    });
  }

  onSubmit() {
    this.createUser(this.password, this.login);
  }
}
