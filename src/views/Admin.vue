<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-toolbar style="background-color: white;">
                <v-row align="center">
                    <v-col cols="8">
                        <v-toolbar-title @click.stop="rail = !rail" class="ma-3">
                            <v-img style="width: 200px; height: 50px;"
                                src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1713839906/logo_bvyt5z.jpg"></v-img>
                        </v-toolbar-title>
                    </v-col>
                    <v-col cols="4">
                        <img @click.stop="rail = !rail" @mouseover="isHovered = true" @mouseleave="isHovered = false"
                            src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1708508357/indent_oymmcm.png"
                            class="ml-6" :class="{ 'clicked': rail, 'hovered': isHovered }">
                    </v-col>
                </v-row>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list-item v-show="this.rail == false" class="text-uppercase" style="opacity: 0.6;font-size: 13px;">Quản
                lý ứng dụng</v-list-item>
            <v-list density="compact" nav>
                <v-list-item style="color: #8B909A;font-size: 24px;"
                    :class="{ 'font-weight-bold': titlecity === 'Danh sách thành phố' }"
                    @click="setTitleCity('Danh sách thành phố')" to='city'>
                    <div style="display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/128/2451/2451728.png"
                            style="width: 22px; height: 22px;"><img>
                        <div
                            style="width: 170px; height: 22px; margin-left: 8px; font-family: Public Sans, sans-serif; font-size: 15px; font-weight: 400; line-height: 22px; color: #8B909A;">
                            Thành phố
                        </div>
                    </div>
                </v-list-item>
                <v-list-item style="color: #8B909A;font-size: 24px;"
                    :class="{ 'font-weight-bold': titleuser === 'Danh sách khu vực' }"
                    @click="setTitleCity('Danh sách khu vực')" to='areas'>
                    <div style="display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/128/2803/2803287.png"
                            style="width: 22px; height: 22px;"><img>
                        <div
                            style="width: 170px; height: 22px; margin-left: 8px; font-family: Public Sans, sans-serif; font-size: 15px; font-weight: 400; line-height: 22px; color: #8B909A;">
                            Khu vực
                        </div>
                    </div>
                </v-list-item>
                <v-list-item style="color: #8B909A;font-size: 24px;"
                    :class="{ 'font-weight-bold': titleuser === 'Danh quyền người dùng' }"
                    @click="setTitleCity('Danh quyền người dùng')" to='user'>
                    <div style="display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/128/1165/1165725.png"
                            style="width: 22px; height: 22px;"><img>
                        <div
                            style="width: 170px; height: 22px; margin-left: 8px; font-family: Public Sans, sans-serif; font-size: 15px; font-weight: 400; line-height: 22px; color: #8B909A;">
                            Người dùng
                        </div>
                    </div>
                </v-list-item>
                <v-list-item style="color: #8B909A;font-size: 24px;"
                    :class="{ 'font-weight-bold': titleuser === 'Danh sách quyền' }"
                    @click="setTitleCity('Danh sách quyền')" to='role'>
                    <div style="display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/128/7141/7141726.png"
                            style="width: 22px; height: 22px;"><img>
                        <div
                            style="width: 170px; height: 22px; margin-left: 8px; font-family: Public Sans, sans-serif; font-size: 15px; font-weight: 400; line-height: 22px; color: #8B909A;">
                            Quyền
                        </div>
                    </div>
                </v-list-item>
                <v-list-item style="color: #8B909A;font-size: 24px;"
                    :class="{ 'font-weight-bold': titleuser === 'Danh sách loại phòng' }"
                    @click="setTitleCity('Danh sách loại phòng')" to='roomstyle'>
                    <div style="display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/128/489/489401.png"
                            style="width: 22px; height: 22px;"><img>
                        <div
                            style="width: 170px; height: 22px; margin-left: 8px; font-family: Public Sans, sans-serif; font-size: 15px; font-weight: 400; line-height: 22px; color: #8B909A;">
                            Loại phòng
                        </div>
                    </div>
                </v-list-item>
                <v-list-item style="color: #8B909A;font-size: 24px;"
                    :class="{ 'font-weight-bold': titleuser === 'Danh sách thống kê' }"
                    @click="setTitleCity('Danh sách thống kê')" to='user'>
                    <div style="display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/128/548/548133.png"
                            style="width: 22px; height: 22px;"><img>
                        <div
                            style="width: 170px; height: 22px; margin-left: 8px; font-family: Public Sans, sans-serif; font-size: 15px; font-weight: 400; line-height: 22px; color: #8B909A;">
                            Thống kê
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar class="px-4 v-app-bar" color="rgb(247, 247, 247)" :elevation="0" rounded="0">
            <h3 style="margin-left: 0.2%;font-size: 24px;  font-family: 'Public Sans', sans-serif;font-weight: 600;"
                class="reposive">
                <v-icon size="20" @click="this.drawer = !this.drawer; this.rail = true" class="icon-menu"
                    style="cursor: pointer;display: none;">mdi mdi-menu</v-icon>
                {{ titlecity }}
            </h3>
            <v-spacer></v-spacer>
            <v-btn>
                <v-badge content="4" color="red">
                    <v-icon style="font-size: 20px;">mdi-bell-outline</v-icon>
                </v-badge>
            </v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-avatar style="cursor: pointer;" v-bind="props" :src="avatar" alt="Vanh">
                        <v-img :src="avatar" alt="Vanh"></v-img>
                        <div class="active-dot"></div>
                    </v-avatar>
                </template>
                <v-list class="ma-2">
                    <v-list-item>
                        <template v-slot:activator="{ on }">
                            <v-list-item v-on="on" icon :prepend-avatar="userInfo.avatar"></v-list-item>
                        </template>
                        <v-card min-width="200">
                            <v-list class="hoverable-list">
                                <v-list-item :prepend-avatar="avatar">
                                    <!-- <v-list-item-title class="email-link">{{ userInfo.data.email }}</v-list-item-title> -->
                                </v-list-item>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'home' })"
                                style="cursor: pointer;">
                                <v-list-item-title>
                                    <v-list-item-icon>
                                        <v-icon class="mr-2"
                                            @click="this.$router.push({ name: 'home' })">mdi-logout</v-icon>
                                    </v-list-item-icon>
                                    Đăng xuất
                                </v-list-item-title>
                            </v-list-item>
                        </v-card>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main style="background-color: rgb(247, 247, 247);min-height: 100vh;">
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script>
// import localStorageAuthService from '@/common/storages/authStorage'
import AdminView from '../views/Admin.vue'
import { commonTitleCity } from '@/store/city/cityindex'
// import { authServiceApi } from '@/service/auth.api';

