import { AngularFirestore } from "@angular/fire/firestore";

export class UserService {
  constructor(private firestore: AngularFirestore) {}

  public getUserID(login, password) {
    return this.firestore
      .collection("users", ref => ref.where("login", "==", login).where("password", "==", password))
      .get();
  }

  public regUser(userID: string, password: string, login: string) {
    this.firestore
      .collection("users")
      .doc(userID)
      .set({
        password,
        login
      });
    this.firestore
      .collection("userData")
      .doc(userID)
      .set({});
  }

  public getUserData(userID: string) {
    return this.firestore
      .collection("userData")
      .doc(userID)
      .get();
  }

  public getLogin(userID: string) {
    return this.firestore
      .collection("users")
      .doc(userID)
      .get();
  }

  public isLoginExist(login: string) {
    return this.firestore
      .collection("users", ref => ref.where("login", "==", login))
      .get()
      .toPromise();
  }

  public pushData(userID: string, pushMassive) {
    this.firestore
      .collection("userData")
      .doc(userID)
      .set(pushMassive);
  }

  public checkOrUncheck(userID: string, data) {
    this.pushData(userID, data);
  }
}
