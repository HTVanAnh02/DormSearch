<template>
    <v-layout ref="app" class="rounded rounded-md">
        <v-navigation-drawer color="grey-darken-2" name="drawer" permanent>
            <v-card class="mx-auto" max-width="450">
                <v-toolbar color="cyan-lighten-1">
                    <v-btn icon="mdi-menu" variant="text"></v-btn>

                    <v-toolbar-title>Inbox</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon="mdi-magnify" variant="text"></v-btn>
                </v-toolbar>

                <!-- <v-list :items="items" lines="three" item-props style="height: 100vh;">
                    <template v-slot:subtitle="{ subtitle }">
                        <div v-html="subtitle"></div>
                    </template>
</v-list> -->
                <v-list>
                    <v-list-item v-for="item in items" :key="item" @click="Ok(item.userId)" lines="three">
                        <div class="mb-1 mt-1">
                            <v-list-item-avatar>
                                <img :src="item.avatar" alt="Avatar">
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.fullName"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.fullName"></v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>

        <v-main>
            <RouterView />
        </v-main>
    </v-layout>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import localStorageAuthService from '@/common/storages/authStorage';
import { RouterView } from 'vue-router';
import router from '@/router';
const items = ref<any | undefined>([]);
const loadData = () => {
    axios.get('https://localhost:7237/api/ChatMess/Chat_GroupById', {
        headers: {
            'Authorization': 'Bearer ' + localStorageAuthService.getAccessToken()
        }
    }).then(res => {
        console.log(res.data.data);
        items.value = res.data.data;
    }).catch(err => {
        console.error(err);
    })
}
const Ok = (item: any) => {
    router.push('/chat-mess/chat/' + item)
}
onMounted(() => {
    loadData();
})
</script>