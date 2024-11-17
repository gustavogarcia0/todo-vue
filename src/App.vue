<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskGridVue :tasks="tasks"/>
	</div>
</template>

<script>
import TaskGridVue from "./components/TaskGrid.vue";

export default {
  components: { TaskGridVue },
  data() {
    return {
      tasks: [{ name: "Lavar roupa", panding: true }, { name: "Estudar", panding: false }],
    };
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
