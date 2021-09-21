<template lang="pug">
header.header
    router-link(to="/").logo
        a(href="#")
            p Vue-Blog
    .buscador
        form.formBuscar
            input(type="text" name="busqueda" placeholder="Buscar articulo..").buscar
            input(type="submit" name="enviar" value="Buscar").submit
    .redes
        ul
            li
                a(href="#" class="fab fa-twitter twitter")
            li  
                a(href="#" class="fab fa-facebook facebook")
            li
                a(href="#" class="fab fa-telegram telegram")


</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.header
    display: flex
    justify-content: space-between
    width: 100vw
    height: auto
    background: rgba(100, 100, 100, .3)
    padding: 1rem
    .logo
        background: rgba(20, 60, 100, .0)
        width: 12rem
        height: 5rem
        display: flex
        justify-content: center
        align-items: center
        text-decoration: none
        a
            display: flex
            justify-content: center
            align-items: center
            height: 100%
            font-size: 2rem
            text-decoration: none
            color: 
            p
                display: flex
                justify-content: center
                align-items: center
                font-family: 'Gluten'
                font-size: 2rem
                height: 100%
                color: rgba(233,233,233,1)
    .buscador
        display: flex
        justify-content: center
        flex-direction: column
        width: 19rem
        height: 5rem
        .buscar
            font-family: 'Varela Round'
            width: 70%
            height: 1.7rem
            border-radius: 8px 0px 0px 8px
            background: rgba(0, 0, 0, .12)
            border: 3px solid rgba(30, 200, 255, .9)
            border-right: 0px
            padding: 6px
            font-weight: bold
            color: rgba(250, 140, 120, .9)
            &:hover
                border: 3px solid rgba(250, 140, 120, .9)
                color: 3px solid rgba(30, 200, 255, .9)
        .submit
            width: 30%
            border-radius: 0px 12px 12px 0px
            background: rgba(0, 0, 0, .12)
            border: 3px solid rgba(30, 150, 155, 1)
            color: rgba(220, 100, 160, 1)
            font-weight: bold
            height: 1.8rem
            cursor: pointer
            &:hover
                border: 3px solid rgba(220, 100, 160, 1)
                background: rgba(233, 233, 233, .02)
                color: rgba(30, 150, 155, .9)
    .redes
        display: flex
        justify-content: center
        flex-direction: column
        flex-wrap: wrap
        width: 7rem
        ul
            width: 100%
            display: flex
            justify-content: space-around
            flex-direction: row
            padding: 6px
            margin-right: 1rem
            li
                list-style: none
                font-weight: bold
                a   
                    text-decoration: none
                    color: white
                    cursor: pointer
                    font-size: 1.5rem
                    &:hover
                        opacity: .7
                .twitter
                    color: rgba(20, 200, 233, 1)
                .facebook
                    color: rgba(10, 150, 183, 1)
                .telegram
                    color: rgba(10, 180, 193, 1)



                
</style>