<template>
  <div>
      <section class="hero">
 <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-6">
                  <div class="texto-hero">
                      <h2>{{msg}}</h2>
                      <span>{{sub}}</span>
                      <button class="button">{{msgb}}</button>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                  <div class="imagen-hero">
                      <img src="../assets/working.svg" alt="working.svg">
                  </div>
              </div>
          </div>
      </div>
      </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'More than just shorter links',
            sub:'Build your brand recognition and get detalled insights on how your links are performing ',
            msgb:'Get Started'
        }
    },

}
</script>

<style>
.hero{
    margin-top: 6rem;
    height: 35rem;
}
.button{
    display: block;
    margin-top: 1rem;
    border: none;
    outline: none;
    padding: 1rem;
    width: 10rem;
    border-radius: 1.3rem;
    background: hsl(180, 66%, 49%);
    color: white;
}
.texto-hero{
    margin-top: 3rem;
}
.texto-hero h2{
    font-size: 4rem;
    font-weight: 800;
}
.texto-hero span{
    color: hsl(0, 0%, 75%)
}
.imagen-hero{
    text-align: right;
    width: 41rem;
}
/* Media Queries */
@media screen and (min-width:1024px) and (max-width:1100px){
    .imagen-hero img{
        width: 29rem;
    }
    .imagen-hero{
        text-align: left;
        width: 30rem;
    }
}
@media screen and (min-width:701px) and (max-width:1023px){
    .imagen-hero img{
        width: 19rem;
    }
    .imagen-hero{
        text-align: left;
    }
}
@media screen and (max-width:700px){
    .texto-hero h2{
        font-size: 3rem;
    }
    .imagen-hero{
        margin: auto;
        width: 18rem;
    }
    .imagen-hero img{
        width: 18rem;
    }
    .texto-hero{
        margin-top: 0;
    }
    .hero{
        margin-top: 2rem;
    }

}
</style>