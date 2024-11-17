<template>
  <div class="task-grid">
    <template v-if="tasks.length">
        <TaskItem v-for="task in tasks" :key="task.name" :task="task" class="task"/>
    </template>
    <p class="no-task" v-else>Sem tarefas</p>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style scoped>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 14px;
}

.no-task {
  color: #aaa;
  font-size: 2rem;
}
</style>
