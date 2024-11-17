<template>
  <div class="task-card" :class="stateClass">
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style scoped>
.task-card {
  padding: 10px;
  border-radius: 8px;
  font-weight: 300;
  width: 300px;
  height: 150px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid rgb(122, 0, 0);
  background-color: rgb(226, 30, 30);
}
.done {
  color: #ddd;
  border-left: 12px solid rgb(1, 119, 1);
  background-color: rgb(30, 214, 30);
  text-decoration: line-through;
}
</style>
