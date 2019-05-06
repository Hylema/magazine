<template>
        <div class="hidden-sm-and-down">
            <v-carousel>
                <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        src: 'https://christians39.ru/wp-content/uploads/2015/11/copy-2.jpg'
                    },
                    {
                        src: 'https://bluevisionmedia.com/content/uploads/2017/06/bluevisionmedia-panoramakamera.jpg'
                    },
                    {
                        src: 'http://www.clubalpinobarcelona.com/wp-content/uploads/2015/12/alps.jpg'
                    },
                    {
                        src: 'https://cdn.firespring.com/images/bbdc4755-f074-429f-a3b3-e848c11f2ec9.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>