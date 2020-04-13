<template>
  <div id="app">
    <div id="bg-gray-100" class="h-16">
      <div>
        <div class="flex justify-end text-right px-4 py-4 m-2 text-base">
          <div class="flex">
            <div class="px-3 text-gray-700 rounded-sm hover:bg-gray-200">
              <router-link to="/login">Login</router-link>
            </div>
            <div class="px-3 rounded-sm text-gray-700  hover:bg-gray-200">
              <router-link to="/registration">Registration</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
