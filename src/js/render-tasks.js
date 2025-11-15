import { refs } from './refs.js';

export function renderTasks(tasks) {
  const markup = tasks
    .map(({ name, description, id }) => `
      <li class="task-list-item" data-id="${id}">
        <button class="task-list-item-btn" data-id="${id}">Delete</button>
        <h3>${name}</h3>
        <p>${description}</p>
      </li>
    `)
    .join('');

  refs.taskList.innerHTML = markup;
}
