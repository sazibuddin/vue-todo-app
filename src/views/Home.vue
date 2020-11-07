<template>
  <div class="home">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos'

export default {
  name: 'Home',
  components: {
    Header,
    AddTodo,
    Todos
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          title: 'todo one',
          complete: false
        },
        {
          id: 2,
          title: 'todo two',
          complete: true
        },
        {
          id: 3,
          title: 'todo three',
          complete: true
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos , newTodo];
    }
  }
}
</script>

<style scoped>

</style>
