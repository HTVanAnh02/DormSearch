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
              <v-row class="align-items-center">
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
              <v-row class="align-items-center">
                <v-col cols="6">
                  <v-icon color="purple" style="font-size: 30px;">mdi-city</v-icon>
                  <span class="subtitle"><b>Thành phố:</b></span>
                  <span class="text-subtitle-1">
                    <b style=" font-size: 20px">{{ item.cityName }}</b>
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
                  <v-icon color="teal" style="font-size: 30px;">mdi-home-outline</v-icon>
                  <span class="subtitle"><b>Loại phòng:</b></span>
                  <span class="text-subtitle-1">
                    <b style=" font-size: 20px">{{ item.roomstyleName }}</b>
                  </span>
                </v-col>
                <v-col cols="6">
                  <v-icon color="red" style="font-size: 30px;">mdi-map-marker</v-icon>
                  <span class="subtitle"><b>Địa chỉ:</b></span>
                  <v-tooltip :text="item.addressHouses" location="top">
                    <template v-slot:activator="{ props }">
                      <span class="text-subtitle-1" v-bind="props">
                        <b style=" font-size: 20px">{{ item.addressHouses }}</b>
                      </span>
                    </template>
                  </v-tooltip>
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
                  <v-tooltip :text="item.addressHouses" location="top">
                    <template v-slot:activator="{ props }">
                      <span class="text-subtitle-1" v-bind="props">
                        <b style=" font-size: 20px">{{ item.interior }}</b>
                      </span>
                    </template>
                  </v-tooltip>
                </v-col>
                <!-- <v-col cols="6">
                  <v-icon color="deep-purple" style="font-size: 30px;">mdi-phone</v-icon>
                  <span class="subtitle"><b>Số điện thoại:</b></span>
                  <span class="text-subtitle-1">
                    <b style=" font-size: 20px">{{ item.contact }}</b>
                  </span>
                </v-col> -->
                <v-col cols="12">
                  <v-icon color="blue" style="font-size: 30px;">mdi-currency-usd</v-icon>
                  <span class="subtitle"><b>Giá:</b></span>
                  <br />
                  <span class="text-subtitle-1">
                    <span style="font-size: 25px; color: rgb(246, 10, 10)" class="inline-block font-weight-bold">
                      {{ formatNumberWithCommas(item?.price ?? 0) }}đ/tháng
                    </span>
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
              <v-btn class="text-capitalize" variant="outlined" @click="Ok(item.usersId)"
                style="border-color: #9DC2FF;height: 40px;color: #2264D1;font-weight: 700;font-size: 20px;">Liên
                <span class="text-lowercase ml-1">hệ</span>
                <v-icon class="ml-2" style="height: 40px; font-size: 20px;">mdi-chat</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="ml-10">
            <v-icon color="lime" style="font-size: 30px;">mdi-file-document-outline</v-icon>
            <span class="subtitle" style="font-size: 20px;"><b>Mô tả:</b></span>
            <span class="text-subtitle-1">
              <b style=" font-size: 20px">{{ item.title }}</b>
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <v-card width="2000">
      <div>
        <div v-for="(item, index) in dataComment" :key="index">
          <div style="display: flex; margin: 30px 0">
            <div style="margin-right: 10px;">
              <img :src="item.image" width="50" style="border-radius: 50%" />
            </div>
            <div>
              <div style="display: flex;">
                <h1 style="margin-right: 10px;">{{ item.user }}</h1>
                <p style="font-size: 12px; color: gray; opacity: 0.8;">{{ item.createAt }}</p>
              </div>
              <div>
                <p>{{ item.message1 }}</p>
                <button type="button" style="background: yellow; font-size: 12px; padding: 2px 20px;" @click="show('block_' + item.id1)">rep</button>
              </div>

              <div style="display: none" :id="'block_' + item.id1">
                    <input type="text" :id="'id_' + item.id1" />
                    <button v-on:click="Gui1('id_' + item.id1, item.id1)">Gui</button>
                  </div>
            </div>
          </div>
          <div style="margin: 0 60px;">
            <div v-for="(itemRep2, indexRep2) in item.commentDescriptions" :key="indexRep2">
              
              
              <div style="display: flex; margin: 30px 0">
                <div style="margin-right: 10px;">
                  <img :src="itemRep2.image" width="50" style="border-radius: 50%" />
                </div>
                <div>
                  <div style="display: flex;">
                    <h1 style="margin-right: 10px;">{{ itemRep2.user2 }}</h1>
                    <p style="font-size: 12px; color: gray; opacity: 0.8;">{{ itemRep2.createAt }}</p>
                  </div>
                  <div>
                    <p>{{ itemRep2.message2 }}</p>
                    <button type="button" style="background: yellow; font-size: 12px; padding: 2px 20px;" @click="show('block_' + itemRep2.id2)">rep</button>
                  </div>
                  <div style="display: none" :id="'block_' + itemRep2.id2">
                    <input type="text" :id="'id_' + itemRep2.id2" />
                    <button v-on:click="Gui('id_' + itemRep2.id2, itemRep2.id2)">Gui</button>
                  </div>
                </div>
              </div>
              <div v-for="(item3, index3) in itemRep2.commentDescriptionRep" :key="index3">
                <div style="display: flex; margin: 0 60px">
                <div style="margin-right: 10px;">
                  <img :src="item3.image" width="50" style="border-radius: 50%" />
                </div>
                <div>
                  <div style="display: flex;">
                    <h1 style="margin-right: 10px;">{{ item3.user3 }}</h1>
                    <p style="font-size: 12px; color: gray; opacity: 0.8;">{{ item3.createAt }}</p>
                  </div>
                  <div>
                    <p>{{ item3.message3 }}</p>
                    <button type="button" style="background: yellow; font-size: 12px; padding: 2px 20px;" @click="show('block_' + item3.id3)">rep</button>
                  </div>
                  <div style="display: none" :id="'block_' + item3.id3">
                    <input type="text" :id="'id_' + item3.id3" />
                    <button v-on:click="GuiN('id_' + item3.id3, itemRep2.id2, item3.id3)">Gui</button>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <div style="max-width: 800px; margin: 10px auto; display: flex;text-align: left; ">
        <input placeholder="Nhập nội dung bình luận" v-model="comment1.message"
          style="flex-grow: 1; border: 1px solid #ccc; padding: 10px; resize: none;">
        <button
        @click="Comment(item.usersId)"
          style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px;">Bình
          luận</button>
      </div>
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
import { onMounted, ref, watch } from 'vue';
const { isAuthenticated } = AuthStore();
import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from '@/common/contant/contants';
import { useLoadingStore } from '@/store/loading';
import { useHome } from '../Services/home.service';
import { AuthStore } from '@/Auth/authStore';
import { reactive } from "vue";
import { formatNumberWithCommas } from "@/common/helper/helpers";
import { useChatStore } from "@/store/chat/chat";
import axios from "@/plugins/axios/axios";
const { getById, fetchHome } = useHome();
const loading = useLoadingStore();
const houses = ref<any | undefined>([]);
const item = ref<any | undefined>({});
const total = ref<number>(0);
const id = ref<any | undefined>('');
const page = ref<number>(10);
const isShowDialog = ref(false);
const checkRole = ref(false)
const noidung = ref('')
const userId = useChatStore;
const dataComment = ref([])
const dem = ref(1)
const comment1 = ref({
  message: "",
  houseproduct_id: "",
  account_id: ""
})

