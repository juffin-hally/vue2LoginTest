<template>
  <div class="login">
    <div class="username">
      <label for="username">Username</label><br />
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
    </div>
    <div class="username">
      <label for="password">Password</label><br />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
    </div>
    <button type="submit" v-on:click="login()">Login</button>
    <p v-show="error != ''"> {{ error }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      error: ''
    }
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.username == this.$parent.account.username && this.input.password == this.$parent.account.password) {
          this.$emit("authenticated", true);
          localStorage.setItem("loggedin", 'true');
          this.$router.replace({ name: "detail" });
        } else {
          this.error = "The username and / or password is incorrect";
          //console.log("The username and / or password is incorrect");
        }
      } else {
        this.error = "A username and password must be present";
        //console.log("A username and password must be present");
      }
    }
  }
}
</script>