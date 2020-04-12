<template>
  <div>
    <div class="min-h-screen flex flex-col bg-gray-100">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
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
                    <button
                        @click="register"
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    <input type="text">
    <input type="text">
    <button></button>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  data() {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    async register() {
      const response = await AuthService.register({
        username: this.username,
        password: this.password,
        email: this.email
      })
      console.log(response)
    }
  }
}
</script>

<style>
</style>