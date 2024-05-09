<!-- <template>
    <div class="min-h-screen bg-[#F4F5F5]">
      <v-row>
        <v-col cols="17" class="pl-2 mt-4 pr-24 min-h-screen">
          <v-card style="border-radius: 10px;" outlined>
            <v-row>
              <v-col cols="24">
                <div class="text-2xl">
                  {{ item.jobName }}
                </div>
                <div class="flex w-full justify-between mt-5 text-xl">
                  <div class="min-w-fit">
                    <div>
                      <i class="ri-exchange-dollar-line rounded-3xl mr-2 text-2xl p-2 bg-[#00B14F] text-gray-100"></i>
                      Mức lương
                    </div>
                    <div class="flex w-full justify-center items-center mt-3">
                      {{ item.salaryPrice }}
                    </div>
                  </div>
                  <div class="min-w-fit">
                    <div>
                      <i class="ri-map-pin-5-fill rounded-3xl mr-2 text-2xl text-gray-100 p-2 bg-[#00B14F]"></i>
                      Khu vực
                    </div>
                    <div class="flex w-full justify-center items-center mt-3">
                      {{ item.cityName }}
                    </div>
                  </div>
                  <div class="min-w-fit">
                    <div>
                      <i class="ri-hourglass-fill rounded-3xl mr-2 text-2xl p-2 bg-[#00B14F] text-gray-100"></i>
                      Kinh nghiệm làm việc
                    </div>
                    <div class="flex w-full justify-center items-center mt-3">
                      {{ item.workexperienceName }}
                    </div>
                  </div>
                </div>
                <v-row class="mt-5 h-14 flex items-center">
                  <v-col cols="18">
                    <v-btn v-if="isAuthenticated" @click="dialog = true, currentItem = item" class="w-full" style="border-radius: 10px;" color="#00B14F" large>Ứng tuyển công việc</v-btn>
                    <v-btn v-else @click="open4" class="w-full" style="border-radius: 10px;" color="#00B14F" large>Ứng tuyển công việc</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <div class="float-right bg-gray-200 text-lg p-2 rounded">
                      Hạn nộp hồ sơ: {{ item.expirationDate }}
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
          <v-card style="border-radius: 10px;" outlined class="mt-5 mb-10">
            <v-row>
              <v-col cols="24">
                <i class="ri-information-line rounded-3xl mr-2 text-2xl p-2 bg-[#00B14F] text-gray-100"></i>
                <span>Chi tiết tuyển dụng</span>
              </v-col>
              <v-col cols="24" class="mt-5 h-full">
                <v-text tag="b" style="margin-bottom: 100px; font-size: 24px;">Mô tả công việc</v-text>
                <p size="large" tag="p" class="inline-block">{{ item.jobDescription }}</p>
              </v-col>
              <v-col cols="24" class="mt-5 h-full">
                <v-text tag="b" style="margin-bottom: 100px; font-size: 24px;">Yêu cầu công việc</v-text>
                <p size="large" tag="p" class="inline-block">{{ item.requestJob }}</p>
              </v-col>
              <v-col cols="24" class="mt-5 h-full">
                <v-text tag="b" style="margin-bottom: 100px; font-size: 24px;">Quyền lợi được hưởng</v-text>
                <p size="large" tag="p" class="inline-block">{{ item.benefitsJob }}</p>
              </v-col>
              <v-col cols="24" class="mt-5 h-full">
                <v-text tag="b" style="margin-bottom: 100px; font-size: 24px;">Địa điểm làm việc</v-text>
                <p size="large" tag="p" class="block">{{ item.addressJob }}</p>
              </v-col>
              <v-col cols="24" class="mt-5 h-full">
                <v-btn color="#00B14F" v-if="isAuthenticated" @click="dialog = true, currentItem = item">Ứng tuyển công việc</v-btn>
                <v-btn color="#00B14F" v-else @click="open4">Ứng tuyển công việc</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="7" class="pr-2">
          <!-- Nội dung cột thứ hai -->
        <!-- </v-col>
      </v-row>
      <RecruitmentDialog :dialog="dialog" @close="dialog = false" :currentItem="currentItem" />
    </div>
  </template> --> -->
  <template>
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
                            <span v-if="item.discount !== '0'"
                                style="font-size: 24px;float: right;min-width: 70px;min-height: 30px;padding: 2px;background-color: #ECF7ED;text-align: center;color: #37833B;font-weight: 500;font-family: Times New Roman;">
                                {{ item.discount }}% OFF
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
                                <v-btn size="small" color="#EF6C00">Mua ngay</v-btn>
                                <v-btn size="small" color="primary">Thêm giỏ hàng</v-btn>
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-item>
                        {{ item.fruitDescription }}
                    </v-card-item>

                </v-card>
            </v-col>
            <v-divider :thickness="1" class="border-opacity-100" vertical></v-divider>
            <v-col cols="4">
                <v-card>
                    <v-card-title>Sản phẩm bán chạy</v-card-title>
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
const incrementCount = () => {
    if (count.value < 100) {
        count.value += 1;
    }
};

const decrementCount = () => {
    if (count.value > 1) {
        count.value -= 1;
    }
};

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
</style>