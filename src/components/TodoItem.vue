<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todoData.complete }">
    <p><input type="checkbox" @change="markComplete" /> {{ todoData.title }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo_prop"],
  data() {
    return {
      todoData: this.todo_prop,
    };
  },
  methods: {
    markComplete() {
      this.todoData.complete = !this.todoData.complete
      console.log(123);
    },
  },
  computed() {
    this.markComplete();
  },
};
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
