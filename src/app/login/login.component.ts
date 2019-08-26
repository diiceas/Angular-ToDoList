import { UserService } from './../user/user.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() sendCredentials: EventEmitter<any> = new EventEmitter();

  private login: string;
  private password: string;
  // A declare boolean with a shortucut
  // ref: Type boolean trivially inferred from a boolean literal, remove type annotation (no-inferrable-types)
  private isLoginFormValid = false;
  private isCredentialsValid = true;
  // B.1 do not use Underscores to name variables
  // B.2 no need to declare private variables for services
  // private _userService: UserService;
  private userID: string;

  // B.3 Typescript taking care of creating a local variables
  // B.4 Use 'private' accessor injected services
  constructor(private userService: UserService) {}

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
    // B.4 Using typescript generated local variable
    this.userService.getUserID(this.login, this.password).subscribe(data => {
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
