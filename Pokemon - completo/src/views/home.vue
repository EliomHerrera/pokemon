<script>
import axios from 'axios';
export default {
    components: {
    },
    data: () => ({
        myArray: [], srcImg: [],
    }),
    methods: {
        async fnAxiosGetData() {
            let url = "https://pokeapi.co/api/v2/pokemon"
            let res = await axios.get(url)
            this.myArray = res.data.results
            for (let i = 1; i < this.myArray.length + 1; i++) {
                this.srcImg.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
            }
        },

    },
    mounted() {
        this.fnAxiosGetData()
    }
}
</script>

<template>
    <div>
        <h1>
            Estas En Home
        </h1>
        <ul class="d-flex justify-content-center flex-wrap">
            <li v-for="x, index in myArray" :key="x" class="m-2" style="width: 200px;">
                <RouterLink class="row text-center" :to="`/about/${index + 1}`">
                    <img :src="srcImg[index]" width="250">
                    <h3>{{ x.name }}</h3>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style>
li {
    list-style: none;
}
</style>