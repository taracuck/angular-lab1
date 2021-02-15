import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [
    {
      task: 'Laundry',
      completed: true,
    },
    {
      task: 'Wash Dishes',
      completed: false,
    },
    {
      task: 'Make Bed',
      completed: true,
    },
    {
      task: 'Wash Car',
      completed: false,
    },
    {
      task: 'Get Groceries',
      completed: false,
    },
  ];

  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  completed = (item: Task) => {
    item.completed = true;
  };

  filterList = (term: string): Task[] => {
    return this.tasks.filter((item) => {
      let itemTerm = item.task.toLowerCase().trim();
      return itemTerm.includes(term.toLowerCase().trim());
    });
  };

  setSearchTerm = (form: NgForm) => {
    this.searchTerm = form.form.value.searchTerm;
  };

  addTask = (form: NgForm): void => {
    let newTask: Task = {
      task: form.form.value.todoAdd,
      completed: false,
    };
    this.tasks.push(newTask);
  };

  deleteTask = (index: number): void => {
    this.tasks.splice(index, 1);
  };
}
