<template>
    <div
            class="container"
            id="item-1"
    >
        <v-layout
                row
        >
            <v-flex xs12 sm12 md6 class="goodsPadding" v-for="n in 6">
                <v-card>
                    <v-img
                            class="white--text"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">Top 10 Australian beaches</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <div>
                            <span class="grey--text">Number 10</span><br>
                            <span>Whitehaven Beach</span><br>
                            <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Купить</v-btn>
                        <v-btn flat color="orange">Подробнее о товаре</v-btn>
                        <div class="text-xs-center">
                            <v-rating v-model="rating"></v-rating>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                drawer: false,
                rating: 3,
            }
        },
    }
</script>

<style scoped>
    .goodsPadding{
        padding: 10px;
    }
</style>