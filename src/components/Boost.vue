<template>
<div class="boost">
<div class="container">
    <div class="boost-titulo">
        <h2>{{h2}}</h2>
    </div>
    <div class="boton">
        <button>{{button}}</button>
    </div>
</div>

</div>
</template>

<script>
export default {
data() {
    return {
        h2: 'Boost your links today',
        button: 'Get Started'
    }
},
}
</script>

<style>
.boost{
    height: 15rem;
    background-image: url('../assets/shortly.svg');
    background-position: center;
    background-size: cover;
    background-color: #3a3053;
}
.boost-titulo{
    padding-top: 5rem;
    color: #ffff;
    text-align: center;
}
.boton{
    text-align: center;
}
.boton button{
    padding: 1rem;
    outline: none;
    border: none;
    width: 11rem;
 background: hsl(180, 66%, 49%);
 color: #ffff;
 font-weight: 700;
 border-radius: 2.4rem;
 transition: all 0.3s ease-in-out;    
}
.boton button:hover{
    background-color:#6EFFFF ;
}
</style>