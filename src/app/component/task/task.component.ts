import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task | undefined;

  @Output() taskCompleted: EventEmitter<number> = new EventEmitter();

  panelOpenState = false;

  public completeTask(checked: boolean): void {
    if (checked) {
      this.taskCompleted.emit(this.task?.id);
    }
  }
}
