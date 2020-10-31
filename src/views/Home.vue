<template>
  <div class="home">
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import Todos from '../components/Todos'

export default {
  name: 'Home',
  components: {
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
  }
}
</script>
