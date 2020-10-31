<template>
  <div id="nav">
  </div>
  <router-view/>
     <div v-for="todo in todos" :key="todo.id">
            <h3> {{ todo.id }} </h3>
        </div>
</template>

<style>

</style>
