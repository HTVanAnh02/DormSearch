<template>
  <v-app>
    <v-app-bar height="88px" elevation="1" class="d-flex">
      <div class="d-flex align-center" style="width: 33%;">
        <v-col cols="4">
          <v-img height="50px" src="../assets/image/logo.png" style="width: 200px;"></v-img>
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
                  <v-icon class="mr-2"  color="primary" @click="this.$router.push({ name: 'login_page' })">mdi-city</v-icon>
                </v-list-item-icon>
                Căn hộ,chung cư
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
              style="cursor: pointer;">
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon class="mr-2"  color="red"  @click="this.$router.push({ name: 'login_page' })">mdi-home</v-icon>
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
      <div style="width: 33%; " class="d-flex align-center justify-space-between">
        <div class="ml-12">
          <div class="ml-12">
            <div class="ml-6">
              <v-btn class="text-capitalize ml-12 " elevation="1" style="color: #2264D1;font-weight: 700;">
                Thông
                <span class="text-lowercase">báo</span>
                <v-icon class="ml-2" style="height: 40px;">mdi-bell</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <v-btn class="text-capitalize" variant="outlined"
          style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700; margin-left: auto;margin-right: 16px;">Đăng
          <span class="text-lowercase ml-1">tin</span> <v-icon class="ml-2"
            style="height: 40px;">mdi-cloud-upload</v-icon></v-btn>
        <div style="display: flex; align-items: center;">
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
              <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
                style="cursor: pointer;">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon class="mr-2" color="secondary"
                      @click="this.$router.push({ name: 'login_page' })">mdi-account</v-icon>
                  </v-list-item-icon>
                  Thông tin tài khoản
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="hoverable-list-item" @click="this.$router.push({ name: 'login_page' })"
                style="cursor: pointer;">
                <v-list-item-title>
                  <v-list-item-icon>
                    <v-icon style="width: 14px; height: 12.85px;" color="red">mdi-heart-outline</v-icon>
                  </v-list-item-icon>
                  Tin yêu thích
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
        </div>
      </div>
    </v-app-bar>
    <Slidebar />
    <v-row>
      <v-card cols="8" sm="12" md="12" lg="4" class="custom-card" style="top: 24px; border-radius: 4px;">
        <v-row class="ml-3 mt-2">
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select v-model="cityId" density="compact" label="Khu vực" variant="outlined">
              <v-option v-for="item in itemsListCitys" :key="item.cityId" :value="item.cityId" :label="item.cityName" />
            </v-select>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select v-model="cityId" density="compact" label="Thành Phố" variant="outlined">
              <v-option>
              </v-option>
            </v-select>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select v-model="cityId" density="compact" label="Giá" variant="outlined">
              <v-option>
              </v-option>
            </v-select>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select v-model="cityId" density="compact" label="Diện tích" variant="outlined">
              <v-option>
              </v-option>
            </v-select>
          </v-col>
        </v-row>
        <v-row class="mr-3 ml-3 mt-1">
          <v-col class="d-flex flex-column justify-center align-center" v-for="item in products" :key="item" cols="12"
            sm="6" md="4" lg="3" style="margin-top: 16px;">
            <v-card hover variant="flat" style="min-height: 480px;width: 350px;" class="mb-3 my-card">
              <v-img class="mx-auto ml-4 mr-4 mt-1" width="320px" height="224px" :src="item.image"></v-img>
              <v-card-text class="mx-auto ml-4 mr-4"
                style="max-width: 350px;font-size: 20px;line-height: 24px; height: 90px;font-family: Inter, sans-serif;;color: #19191D;">{{
                  item.name }}</v-card-text>
              <v-card-text class="mx-auto ml-4 mr-4"
                style="font-family: Inter, sans-serif;;color:#000000;max-width: 350px;font-size: 24px;font-weight: 700;padding: auto;height: 36px;">
                {{ item.price }}
              </v-card-text>
              <v-card-text class="mx-auto ml-4 mr-4 mt-1"
                style="margin-top: 8px;;height: 60px;font-size: 16px;font-family: Inter, sans-serif;;color: #787885;">{{
                  item.description }}</v-card-text>
              <v-row style="margin-top: 5px;margin-left: 6px;" class="mb-4">
                <v-col class="ml-3 mt-2" cols="5" style="display: flex;">
                  <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
                  <v-icon v-if="item.feedback < 5 && item.feedback > 4" color="#FB8200" size="x-small">mdi
                    mdi-star-half</v-icon>
                  <v-icon v-else color="#FB8200" size="x-small" class="mr-2">mdi mdi-star</v-icon>
                  <span class="mb-8"
                    style="font-size: 14px; width: 88px; height: 32px; color: #5E6366; font-family: Roboto, sans-serif; font-weight: bold;">4.05</span>
                </v-col>
                <v-col class="text-right" cols="6">
                  <v-btn class="text-capitalize"
                    style="width: 88px; height: 32px; margin-right: 6px;font-family: Inter, sans-serif;font-size: 14px;"
                    color="#2979FF" size="small" variant="outlined">
                    <v-icon style="width: 14px; height: 12.85px;">mdi-heart-outline</v-icon>
                    <div style="margin-left: 7px;">like</div>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <div class="float-end mt-12">
      <v-pagination background layout="prev, pager, next" :total="totalItems" v-model="page" prev-text
        v-model:current-page="page" />
    </div>
    <v-row class="float-end mt-4">
      <Footer />
    </v-row>
  </v-app>