watch(() => dem.value, (newValue, OldValue) =>{
  dem.value += newValue
})
const comment2N = ref({
  message: "",
  commentDescription_ID: "",
  commentDescriptionReps_ID: "",
  comment_ID: "",
  account_ID: ""
})

const buffData = (data) => {
   dem.value++
  return dem.value
}
const formatDatetime = (date) => {
  const dateObject = new Date(date);
  const ngay = dateObject.getDate().toString().padStart(2, "0");
  const thang = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const nam = dateObject.getFullYear();
  const ngayThangNam = `${thang}/${ngay}/${nam}`;
  return ngayThangNam;
};
const Ok = (item: any) => {
  alert(item);
  router.push('/chat-mess/chat/' + item);

}
const seeMore = async () => {
  DEFAULT_COMMON_LIST_QUERY_BY_HOME.limit = page.value += 5;
  await searchData();

}
const show = async (id) => {
  const ids = document.getElementById(id)
  ids.style.display = "block"
  console.log(id)
}

const Gui1 = async (id, id1) => {
  const values = document.getElementById(id).value
  
  comment2N.value.message = values
  comment2N.value.comment_ID = id1
  comment2N.value.account_ID = item.value.usersId
  comment2N.value.commentDescription_ID = ""
  comment2N.value.commentDescriptionReps_ID = ""

  if(comment2N.value.message === "" || comment2N.value.message == null)
      return
  
  await axios.post("https://localhost:44309/api/Comment/CreateCommentDescription", comment2N.value)
  .then(() => {
    findAllComment()
  })
}
const Gui = async (id, idcommnet2) => {
  const values = document.getElementById(id).value
  comment2N.value.message = values
  comment2N.value.account_ID = item.value.usersId
  comment2N.value.commentDescription_ID = idcommnet2
  comment2N.value.comment_ID = ""
  comment2N.value.commentDescriptionReps_ID = ""


  await axios.post("https://localhost:44309/api/Comment/CreateCommentDescription", comment2N.value)
  .then(() => {
    findAllComment()
  })
  console.log(idcommnet2)
}

