import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import generateID from "src/utils/id-generator";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  private isLoginFormValid: boolean = false;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {}

  validateForm() {
    this.isLoginFormValid = !!(this.login && this.password);
  }

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

  onLoginChange(login) {
    this.login = login;
    this.validateForm();
  }

  onPasswordChange(password) {
    this.password = password;
    this.validateForm();
  }
}
