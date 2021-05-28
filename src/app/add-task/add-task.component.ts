import { TaskI } from './../task/task.component';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  title: string = '';
  date: Date = new Date();
  description: string = '';
  formData: FormGroup = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(new Date()),
    description: new FormControl(''),
  });

  @Output() formData_ee: EventEmitter<TaskI> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: TaskI): void {
    console.log('onSubmit data', data);
    data.id = Math.floor((Math.random() * 10000)).toString();
    this.formData_ee.emit(data);
  }
}
