import { Task } from "./task.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  formData: Task;

  constructor() {}
}
