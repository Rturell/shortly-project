<template>
    <section class="statis">
        <div class="linea"></div>
        <div class="statis__desc">
            <h2>{{ title }}</h2>
            <p>{{ parraf }}</p>
        </div>
        
        <div class="statis__boxes">
            <StatisticsBox :title="boxOne.title" :parraf="boxOne.parraf" :img="boxOne.srcOne" />
            <StatisticsBox :title="boxTwo.title" :parraf="boxTwo.parraf" :img="boxTwo.srcTwo" />
            <StatisticsBox :title="boxThree.title" :parraf="boxThree.parraf" :img="boxThree.srcThree" />
        </div>
    </section>
</template>

<script>
import StatisticsBox from './StatisticsBox.vue'

export default {
    data(){
        return {
            title: 'Advanced Statistics',
            parraf: 'Track how your links are performing across the web with our advanced statistics dashboard.',
            boxOne: {
                title: 'Brand Recognition',
                parraf: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
                srcOne: require('../assets/icon-brand-recognition.svg')
            },
            boxTwo: {
                title: 'Detailed Records',
                parraf: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
                srcTwo: require('../assets/icon-detailed-records.svg')
            },
            boxThree: {
                title: 'Fully Customizable',
                parraf: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
                srcThree: require('../assets/icon-fully-customizable.svg')
            }
        }
    },
    components: {
        StatisticsBox
    }
}
</script>

<style scoped>
    
    /* Primer bloque */
    .statis {
        background-color: #f0f1f6;
        height: 100%;
        padding-bottom: 2rem;
        margin-top: -51rem;
    }

    .statis__desc {
        max-width: 90%;
        margin: 1rem 1rem 0rem 1rem;
        padding: 5rem 0 5rem 0;
    }

    .statis__desc h2 {
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        font-size: 30px;
    }

    .statis__desc p {
        text-align: center;
        color: hsl(257, 7%, 63%);
        font-weight: 500;
        max-width: 90%;
        margin: 0 auto;
    }

    /* Línea */
    .linea {
        background-color: #2ecfce;
        height: 45rem;
        width: 0.5rem;
        margin: 0 auto;
        z-index: 1;
        position: relative;
        top: 1200px;
    }

    /* Desktop */  
    @media ( min-width: 1344px ){

        .statis {
            margin-top: 0;
            height: 90vh;
        }

        .statis__desc {
            max-width: 30%;
            margin: 0 auto;
        }

        .statis__boxes {
            display: flex;
            max-width: 70%;
            margin: 0 auto;
            justify-content: center;
        }

        .statis__boxes:first-child {
            transform: translateY(-20%);
            z-index: 2;
        }

        .statis__boxes:last-child {
            transform: translateY(20%);
            z-index: 2;
        }

        .linea {
            z-index: 0;
            height: 0.5rem;
            width: 60%;
            top: 495px;
        }


    }

</style>
