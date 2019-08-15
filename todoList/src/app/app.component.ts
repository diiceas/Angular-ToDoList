import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todoList";
  private isLogin = false;
  private isRegister = false;

  callRegister() {
    if (this.isRegister === true) {
      this.isLogin = false;
      this.isRegister = false;
    } else {
      this.isLogin = false;
      this.isRegister = true;
    }
  }
  callLogin() {
    if (this.isLogin === true) {
      this.isLogin = false;
      this.isRegister = false;
    } else {
      this.isLogin = true;
      this.isRegister = false;
    }
  }
}
