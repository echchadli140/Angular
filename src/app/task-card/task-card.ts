import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss'
})
export class TaskCard {
  task = input.required<any>();   // donnée reçue du parent
  completed = output<number>();   // événement envoyé au parent

  markDone() {
    this.completed.emit(this.task().id);
  }
}