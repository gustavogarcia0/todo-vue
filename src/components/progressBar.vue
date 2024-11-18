<template>
    <div class="task-progress">
        <span class="progress-value">{{  progress }}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
.task-progress {
  position: relative;
  width: 560px;
  border: 1px solid #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.progress-bar {
  position: absolute;
  align-self: flex-start;
  background-color: green;
  border-radius: 8px;
  height: 100%;
}
.progress-value {
  z-index: 1;
  font-size: 1.5rem;
}
</style>
