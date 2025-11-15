const STORAGE_KEY = 'tasks';

export function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
}

export function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function deleteTask(taskId) {
  const tasks = getTasks().filter(t => t.id !== taskId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function initTasks() {
  if (localStorage.getItem(STORAGE_KEY) == null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}

export default { getTasks, saveTask, deleteTask, initTasks };

