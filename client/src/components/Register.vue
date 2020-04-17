<template>
  <div>
    <h1>Register</h1>

    <input v-model="email" type="email" name="email" placeholder="email">
    <input v-model="password"  type="password" name="password" placeholder="password">
    <button @click="register">register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    emails: function () { return this.$store.getters.getEmails }
  },
  methods: {
    async register () {
      let payload = {
        email: this.email,
        password: this.password }
      try {
        await this.$store.dispatch('addUser', {payload})
        }
      catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
