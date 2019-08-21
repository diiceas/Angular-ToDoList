import { UserService } from "./../user/user.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  @Input() userID: string;

  private inputValue: string;
  private userLogin: string;

  private isDataAvalible: boolean = false;
  private isEdit: boolean = false;

  private currentUserDataTask: Array<any> = [];

  private _userService: UserService;

  constructor(private userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this._userService.getUserData(this.userID).subscribe(userData => {
      this.getUserLogin();
      this.currentUserDataTask = userData.data().data ? userData.data().data : [];
      this.isDataAvalible = true;
    });
  }

  addUserData() {
    if (this.inputValue) {
      const obj = { text: this.inputValue, isDone: false };
      this.currentUserDataTask.push(obj);
      this._userService.pushData(this.userID, { data: this.currentUserDataTask });
    }
  }

  checkItem(item, check: boolean) {
    item.isDone = !check;
    this._userService.checkOrUncheck(this.userID, { data: this.currentUserDataTask });
  }

  onDelete(key: number) {
    this.currentUserDataTask.splice(key, 1);
    this._userService.pushData(this.userID, { data: this.currentUserDataTask });
  }

  onUpdate(item) {
    item.isEdit = true;
  }
  doneUpdate(item) {
    item.isEdit = false;
    this._userService.checkOrUncheck(this.userID, { data: this.currentUserDataTask });
  }

  getUserLogin() {
    this._userService.getLogin(this.userID).subscribe(user => {
      this.userLogin = user.data().login;
    });
  }
}
