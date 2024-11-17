<template>
  <div>
    <input v-model="name" @keydown.enter="emitTaskToApp"  type="text" name="inputText">
    <button @click="emitTaskToApp">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    emitTaskToApp() {
      this.$emit("taskAdded", { name: this.name });
      this.name = "";
    },
  },
};
</script>

<style>
</style>
