<template>
  <v-app-bar height="88px" elevation="1" class="d-flex">
    <div class="d-flex align-center" style="width: 33%;">
      <v-col cols="4">
        <v-img height="50px" :src="logo" style="width: 200px;"></v-img>
      </v-col>
      <router-link to="/" style="margin-left: 12px;font-size: 18px; font-family: Inter, sans-serif; " v-bind="props"
        class="hoverable-list-item">Trang Chủ </router-link>
      <!-- <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <p style="margin-left: 12px;font-family: Inter, sans-serif;font-size: 18px; " v-bind="props">Bất động sản</p>
        </template>
<v-list class="ma-2">
  <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login' })" style="cursor: pointer;">
    <v-list-item-title style="font-size: 18px;">
      <v-list-item-icon>
        <v-icon class="mr-2" color="primary" @click="this.$router.push({ name: 'login' })">mdi-city</v-icon>
      </v-list-item-icon>
      Căn hộ,chung cư
    </v-list-item-title>
  </v-list-item>
  <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })" style="cursor: pointer;">
    <v-list-item-title style="font-size: 18px;">
      <v-list-item-icon>
        <v-icon class="mr-2" color="red" @click="this.$router.push({ name: 'login_page' })">mdi-home</v-icon>
      </v-list-item-icon>
      Nhà trọ,phòng trọ
    </v-list-item-title>
  </v-list-item>
</v-list>
</v-menu> -->
    </div>
    <v-row style="width: 33%; " class="d-flex align-center justify-space-between">
      <v-col cols="2">

      </v-col>
      <v-col cols="10" style="display: flex; align-items: center;">
        <v-row cols="4">
          <v-btn v-model="checkRole" class="text-capitalize" variant="outlined" @click="addHouses()"
            style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700; margin-left: auto;margin-right: 16px;">Đăng
            <span class="text-lowercase ml-1">tin</span> <v-icon class="ml-2"
              style="height: 40px;">mdi-cloud-upload</v-icon>
          </v-btn>
        </v-row>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn class="text-capitalize" variant="outlined" v-bind="props"
              style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700; margin-left: auto;margin-right: 16px;">Thông
              <span class="text-lowercase ml-1">báo</span> <v-icon class="ml-2" style="height: 40px;">mdi-bell</v-icon>
            </v-btn>
          </template>
          <v-card width="300px" class="pa-0 mt-4">
            <v-card-text>
              <v-scrollbar max-height="300px">
                <v-list v-if="total_notifications > 0">
                  <v-list-item v-for="item in notifications" :key="item">
                    {{ item.message }}
                  </v-list-item>
                </v-list>
                <div v-else class="text-2xl text-center">
                  Không có thông báo
                </div>
              </v-scrollbar>
            </v-card-text>
            <v-card-actions class="justify-space-between">
              <v-btn text>Xem tất cả</v-btn>
              <v-btn text>Đọc tất cả</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
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
            <v-list-item class="hoverable-list-item" @click="handleAccountInfoClick" style="cursor: pointer;">
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon class="mr-2" color="secondary">mdi-account</v-icon>
                </v-list-item-icon>
                Thông tin tài khoản
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="hoverable-list-item" @click="handleManagePostsClick" style="cursor: pointer;">
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon style="width: 14px; height: 12.85px;" color="blue">mdi-cloud-upload</v-icon>
                </v-list-item-icon>
                Quản lý bài đăng
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
              style="cursor: pointer;">
              <v-list-item-icon>
                <v-icon class="mr-2">mdi-logout</v-icon>
              </v-list-item-icon>
              Đăng xuất
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
  <HomeHouseDialog v-model="isShowDialog" @close="close()" />
  <ConfirmLogout :dialog="dialog" @close="dialog = false" @Logout="Logout" />
</template>
<script lang="ts" setup>
import logo from '../../assets/image/logo.png'
import ConfirmLogout from '@/components/Confirmations/Confirmations.vue'
import HomeHouseDialog from '@/layouts/Home/Houses/HomeHouseDialog.vue';
import { ref, onMounted } from "vue";
import { AuthStore } from '../../Auth/authStore';
import { showErrorNotification } from '@/common/helper/helpers';
import { useLoadingStore } from '@/store/loading';
import { useRouter } from 'vue-router';
const dialog = ref(false);
const router = useRouter();
const loading = useLoadingStore();
const { isAuthenticated, logout } = AuthStore();
const search = ref("");
onMounted(() => {
  checkQuyen()
});

const Logout = async () => {
  const res = await logout();
  if (res) {
    dialog.value = false;
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }
}
const isShowDialog = ref(false);
const checkRole = ref(false)
const addHouses = () => {
  if (isAuthenticated) {
    isShowDialog.value = true
  } else {
    showErrorNotification('Vui lòng đăng nhập');
  }
}
const checkQuyen = () => {
  if (localStorage.getItem("ROLE") === "User") {
    checkRole.value = false
  }
  if (localStorage.getItem("ROLE") === "Admin") {
    checkRole.value = true
  }
}
const handleAccountInfoClick = () => {
  if (isAuthenticated){
    // Thực hiện chuyển hướng đến trang thông tin tài khoản
    router.push({ name: 'profile' });
  } else {
    showErrorNotification('Vui lòng đăng nhập');
  }
};

const handleManagePostsClick = () => {
  if (isAuthenticated) {
    // Thực hiện chuyển hướng đến trang quản lý bài đăng
    router.push({ name: 'homehouse' });
  } else {
    showErrorNotification('Bạn không có quyền truy cập trang này');
  }
};

// const logout = async () => {

// }
const close = () => {
  isShowDialog.value = false
}
</script>

<style></style>