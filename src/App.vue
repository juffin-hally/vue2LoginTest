<template>
  <div id="app" class="background">
    <header>
      <div class="wrapper">
        <nav class="navigation">
          <router-link v-show="isLoggedIn() === 'false' " to="/">Login</router-link>
          <router-link to="/detail">Detail</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem('loggedin');
    }
  }
}

</script>