<template>
    <div>
        <h1>Todos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam perspiciatis dolorum minus cum. Provident eos laborum, architecto in sequi doloribus tempore asperiores itaque totam voluptatem ea accusantium a! Quod.</p>
        <div v-for="todo in todos" :key="todo.id">
            <h3> lorem </h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Todos',
  props: ['todos']
}

</script>

<style scoped>

</style>
