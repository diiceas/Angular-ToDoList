import { UserService } from "./../user/user.service";
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  @Output() sendCredentials: EventEmitter<any> = new EventEmitter();

  private login: string;
  private password: string;
  private isLoginFormValid: boolean = false;
  private isCredentialsValid: boolean = true;
  private _userService: UserService;
  private userID: string;

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

  validateForm() {
    this.isLoginFormValid = !!(this.login && this.password);
  }

  onSubmit() {
    this._userService.getUserID(this.login, this.password).subscribe(data => {
      data.forEach(id => {
        this.userID = id.id;
      });
      if (this.userID) {
        this.sendCredentials.emit(this.userID);
      } else {
        this.isCredentialsValid = false;
      }
    });
  }
}
