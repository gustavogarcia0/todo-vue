<template>
  <div class="task-grid">
    <template>
        <div v-for="task in tasks" :key="task.name">
            <TaskItem :tasks="task"/>
        </div>
    </template>
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
}
</style>
