<template>
  <div>
    <p>This is a test</p>

    <section v-if="errored">
      <p>We're sorry, unable to retrieve information at this time.</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading....</div>

      <div v-else>{{info}}</div>
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
      .get('api.fremonttrains.com/crossings/1/status', { crossdomain: true })
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
</style>
