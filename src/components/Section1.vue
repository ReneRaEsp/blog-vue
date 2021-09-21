<template lang="pug">
section.section1
  div(v-if="cargando == 'Cargando'" class="no-posts")
    h2 Cargando...
  div(v-else-if="cargando == 'NoHay'" class="no-posts")
    h2 Error al cargar los posts...
  .posts(v-else-if="cargando == 'Cargado'")
    .post(v-for="post of posts" :key="post._id")
      router-link.imgCont(:to="'/single' + post._id")
        img.imgPost(:src="require('./../assets/img/' + post.thumb)" alt="")
      router-link(:to="'/single' + post._id").tituloCont
        h2.tituloPost {{ post.titulo }}
      .extractoCont
        p.extractoPost {{ post.extracto }}
      router-link.leerMas(:to="'/single' + post._id")
        | leer mas...

  
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      getPosts();
    });
    let posts = ref([]);
	  let cargando = ref('Cargando');
    const img = ref("logo.png");

    //Methods

    const getPosts = () => {
      axios
        .get("http://localhost:3000/api/articulo/list")
        .then((response) => {
          	posts.value = response.data;
            console.log(response.data);
          	cargando.value = 'Cargado';
        })
        .catch(error => {
			console.log(error);
			cargando.value = 'NoHay';
		});
    };
    return {
      //Variables
      posts, img, cargando,
      //Methods
      getPosts,
    };
  },
};
</script>

<style lang="sass">
.section1
	display: flex
	justify-content: center
	width: 100vw
	height: auto
	background: rgba(255, 255, 255, .0)
	.no-posts
		display: flex
		padding: 10rem 0 19rem 0
	  	width: 100vw
	  	height: 50vh
		h2
			color: rgba(20, 200, 255, .9)
	.posts
        display: flex
        justify-content: flex-start
        flex-wrap: wrap
        width: 90vw
        height: 100%
        //background: rgba(40, 200, 230, .09)
        .post
            margin: auto
            margin-top: 20px
            background: rgba(40, 60, 70, 1)
            border-radius: 5px
            margin-bottom: 20px
            width: 30rem
            height: 20rem
            .imgCont
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                height: 50%
                border-radius: 5px
                background: rgba(233, 233, 233, .2)
                overflow: hidden
                .imgPost
                    width: 40rem
                    height: 15rem
            .tituloCont
                display: flex
                justify-content: center
                text-decoration: none
                width: 100%
                height: 10%
                padding: 10px
                //background: rgba(233, 233, 233, .1)
                cursor: pointer
                .tituloPost
                    color: rgba(222, 70, 220, 1)
            .extractoCont
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                height: 30%
                padding: 10px
                .extractoPost
                    text-align: start
                    text-justify: justify
                    color: rgba(60, 200, 210, 1)
            .leerMas
                width: 100%
                height: 10%
                display: flex
                justify-content: flex-end
                align-items: center
                padding: 10px
                color: white
                text-decoration: none
</style>
