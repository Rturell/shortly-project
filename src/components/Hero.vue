<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="texto-hero">
              <h2>{{ msg }}</h2>
              <span>{{ sub }}</span>
              <button class="button">{{ msgb }}</button>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="imagen-hero">
              <img src="../assets/working.svg" alt="working.svg" />
            </div>
          </div>
        </div>
         <div class="container-link">
           <div class="fondo-link">
           </div>
        <div class="row" id="row-especial">
          <div class="col-xl-6 col-lg-6">
            <input type="text" placeholder="Shorten a link here">
          </div>
          <div class="col-xl-6 col-lg-6" id="button">
            <button>Shorten it!</button>
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
      msg: "More than just shorter links",
      sub: "Build your brand recognition and get detalled insights on how your links are performing ",
      msgb: "Get Started",
    };
  },
};
</script>

<style>
.hero {
  margin-top: 6rem;
  height: 35rem;
}
.button {
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
.texto-hero {
  margin-top: 3rem;
}
.texto-hero h2 {
  font-size: 4rem;
  font-weight: 800;
}
.texto-hero span {
  color: hsl(0, 0%, 75%);
}
.imagen-hero {
  text-align: right;
  width: 41rem;
}
.container-link{
  padding: 2rem;
    width: 64%;
    background: #3a3053;
    margin: auto;
    margin-top: 2rem;
    border-radius: 0.3rem;
      background-image: url('../assets/shortly.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#button{
    display: flex;
    justify-content: flex-end;
}
#button button{
  width: 44%;
  outline: none;
  border: none;
  background: hsl(180, 66%, 49%);
  color: white;
  border-radius: 0.54rem;
}
.container-link input{
  width: 146%;
    padding: 0.5rem;
        border-radius: 0.4rem;
    border: none;
    outline: none;
}
::-webkit-input-placeholder { color: hsl(0, 0%, 75%);; }
::-moz-placeholder { color: hsl(0, 0%, 75%);; }
/* .fondo-link{

  height: 5rem;
  position: relative;
} */
/* Media Queries */
@media screen and (min-width: 1024px) and (max-width: 1100px) {
  .imagen-hero img {
    width: 29rem;
  }
  .imagen-hero {
    text-align: left;
    width: 30rem;
  }
  .container-link{
    position: relative;
  }
}
@media screen and (min-width: 701px) and (max-width: 1023px) {
  .imagen-hero img {
    width: 19rem;
  }
  .imagen-hero {
    text-align: left;
  }
  .texto-hero{
    margin-top: 0rem;
  }
  .hero{
    margin-top: 4rem;
    height: 42rem;
  }
  .container-link{
    position: relative;
    height:8.5rem;
    width: 48%;
    text-align: center;
  }

  #button{
        margin-top: 0.5rem;
    width: 92%;
    padding: 0rem;
  }
  .container-link input{
    width: 92%;
  }

  #button button{
    width: 91%;
  }
}
@media screen and (max-width: 700px) {
  .texto-hero h2 {
    font-size: 3rem;
  }
  .imagen-hero {
    margin: auto;
    width: 18rem;
  }
  .imagen-hero img {
    width: 18rem;
  }
  .texto-hero {
    margin-top: 0;
  }
    .hero {
    height: 45rem;
  }
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
#button button{
  width: 77%;
  margin-top: 1rem;
  width: 95%;
}
#button{
  justify-content: center;
}
}
</style>