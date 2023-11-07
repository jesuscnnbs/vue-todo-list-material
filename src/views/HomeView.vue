<template>
  <NavBar />
  <v-container>
    <v-row>
      <v-col>
        <AddTodo class="mb-9"/>
        <TodoList/>
      </v-col>
    </v-row>
    <v-row>
      <EditTodo />
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import EditTodo from '../components/EditTodo.vue'
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/TodoList.vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TodoList,
    NavBar,
    AddTodo,
    EditTodo
  }
})
</script>