</template>

<script lang="ts" setup>
import Slidebar from "@/components/Application/Slidebar.vue";
import Footer from "@/components/Application/Footer.vue";
import { reactive, ref } from "vue"
import { useLoadingStore } from "@/store/loading";
const loading = useLoadingStore();
const dialog = ref(false);
const itemsListCitys = ref<any | null>([]);
const itemsListSalarys = ref<any | null>([]);
const itemsListFormofworks = ref<any | null>([]);
const itemsListProfessions = ref<any | null>([]);
const itemsListWorkexperienceks = ref<any | null>([]);
const search = ref("");
const cityId = ref("");
const priceId = ref("");
const acreageId = ref("");
const roomstyleId = ref("");
const totalItems = ref<Number | undefined>(0);
const total = ref<number>(0);
let page = ref(1);
let lengthPage = ref<Number | undefined>(100);
const liked = ref(true);
const loadData = async () => {
  loading.setLoading(true);
  // const itemcitys = await cityServiceApi.itemsList();
  // itemsListCitys.value = itemcitys.data;
  loading.setLoading(false);
};
const products = reactive([
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  {
    image: "https://cloud.muaban.net/images/thumb-detail/2024/04/16/350/34e4623d5a4e4e41964fc52d51954780.jpg",
    name: "Cho thuê phòng trọ đẹp kiểu CCMN 28m2 full đồ tại đường Cầu Giấy, HN",
    description: "🏡 Địa chỉ: Số 203 ngõ 132/46, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội ",
    price: "5.200.000 đ/tháng",
    cool: false,
    sale: 36,
    feedback: 4.7
  },
  
]);
</script>

<style scop>
.hoverable-list-item:hover {
    background-color: #f5f5f5;
}

.custom-card {
  border-radius: 8px;
  /* Điều chỉnh giá trị theo mong muốn để có độ bo tròn nhẹ */
}

.custom-col {
  width: 136px;
  height: 36px;
  position: relative;
  top: 16px;
  /* Khoảng cách từ v-col lên đến v-card */
  margin: 0 16px;
  /* Khoảng cách từ v-col đến v-card bên trái và bên phải */
}

.custom-row {
  margin-bottom: 16px;
  /* Khoảng cách giữa các dòng (nếu cần) */
}

.custom-col {
  width: 136px;
  height: 36px;
  position: relative;
  top: 40px;
  left: 16px;
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

.custom-shadow {
  margin-top: 10px;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.2);
}

.my-card {
  max-height: 200px;
  /* Đặt chiều cao tối đa của thẻ */
  overflow: hidden;
  /* Ẩn phần nội dung vượt quá chiều cao */
}

.my-card-text {
  overflow-y: hidden;
}
</style>