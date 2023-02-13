<script setup lang="ts">
import Login from '../components/Login.vue'
</script>

<template>
  <main>
    <Login />
  </main>
</template>


<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    return {
      authenticated: false,
      account: {
        username: "test",
        password: "password"
      }
    }
  },
  mounted() {
    if (this.authenticated) {
      this.$router.replace({ name: "detail" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
}
</script>