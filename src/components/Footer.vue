<template lang="pug">
footer.footer
    .subirCont
        router-link.subir(to="/subir") Subir Post

</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.footer
    display: flex
    justify-content: center
    align-items: center
    background: rgba(17, 37, 73, .5)
    width: 100vw
    height: 20vh
    .subirCont
        .subir
            border: 0 solid
            border-radius: 15px
            color: rgba(23, 73, 73, .9)
            background: rgba(230,240, 240, .6)
            font-weight: bold
            text-decoration: none
            width: 6rem
            height: 2rem
            padding: .5rem
            cursor: pointer
            transition: .3s
            font-family: 'Helvetica'
            &:hover
                color: rgba(233, 233, 233, .7)
                background: rgba(17, 37, 73, .7)
</style>