const GuiN = async (text, id2, id3) => {
  const ids = document.getElementById(text).value
  comment2N.value.account_ID = item.value.usersId
  comment2N.value.message = ids
  comment2N.value.commentDescriptionReps_ID = id3
  comment2N.value.commentDescription_ID = id2
  comment2N.value.comment_ID = ""

  if(comment2N.value.message === null || comment2N.value.message === "")
    return
  await axios.post("https://localhost:44309/api/Comment/CreateCommentDescription", comment2N.value)
  .then(() => {
    findAllComment()
  })
}
const close = () => {
  isShowDialog.value = false
}
onMounted(async () => {

  loading.setLoading(true);
  id.value = router.currentRoute.value.params.id;
  const res = await getById(id.value);

  item.value = res;
  searchData();
  loading.setLoading(false);

  findAllComment()
})

const findAllComment = async () => {
  await axios.get("https://localhost:44309/api/Comment/FindAll", {
    params: {
      id: item.value.housesId
    }
  })
  .then(response => {
    dataComment.value = response.data.data
    console.log(response)
  })
}
const Comment = async (id) => {
  if(comment1.value.message === null || comment1.value.message === ""){
    alert("Vui lòng nhập nội dung")
    return
  }
  // alert(id)
  comment1.value.account_id = id
  comment1.value.houseproduct_id = item.value.housesId
  await axios.post("https://localhost:44309/api/Comment/CreateComment", comment1.value)
  .then(() => {
    findAllComment()
  })
  console.log(item.value.housesId)
}
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
const items = reactive([
  { type: 'subheader', title: 'Nội dung bình luận' },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Nguyễn Văn A?',
    subtitle: `<span class="text-primary">Cho hỏi còn phòng không ạ</span>`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Nguyễn Văn B',
    subtitle: `<span class="text-primary">Còn phòng không ạ</span> `,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Đỗ Hoàng Linh',
    subtitle: '<span class="text-primary">Sandra Adams</span> ',
  },
  { type: 'divider', inset: true },
],)
</script>

<style></style>