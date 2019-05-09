<template>
        <full-page
                :options="options"
        >
            <div class="section" id="section1">
                <!--<div class="slide">-->
                <!--<h3>Slide 2.1</h3>-->
            <!--</div>-->
                <!--<div class="slide">-->
                    <!--<h3>Slide 2.2</h3>-->
                <!--</div>-->
                <!--<div class="slide">-->
                    <!--<h3>Slide 2.3</h3>-->
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
                    anchors: ['page1', 'page2', 'page3'],
                    navigationPosition: 'right',
                    sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
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
    .section{
        background-size: cover;
        width: 100%;
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
