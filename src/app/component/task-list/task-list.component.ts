import { Component } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.sortByPriority(this.taskService.getTasks());
  }

  public removeTaskFromList(id: number): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }

  private sortByPriority(tasks: Task[]): Task[] {
    return tasks.sort((a: Task, b: Task) => {
      return ((a.priority) - (b.priority));
    });
  }
}
