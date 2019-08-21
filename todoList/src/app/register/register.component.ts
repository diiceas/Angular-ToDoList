import { UserService } from "./../user/user.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

import generateID from "src/utils/id-generator"; //own function

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  @Output() sendCredentials = new EventEmitter();

  private login: string;
  private password: string;
  private repeatPasword: string;
  private isPasswordsSame: boolean = true;
  private isFormValid: boolean = false;
  private _userService: UserService;
  private userID: string;
  private isLoginExist: boolean = true;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  onLoginChange(login: string) {
    this.login = login;
    this.validateForm();
  }

  onPasswordChange(password: string) {
    this.password = password;
    this.validateForm();
  }

  onRepeatPasswordChange(repeatPassword: string) {
    this.repeatPasword = repeatPassword;
    this.isPasswordsSame = this.password === this.repeatPasword;
    this.validateForm();
  }

  checkIsLoginExist(login: string) {
    this._userService.isLoginExist(login).then(user => {
      user.forEach(doc => {
        this.isLoginExist = !doc.data().login;
      });
    });
  }

  validateForm() {
    this.isFormValid = !!(this.login && this.isPasswordsSame && this.password && this.repeatPasword);
  }

  createUser(password: string, login: string) {
    this.userID = generateID();
    this._userService.regUser(this.userID, password, login);
  }

  onSubmit() {
    this.createUser(this.password, this.login);
    this.sendCredentials.emit(this.userID);
  }
}
