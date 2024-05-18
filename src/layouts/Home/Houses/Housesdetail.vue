  <!-- <template>
    <div style="min-height: 100vh;height:100%;" class="px-10 mt-10">
        <v-row>
            <v-col cols="8">
                <v-card elevation="0">
                    <v-card-item style="width: 100%;">
                        <span class="text-center" style="font-size: 30px;">
                            Chi tiết nhà trọ
                        </span>
                    </v-card-item>
                    <v-card-text class="d-flex" style="min-height: 300px;">
                        <v-img :src="item.fruitImg"
                            style="max-width: 400px;width: 100%;max-height: 400px;height: 100%;">
                            <span v-if="item.photos !== '0'"
                                style="font-size: 24px;float: right;min-width: 70px;min-height: 30px;padding: 2px;background-color: #ECF7ED;text-align: center;color: #37833B;font-weight: 500;font-family: Times New Roman;">
                                {{ item.photos }}
                            </span></v-img>
                        <div class="text-h5 ml-10 w-100" style="display: flex;flex-direction: column;">
                            <div>
                                <span style="color: #008000;">{{ item.fruitName }}</span>
                                <div
                                    style="background-color: #E7E7E7;border-radius: 4px;max-height: 50px;height: 100%;display: flex;align-items: center;max-width: 100%;width: 100%;justify-content: space-between;padding: 4px;">
                                    <span :class="{ 'discounted': item.discount !== '0' }"
                                        style="width: 100%; max-width: 200px;padding: 8px;border-radius: 2px;display: flex; justify-content: center;align-items: center;color: #333;margin-right: 5px;">
                                        {{ `${formatPrice(item.fruitPrice)} đ` }}</span>
                                    <span v-if="item.discount !== '0'" style="color: red;font-size: 30px;">{{
                                        `${formatPrice(item.priceDiscount)} đ` }}</span>
                                </div>
                            </div>
                            <div class="mt-10"
                                style="display: flex;justify-content: space-between;align-items: center;">
                                <div style="display: flex;height: 100%;align-items: center;">
                                    <div style="font-size: 14px;" class="mr-4">
                                        Số lượng
                                    </div>
                                    <v-text-field @input="handleDiscountInput" v-model="count" type="number" min="1"
                                        max="100" style="max-width: 50px;border: 1px;"
                                        variant="underlined"></v-text-field>
                                </div>
                                <v-btn size="small" color="#EF6C00">Quay lại</v-btn>
                                <v-btn size="small" color="primary">Nhà trọ yêu thích</v-btn>
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-item>
                        {{ item.fruitDescription }}
                    </v-card-item>

                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import { useHouse } from '@/layouts/Admin/House/house.service';
import router from '@/router';
import { onMounted, ref } from 'vue';
const { getHouse } = useHouse();
const item = ref<any | ''>('');
const count = ref(1);
const handleDiscountInput = (event: InputEvent) => {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10);
    if (inputValue > 100) {
        count.value = 100;
    }
}
onMounted(async () => {
    const id = router.currentRoute.value.params.id;
    const res = await getHouse(id);
    item.value = res.data;
})
</script>


