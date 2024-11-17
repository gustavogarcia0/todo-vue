<template>
  <div class="pop-up" @click="closePop()">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    body: { type: String },
  },

  methods: {
    closePop() {
      this.$emit("close", false);
    },
  },
};
</script>
<style  scoped>
.pop-up {
  cursor: pointer;
  position: fixed;
  color: black;
  width: 430px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 15px;
  box-shadow: 11px 9px 24px -3px rgba(0, 0, 0, 0.75);
}
</style>
