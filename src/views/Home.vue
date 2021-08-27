<template>
  <div class="home">
    <Hero/>
    <Statistics />   
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '../components/Hero.vue'
import Statistics from "../components/Statistics.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    Statistics
  }
}
</script>
