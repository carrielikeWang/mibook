<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition  name="fade">
      <router-view></router-view>
    </transition >
    

    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
