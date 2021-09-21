<template lang="pug">
section.subir
    .tituloCont
        h2.titulo Subir Post {{ imagen }}
    div.formulario
        input(v-model="titulo" name="titulo" placeholder="Titulo" type="text" ).tituloImp
        input(v-on:change="onFileChange" name="imagen" type="file").imagen
        textarea(v-model="extracto" name="extracto" placeholder="Extracto").extracto
        textarea(v-model="texto" name="texto" placeholder="Texto").texto
        button(name="enviar" @click="subirPost()").enviar Guardar
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
    setup(){
        //Variables
        let titulo = ref('');
        let imagen = ref('');
        let extracto = ref('');
        let texto = ref('');

        //Methods
        //imagen
        const createImage = (img) => {
            imagen.value = img;
            imagen.value.name = img.name;
            console.log(imagen.value.name);
        };

        const onFileChange = (e) =>{
            let files = e.target.files || e.dataTransfer.files;
            !files.length ? null : createImage(files[0]);
        };

        //Fin imagen
        const subirPost = () => {
            const formData = new FormData();
            formData.append('file', imagen.value);
            axios.post('http://localhost:3000/api/articulo/upload', formData)
                .then(res=>{
                    console.log(res);
                })
                .catch(console.log);
        };

        return {
            //Variables
            titulo, imagen, extracto, texto,

            //Methods
            subirPost, onFileChange
        };
    }

}
</script>

<style scoped lang="sass">
.subir
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 98vw
    height: auto
    .tituloCont
        padding-top: 2rem
        .titulo
            color: rgba(244, 244, 244, .7)
    .formulario
        display: flex
        justify-content: flex-start
        align-items: center
        flex-direction: column
        background: rgba(20, 122, 140, .2)
        width: 85%
        height: 50rem
        border-radius: 7px
        padding-top: 2rem
        margin-top: 2rem
        margin-bottom: 2rem
        input
            margin-top: 2rem
            margin-bottom: 2rem
            width: 25rem
            height: 2rem
            color: rgba(23, 133, 133, .9)
            font-weight: bold
            padding: 7px
        .extracto
            margin-bottom: 2rem
            max-width: 34rem
            max-height: 10rem
            min-width: 25rem
            min-height: 7rem
            font-weight: bold
            padding: 7px
        .texto
            margin-bottom: 2rem
            max-width: 34rem
            max-height: 16rem
            min-width: 25rem
            min-height: 15rem
            font-weight: bold
            padding: 7px
        button
            width: 12rem
            height: 2rem
            font-weight: bold
            color: rgb(30, 80 ,80 )
            border-radius: 4px
            border: 0px solid
            cursor: pointer
            &:hover
                color: rgb(200, 200, 200)
                background: rgba(50, 200, 200, .2)


</style>