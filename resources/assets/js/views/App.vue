<template>
    <v-app>
        <header-component></header-component>
        <carousel-component v-if="route"></carousel-component>
            <v-content>
                <router-view></router-view>
            </v-content>
        <footer-component></footer-component>
    </v-app>
</template>
<script>
    export default {
        data () {
            return {
                route: false,
            }
        },
        mounted() {
            this.checkRoute();
        },
        methods: {
            checkRoute(){
                if(document.location.pathname === '/'){
                    this.route = true;
                }
            }
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
</style>

