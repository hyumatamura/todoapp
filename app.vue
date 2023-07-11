<template>
  <div class="todo-app">
    <h1 class="todo-app__title">Hyuma's todoapp</h1>
    <div class="todo-app__add-task">
      <h2>タスク追加</h2>
      <div class="add-task__input">
        <input class="input-field" v-model="taskName" placeholder="タスク名を入力してください" />
        <button class="add-task__button" @click="addTask()">追加</button>
      </div>
    </div>
    <div class="todo-app__task-list">
      <h2>タスク名</h2>
      <div v-for="taskName in $store.tasks" :key="taskName" class="task-list__item">
        <span>{{ taskName }}</span>
        <button class="task-list__button" @click="completeTask(taskName)">完了</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '~/store/todo';

const taskName = ref('');
const $store = useTodoStore();

const addTask = () => {
  if (taskName.value === '') {
    return;
  }
  $store.addTask(taskName.value);
  taskName.value = '';
};

const completeTask = (completedTaskName: string) => {
  $store.deleteTask(completedTaskName);
}
</script>

<style scoped>

.todo-app__title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.todo-app__add-task {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 20px;
}
.add-task__input {
  display: flex;
  gap: 10px;
}

.input-field {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-task__button {
  padding: 8px 16px;
  border: none;
  background-color: #8b0000;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.todo-app__task-list .task-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-list__button {
  padding: 4px 8px;
  border: none;
  background-color: #8b0000;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>

