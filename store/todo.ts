import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [] as string[],
  }),
  actions: {
    addTask(task: string) {
      this.tasks.push(task);
    },
    deleteTask(taskName: string) {
      this.tasks = this.tasks.filter((task) => task !== taskName);
    },
  },
});

