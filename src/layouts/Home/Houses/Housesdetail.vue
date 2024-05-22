<template>
  <v-app>
    <NarbarVue />
    <v-card class="mt-12">
      <v-card style="border-radius: 10px;" shadow="never" class="mt-12">
        <v-row>
          <v-col cols="8" md="4" style="display: flex; align-items: center;padding: 10px;">
            <v-card class="d-flex flex-column" flat outlined tile>
              <v-img v-if="item.photos !== null" object-fit="cover" width="800" height="450" :src="item.photos"></v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="6">
              <v-card-title class="pb-0">
                <v-row>
                  <v-col>
                    <v-card-title class="inline-block font-weight-bold" style=" font-size: 20px">
                      {{ item.housesName }}
                    </v-card-title>
                  </v-col>
                  <v-divider></v-divider>
                  <v-col cols="6">
                    <v-icon color="green" style="font-size: 30px;">mdi-home-city</v-icon>
                    <span class="subtitle"><b>Khu vực:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.areasName }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="blue" style="font-size: 30px;">mdi-clock-outline</v-icon>
                    <span class="subtitle"><b>Ngày đăng:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{
                        item.dateSubmitted === undefined ||
                          item.dateSubmitted === "" ||
                          item.dateSubmitted === null
                          ? ""
                          : formatDatetime(item.dateSubmitted)
                      }}
                      </b>
                    </span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-icon color="purple" style="font-size: 30px;">mdi-city</v-icon>
                    <span class="subtitle"><b>Thành phố:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.cityName }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="orange" style="font-size: 30px;">mdi-account</v-icon>
                    <span class="subtitle"><b>Người đăng:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.usersName }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="teal" style="font-size: 30px;">mdi-home-outline</v-icon>
                    <span class="subtitle"><b>Loại phòng:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.roomstyleName }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="red" style="font-size: 30px;">mdi-map-marker</v-icon>
                    <span class="subtitle"><b>Địa chỉ:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.addressHouses }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="brown" style="font-size: 30px;">mdi-ruler-square</v-icon>
                    <span class="subtitle"><b>Diện tích:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.acreage }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="cyan" style="font-size: 30px;">mdi-sofa</v-icon>
                    <span class="subtitle"><b>Nội thất:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.interior }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="deep-purple" style="font-size: 30px;">mdi-phone</v-icon>
                    <span class="subtitle"><b>Số điện thoại:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.contact }}</b>
                    </span>
                  </v-col>
                  <v-col cols="6">
                    <v-icon color="lime" style="font-size: 30px;">mdi-file-document-outline</v-icon>
                    <span class="subtitle"><b>Mô tả:</b></span>
                    <span class="text-subtitle-1">
                      <b style=" font-size: 20px">{{ item.title }}</b>
                    </span>
                  </v-col>
                  <v-col cols="12">
                    <v-icon color="blue" style="font-size: 30px;">mdi-currency-usd</v-icon>
                    <span class="subtitle"><b>Giá:</b></span>
                    <br />
                    <span class="text-subtitle-1">
                      <span style="font-size: 25px; color: rgb(246, 10, 10)" class="inline-block font-weight-bold">{{
                        item.price }}đ/tháng</span>
                    </span>
                  </v-col>
                </v-row>
              </v-card-title>
            <v-card-actions>
              <v-btn class="text-capitalize" variant="outlined" 
                style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700;font-size: 20px;">Quay
                <span class="text-lowercase ml-1">lại</span> 
                <v-icon class="ml-2" style="height: 40px; font-size: 20px;">mdi-arrow-left</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <v-row class="float-end mt-4">
      <Footer />
    </v-row>
    <HomeHouseDialog v-model="isShowDialog" @close="close()" @loadData="loadData()" />
  </v-app>
</template>
<script lang="ts" setup>
import NarbarVue from "@/components/Application/Narbar.vue";
import Footer from "@/components/Application/Footer.vue";
import HomeHouseDialog from '@/layouts/Home/Houses/HomeHouseDialog.vue';
import router from '@/router';
import { onMounted, ref } from 'vue';
const { isAuthenticated } = AuthStore();
import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from '@/common/contant/contants';
import { useLoadingStore } from '@/store/loading';
import { useHome } from '../Services/home.service';
import { AuthStore } from '@/Auth/authStore';
import { showErrorNotification } from '@/common/helper/helpers';
const { getById, fetchHome } = useHome();
const loading = useLoadingStore();
const houses = ref<any | undefined>([]);
const item = ref<any | undefined>({});
const total = ref<number>(0);
const id = ref<any | undefined>('');
const page = ref<number>(10);
const isShowDialog = ref(false);
const checkRole = ref(false)
const formatDatetime = (date) => {
  const dateObject = new Date(date);
  const ngay = dateObject.getDate().toString().padStart(2, "0");
  const thang = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const nam = dateObject.getFullYear();
  const ngayThangNam = `${thang}/${ngay}/${nam}`;
  return ngayThangNam;
};

const seeMore = async () => {
  console.log(page.value += 5);
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.limit = page.value;
  await searchData();

}
const close = () => {
  isShowDialog.value = false
}
onMounted(async () => {

  loading.setLoading(true);
  id.value = router.currentRoute.value.params.id;
  const res = await getById(id.value);

  console.log("ABC   " + res);
  item.value = res;
  searchData();
  loading.setLoading(false);
})
const searchData = async () => {
  loading.setLoading(true);
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.page = 1;
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.cityId = item.value.cityId;
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.areaId = item.value.areaId;
  const data = await fetchHome();
  houses.value = data?.items;
  total.value = houses.value.length;
  loading.setLoading(false);

};

</script>

<style></style>