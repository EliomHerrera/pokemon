
<script>
import axios from 'axios';

export default {
    components: {
    },
    data: () => ({
        nombre: [], img: "", poderes: [],
    }),
    methods: {
        fnAxiosGetData() {
            let url = `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
            axios.get(url).then(res => {
                this.poderes = res.data.moves
                console.log(this.poderes)
                this.nombre = res.data.name
            })
            this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.$route.params.id}.svg`

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
            Este es el Pokemon: {{ nombre }}
        </h1>
        <div class="d-flex justify-content-center">
            <img :src="img" alt="error" style="width: 400px;" class="my-5">
        </div>
        <ul class="d-flex flex-wrap justify-content-center">
            <li class="me-3 col-2 row" v-for="x, index in poderes" :key="x">
                <h6 :class="index % 2 == 0 ? 'bg-danger' : 'bg-success'">{{ x.move.name }}</h6>
            </li>
        </ul>
    </div>
</template>