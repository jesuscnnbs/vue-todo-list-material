<template>
  <v-form @submit.prevent="handleAddTodo">
    <v-text-field v-model="task" :rules="rules" label="Task"></v-text-field>
    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
</template>

<script>
import { useTodoStore } from '../stores/todoes.js'
export default {
  setup() {
    const todoStore = useTodoStore()
    return { todoStore }
  },
  data: () => ({
    task: '',
    rules: [
      (value) => {
        if (value) return true
        return 'You must enter a task.'
      }
    ]
  }),
  methods: {
    handleAddTodo() {
      if (this.task) {
        this.todoStore.addTodo(this.task)
        this.task = ''
      }
    }
  }
}
</script>

<style></style>
