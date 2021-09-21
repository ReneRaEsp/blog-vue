<template lang="pug">
Header
router-view
Footer

</template>

<script>
import Header from "./components/Header.vue";
import Section1 from "./components/Section1.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header, Section1, Footer
  },
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  width: 100vw
  overflow-x: hidden
  display: flex
  justify-content: center

#app
  display: flex
  justify-content: center 
  flex-direction: column
  width: 100vw
  font-family: 'Balsamiq Sans', cursive
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  overflow-x: hidden 
  background: url('./assets/dark_wood.png')
  //background-attachment: fixed

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

  &.router-link-exact-active
    color: #42b983

</style>
