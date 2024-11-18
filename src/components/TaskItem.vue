<template>
  <div class="task-card" :class="stateClass" @click="changePending">
    <span class="close" @click="$emit('taskDeleted', task)">x</span>
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
  methods: {
    changePending() {
      this.task.pending = !this.task.pending;
    },
  },
};
</script>

<style scoped>
.task-card {
  position: relative;
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
  background-color: #e21e1e;
}
.done {
  color: #ddd;
  border-left: 12px solid rgb(1, 119, 1);
  background-color: #1fd61f;
  text-decoration: line-through;
}

.pending .close {
  background-color: #941515;
}

.done .close {
  background-color: #158f15;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>
