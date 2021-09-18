<template>
  <div class="home">
    <Hero/>
    <Statistics />
    <Boost/>   
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '../components/Hero.vue'
import Statistics from "../components/Statistics.vue";
import Boost from '../components/Boost.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Statistics,
    Boost
  }
}
</script>
