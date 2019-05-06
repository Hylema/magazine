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

                        <v-btn flat slot="activator" class="header">
                            <v-icon left v-html="item.icon"></v-icon>
                            {{ item.title }}
                        </v-btn>

                        <v-list class="fixNavBar">
                            <v-list-tile
                                    v-for="(text) in item.text"
                                    :to="text.route"
                            >
                                <v-list-tile-title>{{ text.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>

                    </v-menu>

            </v-toolbar-items>

        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                drawer: false,
            }
        },
        computed: {
            menuItems() {
                return [
                    {
                        icon: 'visibility',
                        title: 'Слово',
                        text: [
                            {title: 'Работа', route: '/work'},
                            {title: 'Пользователи', route: '/infoAboutUsers'}
                        ]
                    },
                    {
                        icon: 'extension',
                        title: 'Слово',
                        text: [
                            {title: 'Click Учить слова'},
                            {title: 'Click Учить слова'},
                            {title: 'Click Учить слова'}
                        ]
                    },
                ]
            },
        }
    }
</script>