<template>
  <div id="app">
    <stop-one />
    <stop-two />
    <stop-three />
    <stop-four />
  </div>
</template>

<script>
import StopOne from './components/StopOne.vue'
import StopTwo from './components/StopTwo.vue'
import StopThree from './components/StopThree.vue'
import StopFour from './components/StopFour.vue'

export default {
  name: 'app',
  components: {
    StopOne,
    StopTwo,
    StopThree,
    StopFour
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
