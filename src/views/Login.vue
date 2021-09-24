<template lang="pug">
section.login
    .formulario
        input(v-model="usuario" name="usuario" placeholder="Usuario" type="text")
        input(v-model="password" name="password" placeholder="Password" type="password")
        p.send(@click="sendLogin()") Login
        p.error(v-if="messages > 0" v-for="message of messages" :key="message") {{ message }}
</template>
<script>
import axios from "axios"; 
import { ref } from "vue";
export default {
  setup() {
    //Variables
    let usuario = ref("");
    let password = ref("");
    let messages = ref([]);
    let validate = ref(true);
    //Methods
    const validar = () => {
        messages.value = [];
        if (usuario.value.length < 1){
            validate.value = false;
            messages.value.push('Debes introducir un email valido');
        }
        if (password.value.length < 1 ){
            validate.value = false;
            messages.value.push('Debes introducir un passwword valido');
        }
    };
    const sendLogin = () => {
        const body = {
          usuario: usuario.value,
          password: usuario.value
        };
        axios.post('localhost:3000/api/blog/login', body)
            .then(res => {return res.data})
            .then(data => { 
                this.$store.dispatch('saveToken', data.tokenReturn);
             })
            .catch(console.log);
    };
    return {
      //Variables
      usuario,
      password,
      messages,
      //Methods
      sendLogin,
    };
  },
};
</script>
<style scoped lang="sass">
.login
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 98vw
    height: 30rem
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
        width: 20rem
        height: 20rem
        border-radius: 7px
        padding-top: 2rem
        margin-top: 2rem
        margin-bottom: 2rem
        input
            margin-top: 2rem
            margin-bottom: 2rem
            width: 90%
            height: 2rem
            color: rgba(23, 133, 133, .9)
            font-weight: bold
            padding: 7px
        .send
            font-weight: bold
            padding: .6rem
            cursor: pointer
            color: white
            background: rgba(24, 100, 190, .7)
            border-radius: 20px
            transition: .5s
            &:hover
                background: rgba(24, 100, 190, 1)
</style>
