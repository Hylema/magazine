<template>
    <div>
        <goods-component></goods-component>

        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="purple" dark>
                        <v-card-title primary class="title">Lorem</v-card-title>
                        <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md3>
                    <v-layout row wrap>
                        <v-flex d-flex>
                            <v-card color="indigo" dark>
                                <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex d-flex>
                            <v-layout row wrap>
                                <v-flex
                                        v-for="n in 2"
                                        :key="n"
                                        d-flex
                                        xs12
                                >
                                    <v-card
                                            color="red lighten-2"
                                            dark
                                    >
                                        <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex d-flex xs12 sm6 md2 child-flex>
                    <v-card color="green lighten-2" dark>
                        <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md3>
                    <v-card color="blue lighten-2" dark>
                        <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                class="parallaxHeight"
                id="item-3"
        >
            <div class="container">
                <v-timeline>
                    <v-timeline-item
                            v-for="n in 2"
                            :key="n"
                            large
                    >
                        <template v-slot:icon>
                            <v-avatar>
                                <img src="http://i.pravatar.cc/64">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>Tus eu perfecto</span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title class="headline">Lorem ipsum</v-card-title>
                            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </div>
        </v-parallax>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
            }
        },
    }
</script>

<style scoped>
    .parallaxHeight{
        height: 400px !important;
    }
    @media (max-width: 767px) {
        .parallaxHeight{
            height: 600px !important;
        }
    }
</style>