<template>
    <div class="statis__boxes container">
        <div class="statis__box">
            <div class="statis__box--circle">
                <img :src="img" alt="icon" />
            </div>
            <h2 class="statis__box--title">{{ title }}</h2>
            <p>{{ parraf }}</p>
        </div>
    </div>
</template>

<script>

export default {

    props: {
        title: String,
        parraf: String,
        img: String
    },

};
</script>

<style scoped>

    /* Segundo bloque (boxes) */
    .statis__boxes {
        display: grid;
        justify-content: center;
        margin-bottom: 5rem;
    }

    .statis__box {
        background-color: white;
        height: 100%;
        max-width: 95%;
        margin: 1rem auto;
        padding-top: 3rem;
        border-radius: 10px;
        z-index: 2;
    }

    .statis__box h2 {
        text-align: center;
        font-weight: 700;
        margin-bottom: 1.5rem;
        margin-top: -3rem;
    }

    .statis__box p {
        text-align: center;
        color: hsl(257, 7%, 63%);
        max-width: 90%;
        margin: 0 auto;
    }

    .statis__box--circle {
        background-color: #3a3053;
        border-radius: 50%;
        height: 7rem;
        width: 7rem;
        position: relative;
        bottom: 100px;
        margin: 0 auto;
        display: grid;
        place-content: center;
    }

    .statis__box--circle img {
        height: 3rem;
    }

    /* Desktop */

     @media ( min-width: 1344px ){

    .statis__box h2 {
        text-align: start;
        margin-left: 2.5rem;
    }

    .statis__box p {
        text-align: start;
        max-width: 80%;
    }

    .statis__box {
        width: 25rem;
    }

    .statis__box--circle {
        position: relative;
        left: -100px;
        height: 5.5rem;
        width: 5.5rem;
    }

    .statis__box--circle img {
        width: 2.5rem!important;
        height: 2.5rem;
    }
}

</style>