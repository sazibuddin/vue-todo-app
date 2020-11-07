<template>
    <div>
        <div :key="todo.id" v-for="todo in todos">
            <TodoItem  v-bind:todo_prop="todo" v-on:de-todo="$emit('del-todo' , todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  props: ['todos']
}
</script>
