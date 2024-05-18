<template>
  <v-app>
    <NarbarVue />
    <Slidebar />
    <v-row>
      <v-card cols="8" sm="12" md="12" lg="4" class="custom-card" style="top: 24px; border-radius: 4px;">
        <v-row class="ml-3 mt-2">
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select label="Khu vực" v-model="AreasId" :items="itemsListAreas" item-title="areasName" item-value="areasId"
              density="compact" variant="outlined"></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select label="Thành Phố" v-model="cityId" :items="itemsListCitys" item-title="cityName" item-value="cityId"
              density="compact" variant="outlined"></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select density="compact" label="Giá" :items="prices" item-title="text" item-value="value" variant="outlined">
              <v-option>
              </v-option>
            </v-select>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-select density="compact" label="Diện tích" variant="outlined">
              <v-option>
              </v-option>
            </v-select>
          </v-col>
          <v-row class="d-flex align-center justify-center ma-2">
            <div style="width: 34%; display: flex; align-items: center;">
              <v-text-field clearable density="compact" variant="solo-filled" label="Tìm kiếm" @change="searchData()"
                v-model="search" style="background-color: #F0F0F0; width: 15%;border-radius: 20px !important;"
                prepend-inner-icon="mdi-magnify" single-line flat hide-details rounded></v-text-field>
            </div>
          </v-row>
        </v-row>
        <v-row class="mr-3 ml-3 mt-1">
          <v-col class="d-flex flex-column justify-center align-center" v-for="item in houses" :key="item" cols="12"
            sm="6" md="4" lg="3" style="margin-top: 16px;">
            <v-card hover variant="flat" style="min-height: 480px;width: 350px;" class="mb-3 my-card">
              <v-img class="mx-auto ml-4 mr-4 mt-1" width="320px" height="224px" :src="item.photos"></v-img>
              <v-card-text class="mx-auto ml-4 mr-4"
                style="max-width: 350px;font-size: 20px;line-height: 24px; height: 90px;font-family: Inter, sans-serif;;color: #19191D;">
                {{ item.housesName }}</v-card-text>
              <v-card-text class="mx-auto ml-4 mr-4"
                style="font-family: Inter, sans-serif;;color:#000000;max-width: 350px;font-size: 24px;font-weight: 700;padding: auto;height: 36px;">
                {{ item.price }}
              </v-card-text>
              <v-card-text class="mx-auto ml-4 mr-4 mt-1"
                style="margin-top: 8px;;height: 60px;font-size: 16px;font-family: Inter, sans-serif;;color: #787885;">{{
                  item.title }}</v-card-text>
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
  <HouseDialog v-model="isShowDialog" @close="close()" @loadData="loadData()" />
</template>
<script lang="ts" setup>
import Slidebar from "@/components/Application/Slidebar.vue";
import Footer from "@/components/Application/Footer.vue";
import { reactive, ref } from "vue"
import { useLoadingStore } from "@/store/loading";
import HouseDialog from "@/layouts/Admin/House/HouseDialog.vue";
import NarbarVue from "@/components/Application/Narbar.vue";
import { onMounted } from "vue";
import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from "@/common/contant/contants";
import { useHouse } from "@/layouts/Admin/House/house.service";
import { useFavorites } from "@/layouts/Home/Favorites/Service/favorite.service";
import { useArea } from "@/layouts/Admin/Area/Services/area.service";
import { useCity } from "@/layouts/Admin/City/Services/city.service";
const loading = useLoadingStore();
const isShowDialog = ref(false);
const totalItems = ref<Number | undefined>(0);
const total = ref<number>(0);
const search = ref();
const houses = ref<any | undefined>([]);
const { citysItem } = useCity()
const { areasItem } = useArea()
const itemsListCitys = ref([]);
const itemsListAreas = ref([]);
const { fetchHouse, } = useHouse();
const prices=reactive([
  {
      value:'từ thấp đền cao',text:'từ thấp đền cao'
  },
  {
      value:'từ cao đến thấp',text:'từ cao đến thấp'
  }
])
let page = ref(1);
let lengthPage = ref<Number | undefined>(100);
const { fetchfavorites, changefavorites } = useFavorites();
const liked = ref(true);
const AreasId = ref(null);
const cityId = ref(null);

const searchData = async () => {
  loading.setLoading(true);
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.keyword = search.value;
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.page = 1;
  // const data = await searchJobHome();
  // houses.value = data?.items;
  // totalItems.value = data?.totalItems;
  // lengthPage.value = Math.ceil(data?.totalItems / 10) * 10;
  // total.value = data?.totalItems;
  // if (isAuthenticated.value) {
  //   // loadFavourites();
  // }
  loading.setLoading(false);

};
const loadlike = async () => {
  const favorites = await fetchfavorites();
  // favorites.value = favorites?.data;
}
onMounted(() => {
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.cityId = "";
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.areaId = "";
  loadHouse();
  loadData();
});

const loadData = async () => {
  const res = await citysItem()
    if (res) {
        itemsListCitys.value = res.items;
        console.log(res.items);
        console.log(itemsListCitys.value);
    }
    const res1 = await areasItem()
    if (res1) {
        itemsListAreas.value = res1.items;
        console.log(res1.items);
        console.log(itemsListAreas.value);
    }
  loading.setLoading(true);
  loading.setLoading(false);
};
const close = () => {
  isShowDialog.value = false
}
const loadHouse = async () => {
  loading.setLoading(true);
  const data = await fetchHouse();
  houses.value = data?.data;
  totalItems.value = data?.totalItems;
  lengthPage.value = Math.ceil(data?.totalItems / 12) * 12;
  total.value = data?.totalItems;
};

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
  overflow: hidden;
}

.my-card-text {
  overflow-y: hidden;
}
</style>