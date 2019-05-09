<template>
    <v-app>
        <header-component
            class="header"
        ></header-component>
            <v-content
                class="content"
            >
                <router-view></router-view>
            </v-content>
        <footer-component></footer-component>
    </v-app>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>
<style>
    .v-btn:active{
        outline: none !important;
    }
    a:hover{
        text-decoration: none !important;
    }
    .v-menu__content{
        top:65px !important;
    }
    @media (max-width: 960px) {
        .content{

        }
    }

</style>

