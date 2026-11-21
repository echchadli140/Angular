import { Component, signal, computed } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe, TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  tasks = signal<any[]>([
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', dueDate: '2026-11-18' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-20' },
  ]);

  count = computed(() => this.tasks().length);

  add() {
    const id = this.tasks().length + 1;
    this.tasks.update(items => [
      ...items,
      { id, title: 'Cours ' + id, dueDate: '2026-12-01' }
    ]);
  }

  clear() {
    this.tasks.set([]);
  }

  onCompleted(id: number) {
    this.tasks.update(items =>
      items.map(t => t.id === id ? { ...t, completed: true } : t)
    );
  }


}