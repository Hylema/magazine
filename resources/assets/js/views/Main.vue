<template>
        <full-page
                :options="options"
        >
            <div class="section" id="section1">
                <home-main-component></home-main-component>


                <!--<div class="slide">-->
                <!--<h3>Slide 2.1</h3>-->
            <!--</div>-->
                <!--<div class="slide">-->
                    <!--<h3>Slide 2.2</h3>-->
                <!--</div>-->
                <!--<div class="slide">-->
                    <!--<h3>Slide 2.3</h3>-->
                <!--</div>-->
                <!--<div id="scene">-->
                    <!--<div data-depth="2.2" style="font-size: 50px; color: white">My first Layer!</div>-->
                    <!--<div data-depth="4.6">My second Layer!</div>-->
                <!--</div>-->
            </div>

            <div class="section" id="section2">
                <goods-component></goods-component>
            </div>

            <div class="section" id="section3">

            </div>
        </full-page>
</template>

<script>
    export default {
        data () {
            return {
                options: {
                    navigation: true,
                    anchors: ['home', 'page2', 'page3'],
                    navigationPosition: 'right',
                    //sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
                    menu: '#menu',
                    scrollOverflow:true
                },
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>
    #menu{
        position: absolute;
        left: 0px;
        top: 200px;
        z-index: 1000;
    }
    #section1{

    }
    #section2{
        background-image: url('http://junglefruit.ru/wp-content/uploads/2019/03/waterfalljunglejpg.jpg');
    }
    #section3{
        background-image: url('https://redage.net/images/bg/about.jpg');
    }
    .section{
        background-size: cover;
    }
    .parallaxHeight{
        height: 400px !important;
    }
    @media (max-width: 767px) {
        .parallaxHeight{
            height: 600px !important;
        }
    }
</style>
