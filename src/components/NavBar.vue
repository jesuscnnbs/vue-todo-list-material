<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Todo List</v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>

<style></style>
