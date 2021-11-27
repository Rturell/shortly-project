<template>
    <section class="contenedor-buscador">
      <div class="container">
 <div class="container-link">
           <div class="fondo-link">
           </div>
        <div class="row" id="row-especial">
          <div class="col-xl-6 col-lg-6">
            <input v-model="search" type="text" placeholder="Shorten a link here">
          </div>
          <div class="col-xl-6 col-lg-6" id="button">
            <button @click="getLinks">Shorten it!</button>
          </div>
        <div v-if="loading" class="spinner-border text-success" role="status">
  <span class="sr-only"></span>
</div>
        </div>
      </div>
        <div class="links" v-for="linkl in linkss" :key="linkl.id">
            {{linkl.ol}}
           <span id="link" >{{linkl.sl}}</span>
            <button :class="linkl.copy ? 'copied' : 'copy'" @click="linkl.copy = true"  >{{linkl.copy ? 'Copied!' : 'Copy'}}</button>      
        </div>
      </div>
        
          </section>

</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
        link: null,
      linkss:[],
      text: "Copy",
      clicked: false,
      loading: false,    
        }
    },
  methods:{
   async getLinks(){
    this.loading = true
    try {
      let datos = this.search
      let links = await axios.get(`https://api.shrtco.de/v2/shorten?url=${datos}`)
      console.log(links)
      this.link = links.data
      this.linkss.push({ol: links.data.result.original_link, sl: links.data.result.short_link,copy: false})
      window.localStorage.setItem('linkss', JSON.stringify(this.linkss))
    }catch(error){
    console.log(error)
  }finally{
    this.loading = false
  }
  },
  },
    mounted(){
    this.linkss = JSON.parse(window.localStorage.getItem('linkss'));
  }
}
</script>

<style scoped>
.container-link{
  padding: 2rem;
  background: #3a3053;
  margin: auto;
  border-radius: 0.3rem;
  background-image: url('../assets/shortly.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: -4rem;
  height: 6.5rem;
}
.contenedor-buscador{
    background-color: #f0f1f6;
}
.spinner-border{
    position: relative;
    top: 2rem;
    margin: auto;
    z-index: 9;
}
.links{
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #ffff;
  margin-top: 1rem;
  position: relative;
  top: -4rem;
  align-items: center;
  border-radius: 0.3rem;
}
#link{
  color: hsl(180, 66%, 49%);
}
.copy{
    height: 2.4rem;
    width: 7rem;
    background:  hsl(180, 66%, 49%);
    border: none;
    color: #ffff;
    outline: none;
    border-radius: 0.54rem;
}
.copied{
  height: 2.4rem;
  width: 7rem;
  background: #3a3053;
  border: none;
  color: #ffff;
  outline: none;
  border-radius: 0.54rem;
}

@media screen and (min-width: 701px) and (max-width: 1023px){
  .container-link{
    position: relative;
    height:8.5rem;
    width: 48%;
    text-align: center;
  }
  .container-link input{
    width: 92%;
  }
}
@media screen and (max-width: 700px) {

.container-link{
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
  height: 9rem;
  width: 80%;
}
.container-link input{
  width: 96%;
}
.fondo-link input{
  margin-top: 1rem;
}
}
</style>