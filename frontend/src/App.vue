<template>
  <div id="app">
    <div id="bg-gray-100" class="h-16">
      <div>
        <div class="flex justify-end text-right px-12 py-4 m-2 text-base">
          <div v-if="!  $store.state.isUserLoggedIn" class="flex">
            <div class="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-200">
              <button class="focus:outline-none" @click="navigateTo({name: 'login'})">Login</button>
            </div>
            <div class="px-3 py-1 rounded-md text-gray-700  hover:bg-gray-200">
              <button class="focus:outline-none" @click="navigateTo({name: 'register'})">Registration</button>
            </div>
          </div>
          <div v-if="$store.state.isUserLoggedIn" class="flex">

            <div class="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-200">
              <button class="focus:outline-none" @click="navigateTo({name: 'welcome'})">Home</button>
            </div>
            <div class="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-200">
              <button class="focus:outline-none" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods:  {
    navigateTo(route) {
      this.$router.push(route)
    },
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>

</style>
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
