<template>
  <v-list-item :key="id" color="primary">
    <template v-slot:prepend>
      <v-checkbox
        :label="task"
        v-model="checked"
        hide-details="auto"
        >
      </v-checkbox>
    </template>
    <template v-slot:append>
      <v-btn density="compact" icon="mdi-pencil-box-outline" color="secondary" class="mr-2"></v-btn>
      <v-btn density="compact" icon="mdi-trash-can-outline" color="red"></v-btn>
    </template>
  </v-list-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useTodoStore } from '../stores/todoes.js'
export default defineComponent({
  setup() {
    const todoStore = useTodoStore()
    return { todoStore }
  },
  name: 'TodoItem',
  props: {
    id: Number,
    task: String,
    completed: Boolean
  },
  data() {
    return {
      todo: {
        completed: this.completed,
        task: this.task,
        id: this.id
      },
      checked: this.completed,
      tarea: this.task,
      loading: false,
    }
  },
  watch: {
    checked: {
      handler: async function(newValue) {
        const newTask = {
          task: this.task,
          completed: newValue
        }
        this.loading = true
        try {
          this.todoStore.updateTodo(this.id, newTask)
        } catch(error) {
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    }
  }
})
</script>

<style></style>
