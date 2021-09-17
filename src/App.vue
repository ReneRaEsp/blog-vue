<template lang="pug">
Header
Section1
</template>

<script>
import Header from "./components/Header.vue";
import Section1 from "./components/Section1.vue";

export default {
  components: {
    Header, Section1
  },
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

#app
  font-family: 'Balsamiq Sans', cursive
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  overflow-x: hidden 

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

  &.router-link-exact-active
    color: #42b983

</style>
