<template>
	<div id="app">
    <PopUp v-if="showPop" :title="AlertContent" @close="hidePopUp"/>
		<h1>Tarefas</h1>
    <ProgressBar :progress="progress"></ProgressBar>
    <InputNewTask @taskAdded="addTask"/>
		<TaskGridVue :tasks="tasks" @taskDeleted="deleteTask"/>
	</div>
</template>

<script>
import InputNewTask from "./components/InputNewTask.vue";
import PopUp from "./components/PopUp.vue";
import ProgressBar from "./components/progressBar.vue";
import TaskGridVue from "./components/TaskGrid.vue";

export default {
  components: { TaskGridVue, InputNewTask, PopUp, ProgressBar },
  data() {
    return {
      showPop: false,
      AlertContent: "",
      tasks: [],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },

  watch: {
    tasks: {
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
      deep: true,
    },
  },

  created() {
    const storage = localStorage.getItem("tasks");
    const array = JSON.parse(storage);
    this.tasks = Array.isArray(array) ? array : [];
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

    deleteTask(i) {
      this.tasks.splice(i, 1);
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
