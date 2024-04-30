<template>
    <v-navigation-drawer expand-on-hover width="200px">
        <v-row style="height: 100px;">
            <v-col cols="1"></v-col>
            <v-col cols="5" >
                <v-img class="pa-2" :src="logo"></v-img>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-icon class="mr-2">mdi mdi-backburger</v-icon>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import logo from '../../assets/image/logo.png'
</script>

<style></style>