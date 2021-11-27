<template>
  <div class="home">
    <Hero/>
    <Shorturl/>
    <Statistics />
    <Boost/>   
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '../components/Hero.vue'
import Statistics from "../components/Statistics.vue";
import Boost from '../components/Boost.vue'
import Shorturl from '../components/Shorturl.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Statistics,
    Boost,
    Shorturl
  }
}
</script>