<style scoped>
.discounted {
    text-decoration: line-through;
}
</style> -->
<template>
  <v-container class="min-h-screen bg-[#F4F5F5]">
    <v-row>
      <v-col :cols="17" class="pl-2 mt-4 pr-24 min-h-screen">
        <v-card class="rounded-lg" elevation="0">
          <v-row>
            <v-col :cols="24">
              <div class="text-2xl">
                {{ item.HouseName }}
              </div>
              <div class="flex w-full justify-between mt-5 text-xl">
                <div class="min-w-fit">
                  <div>
                    <v-icon
                      class="rounded-full mr-2 text-2xl p-2 bg-[#00B14F] text-gray-100">ri-exchange-dollar-line</v-icon>
                    Mức lương
                  </div>
                  <div class="flex w-full justify-center items-center mt-3">
                    {{ item.salaryPrice }}
                  </div>
                </div>
                <div class="min-w-fit">
                  <div>
                    <v-icon class="rounded-full mr-2 text-2xl text-gray-100 p-2 bg-[#00B14F]">ri-map-pin-5-fill</v-icon>
                    Khu vực
                  </div>
                  <div class="flex w-full justify-center items-center mt-3">
                    {{ item.cityName }}
                  </div>
                </div>
                <div class="min-w-fit">
                  <div>
                    <v-icon class="rounded-full mr-2 text-2xl p-2 bg-[#00B14F] text-gray-100">ri-hourglass-fill</v-icon>
                    Kinh nghiệm nhà trọ
                  </div>
                  <div class="flex w-full justify-center items-center mt-3">
                    {{ item.workexperienceName }}
                  </div>
                </div>
              </div>
              <v-row class="mt-5 h-14 flex items-center">
                <v-col :cols="18">
                  <v-btn v-if="isAuthenticated" @click="dialog = true, currentItem = item" class="w-full"
                    color="#00B14F" large rounded>Đăng tin nhà trọ</v-btn>
                  <v-btn v-else @click="open4" class="w-full" color="#00B14F" large rounded>Đăng tin nhà trọ</v-btn>
                </v-col>
                <v-col :cols="6">
                  <div class="float-right bg-gray-200 text-lg p-2 rounded">
                    Hạn nộp hồ sơ: {{ item.expirationDate }}
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="rounded-lg mt-5 mb-10" elevation="0">
          <v-row>
            <v-col :cols="24">
              <v-icon class="rounded-full mr-2 text-2xl p-2 bg-[#00B14F] text-gray-100">ri-information-line</v-icon>
              <span>Chi tiết tuyển dụng</span>
            </v-col>
            <v-col :cols="24" class="mt-5 h-full">
              <v-text class="font-bold mb-4" style="font-size: 24px;">Mô tả bài đăng</v-text>
              <p class="inline-block">
                {{ item.HouseDescription }}
              </p>
            </v-col>
            <v-col :cols="24" class="mt-5 h-full">
              <v-text class="font-bold mb-4" style="font-size: 24px;">Yêu cầu bài đăng</v-text>
              <p class="inline-block">
                {{ item.requestHouse }}
              </p>
            </v-col>
            <v-col :cols="24" class="mt-5 h-full">
              <v-text class="font-bold mb-4" style="font-size: 24px;">Quyền lợi được hưởng</v-text>
              <p class="inline-block">
                {{ item.benefitsHouse }}
              </p>
            </v-col>
            <v-col :cols="24" class="mt-5 h-full">
              <v-text class="font-bold mb-4" style="font-size: 24px;">Địa điểm nhà trọ</v-text>
              <p class="block">
                {{ item.addressHouse }}
              </p>
            </v-col>
            <v-col :cols="24" class="mt-5 h-full">
              <v-btn color="#00B14F" v-if="isAuthenticated" @click="dialog = true, currentItem = item">Đăng tin nhà trọ</v-btn>
              <v-btn color="#00B14F" v-else @click="open4">Đăng tin nhà trọ</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="7" class="pr-2">
        <div class="mt-4 mb-10">
          <v-card class="text-xl" class="rounded-lg" elevation="0">
            <span>Nhà trọ liên quan</span>
          </v-card>
          <v-card class="mt-5 rounded-lg" elevation="0" v-if="total > 0">
            <v-row v-for="i in HouseDatas" :key="i" class="border mt-2 mb-4 rounded">
              <v-col :cols="24" class="flex items-center h-30 w-full">
                <v-img :src="i.companyLogo" class="max-h-20 max-w-20 ml-2" contain />
                <div class="h-full w-full ml-2 mt-4">
                  <v-row>
                    <v-col :cols="24">
                      <router-link :to="`/homedetail/${i.HouseId}`" target="_blank"
                        class="cursor-pointer hover:text-indigo-500 hover:underline">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <span v-bind="attrs" v-on="on">{{ i.HouseName }}</span>
                          </template>
                          <span>{{ i.HouseName }}</span>
                        </v-tooltip>
                      </router-link>
                    </v-col>
                    <v-col :cols="24">
                      <router-link :to="`/company/${i.employersId}`"
                        class="uppercase cursor-pointer hover:text-blue hover:underline" target="_blank">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <span v-bind="attrs" v-on="on">{{ i.companyName }}</span>
                          </template>
                          <span>{{ i.companyName }}</span>
                        </v-tooltip>
                      </router-link>
                    </v-col>
                    <div class="flex items-center">
                      <div class="mr-2 bg-slate-100 p-1 rounded">
                        {{ i.salaryPrice }}vnđ
                      </div>
                      -
                      <div class="ml-2 bg-slate-100 p-1 rounded">
                        {{ i.cityName }}
                      </div>
                    </div>
                  </v-row>
                </div>
              </v-col>
              <v-col :cols="24">
                <v-btn type="success" class="m-2 float-end" plain v-if="isAuthenticated"
                  @click="dialog = true, currentItem = i">Đăng tin</v-btn>
                <v-btn type="success" class="m-2 float-end" plain v-else @click="open4">Đăng tin</v-btn>
              </v-col>
            </v-row>
          </v-card>
          <div v-else class="w-full flex justify-center">
            <span>Không có dữ liệu</span>
          </div>
          <div class="w-full flex justify-center mt-5">
            <v-btn v-if="total > 0" large outlined color="blue" @click="seeMore">
              <v-icon left>ri-eye-line</v-icon>
              Xem thêm
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <RecruimentDialog :dialog="dialog" @close="dialog = false" :currentItem="currentItem" />
  </v-container>
</template>
<script lang="ts" setup>
import RecruimentDialog from '../Recruitment/RecruimentDialog.vue';
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useHouseHome } from '../Services/home.service';
const { isAuthenticated } = useAuthService();
import { useAuthService } from '@/pages/Auth/Services/auth.service';
import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from '@/common/contant/contants';
import { useLoadingStore } from '@/store/loading';
const { getById, fetchRelatedHouses } = useHouseHome();
const dialog = ref(false);
const currentItem = ref([]);
const loading = useLoadingStore();
const HouseDatas = ref<any | undefined>([]);
const item = ref<any | ''>('');
const total = ref<number>(0);
const id = ref<any | undefined>('');
const page = ref<number>(10);
const seeMore = async () => {
  console.log(page.value += 5);
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.limit = page.value;
  await searchData();

}
onMounted(async () => {

  loading.setLoading(true);
  id.value = router.currentRoute.value.params.id;
  const res = await getById(id.value);
  item.value = res;
  searchData();
  loading.setLoading(false);
})
const searchData = async () => {
  loading.setLoading(true);
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.page = 1;
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.cityId = item.value.cityId;
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.areaId = item.value.areaId;
  const data = await fetchRelatedHouses(id.value);
  HouseDatas.value = data?.items;
  total.value = HouseDatas.value.length;
  loading.setLoading(false);

};

</script>

<style></style>