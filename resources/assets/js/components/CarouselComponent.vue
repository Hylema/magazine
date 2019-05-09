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
                        src: 'http://www.clubalpinobarcelona.com/wp-content/uploads/2015/12/alps.jpg'
                    },
                    {
                        src: 'http://www.clubalpinobarcelona.com/wp-content/uploads/2015/12/alps.jpg'
                    },
                    {
                        src: 'http://www.clubalpinobarcelona.com/wp-content/uploads/2015/12/alps.jpg'
                    },
                    {
                        src: 'http://www.clubalpinobarcelona.com/wp-content/uploads/2015/12/alps.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>