<template>
  <article>
    <h3>My Todos</h3>
    <ul>
      <li class="todo" v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "Todos",
  props: {
    todos: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
