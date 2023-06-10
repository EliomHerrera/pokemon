<script>
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js'

import axios from 'axios'

export default {
  components: {
  },
  data: () => ({
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<template>
  <div>
    <RouterLink active-class="text-primary" class="me-3" to="/home">home</RouterLink>
    <RouterView />
  </div>
</template>

<style></style>