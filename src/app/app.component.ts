import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public userID: string;
  private isLogin: boolean = false;
  private isRegister: boolean = false;
  private isLoad: boolean = false;
  private loginDisabled: boolean = false;
  private imageDisabled: boolean = false;

  constructor() {}

  callRegister() {
    this.imageDisabled = true;
    if (this.isRegister === true) {
      this.isLogin = false;
      this.isRegister = false;
    } else {
      this.isLogin = false;
      this.isRegister = true;
    }
  }
  callLogin() {
    this.imageDisabled = true;
    if (this.isLogin === true) {
      this.isLogin = false;
      this.isRegister = false;
    } else {
      this.isLogin = true;
      this.isRegister = false;
    }
  }

  getlogin(userID: string) {
    if (userID) {
      this.loginDisabled = true;
      this.userID = userID;
      this.isLogin = false;
      this.isRegister = false;
      this.isLoad = true;
    }
  }

  reload() {
    this.imageDisabled = false;
    this.loginDisabled = false;
    this.isLogin = false;
    this.isRegister = false;
    this.isLoad = false;
  }
}
