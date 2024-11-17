<template>
  <div class="task-card">
    <p>x</p>
    <p>{{ tasks.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.task-card {
  padding: 15px 30px;
  border: 1px solid;
}
</style>
