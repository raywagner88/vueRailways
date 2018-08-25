<template>
  <div>
    <p>Stop One</p>

    <section v-if="errored">
      <font-awesome-icon icon="exclamation-circle" class="fa-spin fa-3x" />
    </section>

    <section v-else>
      <div v-if="loading">
        <font-awesome-icon icon="spinner" class="fa-spin fa-3x" />
      </div>

      <div v-else-if="info">
        <font-awesome-icon icon="train" class="fa-3x" />
      </div>

      <div v-else>
        <font-awesome-icon icon="grin-beam-sweat" class="fa-3x" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StopOne',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://api.fremonttrains.com/crossings/1/status', { crossdomain: true })
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fa-exclamation-circle {
  color: red !important;
}
</style>
