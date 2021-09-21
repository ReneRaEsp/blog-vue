<template lang="pug">
section.single
    div(v-if="cargando == 'Cargando'" class="no-posts")
        .tituloCont 
            h2.tituloPost Cargando
    div(v-else-if="cargando == 'Error'" class="no-posts")
        .tituloCont 
            h2.tituloPost Error al cargar el post...
    .post(v-else-if="cargando == 'Cargado'")
        .tituloCont 
            h2.tituloPost {{ post.titulo }}
        .imgCont
            img.imgPost(:src="require('../assets/img/' + post.thumb)")
        .texto
            p.textoPost {{ post.texto }}
</template>

<script>
import axios from 'axios';
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
export default {
  setup() {
    onMounted(() => {
      getPost();
    });
    const route = useRoute();
    const post = ref({
        titulo: '',
        texto: '',
        thumb: ''
    });

	const cargando = ref('Cargando');

    //Methods
    const getPost = () => {
      axios.get('http://localhost:3000/api/articulo/query?_id='+route.params.id)
        .then(res=>{
            post.value.titulo = res.data.titulo;
            post.value.thumb = res.data.thumb;
            post.value.texto = res.data.texto;
			cargando.value = 'Cargado';
        })
        .catch(error => {
			cargando.value = 'Error';
			console.log(error);
		});
    };

    return {
	  // Variables
      post, cargando,

	  // Methods
      getPost,
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="sass">
.single
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 100vw
    height: auto
    background: rgba(5,5,5,.9)
    .post
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        width: 100vw
        height: auto
        background: rgba(40, 200, 230, .09)
        .imgCont
            display: flex
            justify-content: center
            align-items: center
            width: 80vw
            height: 40rem
            //background: rgba(233, 233, 233, .2)
            overflow: hidden
            .imgPost
                margin: auto
                width: 80vw
                height: 40rem
        .tituloCont
            display: flex
            justify-content: center
            align-items: center
            text-decoration: none
            width: 100%
            height: 5rem
            padding: 10px
            //background: rgba(233, 233, 233, .1)
            cursor: pointer
            .tituloPost
                color: rgba(222, 70, 220, 1);
        .texto
            display: flex
            justify-content: center
            align-items: flex-start
            flex-wrap: wrap
            width: 100%
            min-height: 10rem
            padding: 20px
            .textoPost
                word-wrap: break-word
                display: flex
                flex-wrap: wrap
                text-align: center
                text-justify: justify
                color: rgba(240, 200, 210, .9)


.no-posts
	display: flex
	flex-direction: column
	padding: 10rem 0 19rem 0
	width: 100vw
	height: 60vh
	h2
		color: rgba(20, 200, 255, .9)
</style>
