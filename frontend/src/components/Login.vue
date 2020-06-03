<template>
  <div>
    <div class="min-h-screen flex flex-col bg-gray-100">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 -mt-16">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Login</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        v-model="username"
                        placeholder="Username" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        v-model="password"
                        placeholder="Password" />

                        <div class="error" v-html="error">

                        </div>
                    <button
                        @click="login"
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
                    >Login</button>

                </div>

                <div class="text-grey-dark mt-6">
                    Does not have an account? 
                     <router-link to="/registration"><a class="no-underline border-b border-blue text-blue">
                        sign up
                    </a></router-link>.


                </div>
            </div>
        </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
         const response = await AuthService.login({
          username: this.username,
          password: this.password,
        })
        console.log(response)
        if (this.error) {
          this.error = null
        }
      } catch (error) {
          this.error = error.response.data.error
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