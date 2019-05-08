<template>
    <div>


        <!--Мобильная версия-->
        <v-navigation-drawer fixed temporary v-model="drawer" class="hidden-md-and-up">

            <v-list>

                <v-list-group
                        v-for="(item) in menuItems"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                >

                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>

                    <v-list-tile
                            v-for="subItem in item.text"
                    >

                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon>{{ subItem.text }}</v-icon>
                        </v-list-tile-action>

                    </v-list-tile>

                </v-list-group>

            </v-list>

        </v-navigation-drawer>



        <v-toolbar fixed>
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor:pointer">
                <v-toolbar-title v-text="'Vuetify'"></v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                    <v-menu
                            v-for="(item) in menuItems"
                    >
                        <v-btn
                                v-if="item.icon !== 'shop'"
                                slot="activator"
                                v-bind:href="item.route"
                        >
                                <v-icon left v-html="item.icon"></v-icon>
                                {{ item.title }}
                        </v-btn>

                        <v-btn
                                slot="activator"
                                v-else
                                v-on:click="openBasket()"
                        >
                                <v-badge
                                        color="cyan"
                                        left
                                >
                                    <template>
                                        <span>0</span>
                                    </template>
                                    <v-icon
                                            large
                                            color="grey lighten-1"
                                    >shopping_cart</v-icon>
                                </v-badge>
                                {{ item.title }}
                        </v-btn>

                    </v-menu>
            </v-toolbar-items>
        </v-toolbar>












        <div class="text-xs-center">
            <v-dialog
                    v-model="openBasketGoods"
                    width="1000"
            >
                <v-card>
                    <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                    >
                        Корзина
                    </v-card-title>

                    <v-card-text>
                        Тут будут храниться товары пользователя
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                flat
                                @click="openBasketGoods = false"
                        >
                            Выход
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                drawer: false,
                openBasketGoods: false,
            }
        },
        computed: {
            menuItems() {
                return [
                    {
                        icon: 'shopping_basket',
                        title: 'Товары',
                        route: '/#item-1'
                    },
                    {
                        icon: 'info',
                        title: 'Информация',
                        route: '/#item-3'
                    },
                    {
                        icon: 'shop',
                        title: 'Корзина',
                        route: '/#item-3'
                    },
                ]
            },
        },
        methods: {
          openBasket(){
              this.openBasketGoods = true;
          }
        },
    }
</script>