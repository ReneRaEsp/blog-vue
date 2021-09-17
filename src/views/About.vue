<template lang="pug">
#nav
  router-link(to="/")
  | Home
  | |
  router-link(to="/about")
  | About
  router-view
</template>

<script>
export default {

}
</script>

<style>

</style>