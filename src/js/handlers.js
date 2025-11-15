import { nanoid } from 'nanoid';
import * as storage from './local-storage-api.js';
import { renderTasks } from './render-tasks.js';

export function onFormSubmit(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;
  const name = taskName.value.trim();
  const description = taskDescription.value.trim();
  if (!name || !description) return alert('Не всі поля заповнені!');

  storage.saveTask({ id: nanoid(), name, description });
  renderTasks(storage.getTasks());
  e.target.reset();
}

export function onTaskDelete(e) {
  const btn = e.target.closest('button.task-list-item-btn');
  if (!btn) return;
  const id = btn.dataset.id;
  if (!id) return;

  storage.deleteTask(id);
  renderTasks(storage.getTasks());
}
