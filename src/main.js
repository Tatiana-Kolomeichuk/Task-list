
import storage from './js/local-storage-api.js';
import { renderTasks } from './js/render-tasks.js';
import { refs } from './js/refs.js';
import { onFormSubmit, onTaskDelete } from './js/handlers.js';
import { initTheme, toggleTheme } from './js/theme-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  refs.themeToggle?.addEventListener('click', toggleTheme);


  if (!refs.form) {
    console.error('Form #task-form not found');
    return;
  }

  storage.initTasks();
  renderTasks(storage.getTasks());


  refs.form.addEventListener('submit', onFormSubmit);
  refs.taskList.addEventListener('click', onTaskDelete);
});