export default {
    components: { AdminView },
    data() {
        return {
            drawer: true,
            rail: false,
            // avatar: localStorageAuthService.getAvatar(),
            titlecity: commonTitleCity().titlecity,
            // showUserInfo: false,
            // userInfo: {
            // },
        };
    },
    // mounted() {
    //     this.avatar = localStorageAuthService.getAvatar();
    //     this.getUser();

    // },
    methods: {

        setTitleCity(value) {
            commonTitleCity().setTitleCity(value);
            this.titlecity = commonTitleCity().titlecity;
        },
        // toggleUserInfo() {
        //     if (!this.showUserInfo) {
        //         this.getUserInfo();
        //     }
        //     this.showUserInfo = !this.showUserInfo;
        // },
        // async getUser() {
        //     this.userInfo = await authServiceApi._getOwnProfile();
        // }
    }
};
</script>

<style scoped>
.hoverable-list:hover,
.hoverable-list-item:hover {
    background-color: #f5f5f5;
}

.email-link {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
}

.active-dot {
    position: absolute;
    bottom: 0;
    right: 8px;
    width: 8px;
    height: 8px;
    background-color: green;
    border-radius: 50%;
}

.ml-6.clicked,
.ml-6.hovered {
    border: 2px solid #dce1dc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

}


@media (min-width: 1200px) {
    .reposive {
        margin-left: 0.2%;
    }
}
</style>