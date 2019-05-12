<template>
    <v-container>
        <v-layout
                row
        >
            <v-flex
                    xs12 sm12 md6
                    class="mainInfo animated fadeInLeft"
            >

                <v-flex
                        md12
                >
                    <div>
                        <h2 class="mainInfoUp"><strong>Хочешь отдохнуть с комфортом?</strong></h2>
                    </div>
                </v-flex>

                <v-flex
                        md12
                >
                    <div class="mainInfoDown">
                        Возьми с собой ламзак
                    </div>
                </v-flex>

                <v-flex
                    md12
                    right
                    class="mainButton"
                >
                    <v-btn
                            color="purple"
                            href="#page2"
                            round
                            large
                    >
                        Выбрать ламзак
                    </v-btn>
                </v-flex>

            </v-flex>

            <v-flex
                    xs12 sm12 md6
                    class="mainPhoto animated fadeInRight"
            >
                <img src="https://avatars.mds.yandex.net/get-pdb/1822850/f500fb86-739b-42b2-b6bb-6c28fa9c88a9/s1200" alt="Ламзак" width="100%">
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import Parallax from 'parallax-js'
    export default {
        name: "HomeMainComponent",
        data(){
            return {

            }
        },
        mounted() {
            this.runParallax();
        },
        methods: {
            runParallax(){
                let scene = document.getElementById('scene');
                let parallaxInstance = new Parallax(scene);
            }
        }
    }
</script>

<style scoped>
    .mainInfoUp{
        font-size: 40px;
        opacity: 0.7;
        max-width: 370px;
    }
    .mainInfoDown{
        font-size: 20px;
        opacity: 0.7;
    }
    .mainInfo{
        margin-top: 10%;
        padding: 35px;
    }
    .mainPhoto{
        padding: 40px;
    }
    .mainButton{
        margin-top: 10%;
    }
    @media (max-width: 958px) {
        .mainButton{
            width: 100%;
            margin-top: 4%;
        }
        .v-btn{
            width: 100%;
        }
        .mainInfoUp, .mainInfoDown{
            text-align: center;
            max-width: none;
        }
    }
    @media (max-width: 768px) {
        .mainPhoto{
            display: none;
        }
    }
</style>