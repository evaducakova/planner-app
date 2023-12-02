import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import tasks from '../../assets/tasks.json';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasks(): Task[] {
    return tasks;
  }
}
