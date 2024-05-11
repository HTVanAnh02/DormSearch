<template>
    <v-app-bar height="88px" elevation="1" class="d-flex">
      <div class="d-flex align-center" style="width: 33%;">
        <v-col cols="4">
          <v-img height="50px" :src="logo" style="width: 200px;"></v-img>
        </v-col>
        <router-link href="/" style="margin-left: 12px;font-family: Inter, sans-serif; " v-bind="props"
          class="hoverable-list-item">Trang Chủ </router-link>
        <router-link href="#" style="margin-left: 12px;font-family: Inter, sans-serif; " v-bind="props"
          class="hoverable-list-item">Tin Tức</router-link>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <p style="margin-left: 12px;font-family: Inter, sans-serif; " v-bind="props">Bất động sản</p>
          </template>
          <v-list class="ma-2">
            <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
              style="cursor: pointer;">
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon class="mr-2" color="primary"
                    @click="this.$router.push({ name: 'login_page' })">mdi-city</v-icon>
                </v-list-item-icon>
                Căn hộ,chung cư
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
              style="cursor: pointer;">
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon class="mr-2" color="red" @click="this.$router.push({ name: 'login_page' })">mdi-home</v-icon>
                </v-list-item-icon>
                Nhà trọ,phòng trọ
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div style="width: 34%; display: flex; align-items: center;">
        <v-text-field clearable density="compact" variant="solo-filled" label="Tìm kiếm"
          style="background-color: #F0F0F0; width: 15%;border-radius: 20px !important;" prepend-inner-icon="mdi-magnify"
          single-line flat hide-details rounded></v-text-field>
      </div>
      <v-row style="width: 33%; " class="d-flex align-center justify-space-between">
        <v-col cols="4">
        </v-col>
        <v-col cols="8" style="display: flex; align-items: center;">
          <v-row cols="4">
            <v-btn class="text-capitalize" variant="outlined" @click="addHouses()"
              style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700; margin-left: auto;margin-right: 16px;">Đăng
              <span class="text-lowercase ml-1">tin</span> <v-icon class="ml-2"
                style="height: 40px;">mdi-cloud-upload</v-icon>
            </v-btn>
          </v-row>
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-avatar style="cursor: pointer;" v-bind="props">
                <v-img src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1709719885/vanh_kqdyqt.jpg"
                  alt="Vanh"></v-img>
                <div class="active-dot"></div>
              </v-avatar>
            </template>
            <v-list class="ma-2">
              <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
                style="cursor: pointer;">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon class="mr-2" color="primary"
                      @click="this.$router.push({ name: 'login_page' })">mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  Đăng Nhập
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'profile' })"
                style="cursor: pointer;">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon class="mr-2" color="secondary"
                      @click="this.$router.push({ name: 'profile' })">mdi-account</v-icon>
                  </v-list-item-icon>
                  Thông tin tài khoản
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
                style="cursor: pointer;">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon style="width: 14px; height: 12.85px;" color="blue">mdi-cloud-upload</v-icon>
                  </v-list-item-icon>
                  Quản lý bài đăng
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
                style="cursor: pointer;">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon class="mr-2" @click="this.$router.push({ name: 'login_page' })">mdi-logout</v-icon>
                  </v-list-item-icon>
                  Đăng xuất
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
  <HouseDialog v-model="isShowDialog" @close="close()" @loadData="loadData()" />
</template>
<script lang="ts" setup>
import logo from '../../assets/image/logo.png'
import HouseDialog from "@/layouts/Home/Houses/HomeHouseDialog.vue";
import { ref } from "vue";
const isShowDialog = ref(false);
const addHouses = () => {
  isShowDialog.value = true
}
const close = () => {
  isShowDialog.value = false
}
</script>

<style>

</style>