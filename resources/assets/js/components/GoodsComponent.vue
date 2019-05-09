<template>
    <div>
        <v-container>

            <h2
                    class="funny-title section-title"
                    id="item-1"
                    style="margin-top: 150px !important;"
            >Товары LAMZAK</h2>

            <v-layout
                    row
            >
                <v-flex xs12 sm6 md4 class="goodsPadding" v-for="n in 3">
                    <v-hover>
                        <v-card
                                slot-scope="{ hover }"
                                :class="`elevation-${hover ? 12 : 2}`"
                        >
                            <v-img
                                    class="white--text"
                                    height="200px"
                                    src="http://itd2.mycdn.me/image?id=837108783773&t=20&plc=WEB&tkn=*HuMZyeIoRvJN0x22q0H4vwZATHA"
                            >
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline">Lamzak</span>
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
                                <v-btn flat color="success">Купить</v-btn>
                                <v-btn flat color="orange">Подробнее о товаре</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                drawer: false,
            }
        },
    }
</script>

<style scoped>
    .goodsPadding{
        padding: 10px;
    }
</style>