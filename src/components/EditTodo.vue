<template>
  <v-dialog @update:model-value="hideEditTask()" v-model="showDialog" width="500">
    <v-card title="Edit">
      <v-card-text>
        <v-text-field
          label="Task"
          hide-details="auto"
          v-model="editedTask"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="hideEditTask()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="handleUpdateTodo(selectedTodo.id)"
          >
            Save
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useTodoStore } from '../stores/todoes.js'

export default defineComponent({
  setup() {
    const todoStore = useTodoStore()
    todoStore.getTodoes()
    return { todoStore }
  },
  data() {
    return {
      editedTask: ""
    }
  },
  watch: {
    selectedTodo: {
      handler(newVal) {
        if(newVal) this.editedTask = newVal.task
      },
      deep: true
    }
  },
  computed: {
    ...mapState(useTodoStore, ['selectedTodo', 'showDialog']),
  },
  methods: {
    hideEditTask() {
      this.todoStore.unsetSelectedTodo()
    },
    handleUpdateTodo(id) {
      const newTask = {
        id,
        task: this.editedTask,
        completed: this.selectedTodo.completed
      }
      this.todoStore.updateTodo(id, newTask)
      return this.todoStore.unsetSelectedTodo()
    }
  }
})
</script>

<style>

</style>