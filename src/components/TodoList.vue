<template>
  <v-list>
    <TodoItem
      v-for="(todo) in todoes"
      :key="todo.id"
      :id="todo.id"
      :task="todo.task"
      :completed="todo.completed"
    />
  </v-list>
</template>

<script>
import { defineComponent } from 'vue';
import TodoItem from '../components/TodoItem.vue'
import { mapState } from 'pinia'
import { useTodoStore } from '../stores/todoes.js'
export default defineComponent({
  setup() {
    const todoStore = useTodoStore()
    todoStore.getTodoes()
    return { todoStore }
  },
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(useTodoStore, ['todoes'])
  }
})
</script>

<style>

</style>