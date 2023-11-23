<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer>
      <v-row justify="center">
        <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Jesús García</strong>
      </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { VApp, VMain } from 'vuetify/components'
export default {
  name: 'App',
  components: {
    VApp,
    VMain
  },
  data: () => ({
    //
  }),
}
</script>
