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
  