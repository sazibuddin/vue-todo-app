<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.complete}">
        <p><input type="checkbox" @change="markComplete"> {{ todo.title }} </p>
    </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    markComplete () {
      console.log(123)
    }
  }
}
</script>

<style scoped>
  .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1-x dotted #cccccc;
    }
    .is-complete {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #ffffff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>
