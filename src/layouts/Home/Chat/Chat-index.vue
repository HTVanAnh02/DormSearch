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

                <v-list :items="items" lines="three" item-props style="height: 100vh;">
                    <template v-slot:subtitle="{ subtitle }">
                        <div v-html="subtitle"></div>
                    </template>
                </v-list>
            </v-card>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <v-card class="mx-auto" style="width: 1000vh;height: 100vh;position: relative;">
                <v-list lines="two">
                    <v-list-subheader>Today</v-list-subheader>

                    <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Người thuê nhà?">
                        <template v-slot:subtitle>
                            <span class="font-weight-bold">Nhà còn không</span>
                        </template>
                    </v-list-item>


                </v-list>
                <div style="position: absolute;bottom: 0;right: 0;left: 0;">
                    <v-row>
                        <v-col cols="10">
                            <v-textarea label="Nhập tin nhắn" clearable counter></v-textarea>
                        </v-col>
                        <v-col style="display: flex;align-items: center;justify-content: center;">
                            <v-btn>Gửi tin nhắn</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-main>
    </v-layout>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

const items = reactive([
    { type: 'subheader', title: 'Today' },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Người thuê nhà?',
        subtitle: `<span class="text-primary">Xin chào</span>?`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Người thuê nhà 2',
        subtitle: `<span class="text-primary">Cho hỏi còn trọ không?</span>`,
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Người thuê thứ 3',
        subtitle: '<span class="text-primary">Giá phòng bao nhiêu vậy</span>',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Người thuê thứ 4',
        subtitle: '<span class="text-primary">Còn phòng không ah</span>',
    },
    { type: 'divider', inset: true },
    {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Người thuê thứ 5',
        subtitle: '<span class="text-primary">Cho hỏi bạn ở khu vực nào</span>',
    },
],)
</script>