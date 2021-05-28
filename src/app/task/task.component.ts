import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskI;
  @Output() isDelete_ee: EventEmitter<TaskI> = new EventEmitter();
  checked: boolean;
  date: Date;
  description: string;
  id: string;
  title: string;

  constructor() {
    this.task = {
      checked: false,
      date: new Date(),
      description: 'default',
      id: 'default',
      title: 'default',
    };
    this.checked = this.task.checked;
    this.date = this.task.date;
    this.description = this.task.description;
    this.id = this.task.id;
    this.title = this.task.title;
  }

  ngOnInit(): void {}

  onDoubleClick(): void {
    this.checked = !this.checked;
    console.log('checked: ', this.checked);
  }

  onDelete(): void {
    this.isDelete_ee.emit(this.task);
  }
}

export interface TaskI {
  checked: boolean;
  date: Date;
  description: string;
  id: string;
  title: string;
}
