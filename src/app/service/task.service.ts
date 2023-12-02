import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import tasks from '../../assets/tasks.json';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasks(): Task[] {
    return this.sortByPriority(tasks);
  }

  private sortByPriority(tasks: Task[]): Task[] {
    return tasks.sort((a: Task, b: Task) => {
      return a.priority - b.priority;
    });
  }
}
