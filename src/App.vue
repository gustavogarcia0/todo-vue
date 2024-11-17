<template>
	<div id="app">
    <PopUp v-if="showPop" :title="AlertContent" @close="hidePopUp"/>
		<h1>Tarefas</h1>
    <InputNewTask @taskAdded="addTask"/>
		<TaskGridVue :tasks="tasks"/>
	</div>
</template>

<script>
import InputNewTask from "./components/InputNewTask.vue";
import PopUp from "./components/PopUp.vue";
import TaskGridVue from "./components/TaskGrid.vue";

export default {
  components: { TaskGridVue, InputNewTask, PopUp },
  data() {
    return {
      showPop: false,
      AlertContent: "",
      tasks: [{ name: "Lavar roupa", pending: true }, { name: "Estudar", pending: false }],
    };
  },

  methods: {
    hidePopUp() {
      this.showPop = false;
    },

    timerPopUp() {
      setTimeout(() => {
        this.showPop = false;
      }, 1000);
    },

    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      } else {
        this.showPop = true;
        this.timerPopUp();
        this.AlertContent = "Tareja duplicada";
      }
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
  overflow: hidden;
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
