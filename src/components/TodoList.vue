<template>
  <TodoItem class="mb-2" v-for="n in 3" :key="n" />
</template>

<script>
import { defineComponent } from 'vue';
import TodoItem from '../components/TodoItem.vue'
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },

})
</script>

<style>

</style>