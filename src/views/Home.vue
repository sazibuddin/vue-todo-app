<template>
  <div class="home">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import axiosInstance from "../axiosInstance";

export default {
  name: "Home",
  components: {
    Header,
    AddTodo,
    Todos,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(newTodo) {
      const { title, complete } = newTodo;
      axiosInstance
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          complete,
        })
        .then((res) => (this.todos = [...this.todos, newTodo]))
        .catch((err) => console.log(err));
    },
  },
  created() {
    axiosInstance
      .get("/brands")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
</style>
