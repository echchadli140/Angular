import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  tasks: any[] = [
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', dueDate: '2026-11-18' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-20' },
  ];
}