<template>
  <div>
    <div class="min-h-screen flex flex-col bg-gray-100">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 -mt-16">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        v-model="username"
                        placeholder="Username" />

                    <input 
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        type="email"
                        v-model="email"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        v-model="password"
                        placeholder="Password" />

                        <div class="error" v-html="error">

                        </div>
                    <button
                        @click="register"
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
                    >Create Account</button>

                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <router-link to="/login"><a class="no-underline border-b border-blue text-blue">
                        Log in
                    </a></router-link>.
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  mounted() {
    if (this.$store.state.isUserLoggedIn) {
      this.$router.push({ name: "welcome" });
    }
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
         const resp = await AuthService.register({
          username: this.username,
          password: this.password,
          email: this.email
        })
        this.$store.dispatch('setToken', resp.data.token)
        this.$store.dispatch('setUser', resp.data.user)
        console.log(resp)
        if (this.error) {
          this.error = null
        }
        this.$router.push({ name: "login" });

      } catch (error) {
          this.error = error.resp.data.error
      }
     
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>