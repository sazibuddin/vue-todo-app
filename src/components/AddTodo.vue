<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add todo..">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid'
export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                complete: false
            }

            // send up to parent
            this.$emit('add-todo', newTodo);
        }
    }
}
</script>
<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[typ='submit'] {
        flex: 2;
    }
     input.btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
}
      .btn:hover {
          background: #666;
      }
</style>
