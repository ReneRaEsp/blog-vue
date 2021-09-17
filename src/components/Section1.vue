<template lang="pug">
section.section1
    .posts
        .post
            a(href="#").imgCont
                img(src="../assets/logo.png" alt="").imgPost
            a(href="#").tituloCont
                h2.tituloPost Vue 3 Blog
            .extractoCont
                .extractoPost Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit sunt atque harum sequi quam in autem vero eligendi nesciunt velit sint itaque pariatur repudiandae
            a(href="#").leermas leer mas
</template>

<script>
export default {

}
</script>

<style lang="sass">
.section1
    display: flex
    justify-content: center
    width: 99vw
    height: auto
    background: rgba(5,5,5,.9)
    .posts
        width: 90vw
        height: 100%
        //background: rgba(40, 200, 230, .09)
        .post
            margin: auto
            margin-top: 20px
            background: rgba(40, 200, 230, .09)
            margin-bottom: 20px
            width: 70%
            height: 20rem
            .imgCont
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                height: 50%
                background: rgba(233, 233, 233, .2)
                overflow: hidden
                .imgPost
            .tituloCont
                display: flex
                justify-content: center
                text-decoration: none
                width: 100%
                height: 10%
                background: rgba(233, 233, 233, .1)
                cursor: pointer
                .tituloPost
                    color: rgba(222, 70, 220, 1);

            .extractoCont
                .extractoPost


</style>