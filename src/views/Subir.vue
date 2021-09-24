<template lang="pug">
section.subir
    .tituloCont
        h2.titulo Subir Post
    div.formulario
        input(v-model="titulo" name="titulo" placeholder="Titulo" type="text" ).tituloImp
        input(v-on:change="onFileChange" name="imagen" type="file").imagen
        textarea(v-model="extracto" name="extracto" placeholder="Extracto").extracto
        textarea(v-model="texto" name="texto" placeholder="Texto").texto
        button(name="enviar" @click="(savePost())").enviar Guardar
        p.errors(v-if="errors.length > 0" v-for="error of errors" :key="error") * {{error}}
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  setup() {
    //--- Lifecycle
    onMounted(() => {
      addOrEdit();
    });
    const route = useRoute();
    //---En of Lifecycle
    //----Variables-------
    let titulo = ref("");
    let imagen = ref("");
    let extracto = ref("");
    let texto = ref("");
    let errors = ref([]);
    let isEdit = ref("");

    //-----Methods--------

    //--Image
    const createImage = (img) => {
      imagen.value = img;
    };

    const onFileChange = (e) => {
      let files = e.target.files || e.dataTransfer.files;
      !files.length ? null : createImage(files[0]);
    };
    //-- End Imagen
    //-- Validate
    const validate = () => {
      errors.value = [];
      let isValid = true;
      if (!titulo.value || titulo.value.length > 200) {
        isValid = false;
        errors.value.push(
          "El campo titulo no debe estar vacio y debe ser menor a 200 caracteres"
        );
      }
      if (!extracto.value || extracto.value.length > 250) {
        isValid = false;
        errors.value.push(
          "El extracto no puede estar vacio y debe ser menor a 250 caracteres"
        );
      }
      if (!texto.value) {
        isValid = false;
        errors.value.push("El texto no puede estar vacio");
      }
      if (imagen.value) {
        const type = imagen.value.type;
        const name = imagen.value.name;
        const size = imagen.value.size;
        if (size > 2000000) {
          isValid = false;
          errors.value.push("El tamaño de la imagen debe ser menor a 2MB");
        }
        if (name.length > 50) {
          isValid = false;
          errors.value.push(
            "El nombte de la imagen debe ser menor a 50 caracteres"
          );
        }
        if (type == "image/jpeg" || type == "image/png") {
          null;
        } else {
          isValid = false;
          errors.value.push(
            "El archivo no es una imagen valida los formatos admitidos son jpeg y png"
          );
        }
      } else {
        isValid = false;
        errors.value.push("Debe agregar una imagen");
      }
      return isValid;
    };
    //-- Uploads
    const uploadImage = () => {
      const formData = new FormData();
      formData.append("file", imagen.value);
      axios
        .post("http://localhost:3000/api/articulo/upload", formData)
        .then((res) => {
          console.log(res);
        })
        .catch(console.log);
    };
    const uploadPost = () => {
      const post = {
        titulo: titulo.value,
        extracto: extracto.value,
        texto: texto.value,
        thumb: imagen.value.name,
      };
      axios
        .post("http://localhost:3000/api/articulo/add", post)
        .then((res) => {
          console.log(res);
        })
        .catch(console.log);
    };
    // -- Option
    const addOrEdit = () => {
      if (route.params.id) {
        isEdit.value = true;
        console.log("editar");
      } else {
        isEdit.value = false;
        console.log("agregar");
      }
    };
    //-- Event Listeners
    const savePost = () => {
      if (validate()) {
        console.log("validado");
        uploadImage();
        uploadPost();
      } else {
        console.log("invalido");
      }
    };

    return {
      //Variables
      titulo,
      imagen,
      extracto,
      texto,
      errors,

      //Methods
      onFileChange,
      savePost,
    };
  },
};
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
        .errors
            margin-top: .3rem
            color: rgba(220, 20, 50, .9)

@media screen and (max-width: 800px)
    input
        width: 90%
</style>
