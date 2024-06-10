<template>
    <div>
        <v-card class="mt-0" variant="flat" style="width: 426px;
           height: 550px;
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);">
            <v-img class="mx-auto mt-0" style="width: 250px; height: 80px;" :src="logo"></v-img>
            <div class="text-h4 mt-6 mb-0"
                style=" font-family: 'Public Sans',sans-serif; font-size: 32px; font-weight: 600; line-height: 48px; letter-spacing: 0em; text-align: center; margin: 0 auto; display: flex; align-items: center; justify-content: center; color:#1B1B33;">
                Nhập lại Mật khẩu
            </div>
            <v-form :style="{ width: '425px', height: '260px' }">
                <div class="text-subtitle-1 text-medium-emphasis" style="margin-top:20px; width: 425px; height: 60px;">
                    <div
                        style="height: 28px; font-family: 'Public Sans', sans-serif; font-size: 14px; font-weight: bold; color: #464F60;">
                        Mật Khẩu Mới</div>
                    <v-text-field  v-model="formData.NewPass"
                        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" :type="visible ? 'text' : 'password'"
                        density="compact" placeholder="•••••••••••••" variant="outlined"
                        @click:append-inner="visible = !visible">
                    </v-text-field>
                </div>
                <div class="text-subtitle-1 text-medium-emphasis" style="margin-top:20px; width: 425px; height: 60px;">
                        <div
                            style="height: 28px; font-family: 'Public Sans', sans-serif; font-size: 14px; font-weight: bold; color: #464F60;">
                            Nhập Lại Mật Khẩu Mới</div>
                        <v-text-field  v-model="formData.CfNewPass"
                            :append-inner-icon="visible1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="visible1 ? 'text' : 'password'" density="compact" placeholder="•••••••••••••"
                            variant="outlined" @click:append-inner="visible1 = !visible1">
                        </v-text-field>
                    </div>
                    <div class="text-subtitle-1 text-medium-emphasis" style="margin-top:20px; width: 425px; height: 60px;">
                    <div
                        style="height: 28px; font-family: 'Public Sans', sans-serif; font-size: 14px; font-weight: bold; color: #464F60;">
                        Mã xác minh</div>
                    <v-text-field v-model="codeClient" type="email" equired
                        density="compact" placeholder="Nhập mã xác minh" variant="outlined"></v-text-field>
                </div>
                <div class="d-flex justify-space-between align-center mt-8" >
                </div>
                <v-btn  block class="mb-5 rounded-button"  @click="save()"
                    color="#0F60FF"
                    style="font-family: 'Public Sans', sans-serif; width: 425px; height: 48px; font-size: 16px; ">
                    <span class="text-capitalize">Submit</span>
                </v-btn>
                <div class="text-center" style=" width: 425px; height: 20px;">
                        <router-link to="/forgot_password" class="text-decoration-none text-center"
                        style="font-family: 'Public Sans', sans-serif; font-size: 14px; color:#0F60FF; font-weight: bold;">
                        Quay Lại?
                    </router-link>
                </div>
            </v-form>
        </v-card>
    </div>
</template>
<script setup>
import logo from '../../assets/image/logo.png'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {useOtpStore} from '../../store/GuiOtp/otp'
import {useRouter} from 'vue-router'

const router = useRouter()
const formData = ref({
  Email: '', 
  NewPass: '',
  CfNewPass: '',
});

const UpdatePassword = ref({
  email: '',
  password: '',
  token: ''
})

const store = useOtpStore()

const codeClient = ref('');
const codeApi = ref('');

const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
onMounted(() => {
  const emails = JSON.parse(localStorage.getItem("email"))
        // Bắt sự kiện sau khi tải lại trang hoàn tất thì sẽ xóa biến "vuex" được lưu dưới "localStorage" đi
window.onload = function() {
  console.log(emails)
  axios.delete("https://localhost:44309/api/User/DeleteAllOTPs", {
    params:{
      email: emails
    }
  }).then(response => {
    if(response.data.statusCode === 200){
      this.alert("Vui lòng thử lại")
      router.push("/login")
      // Xử lý sau khi toàn bộ trang đã được load
      console.log('Trang đã được load hoàn toàn.');
      localStorage.removeItem("email")
    }
  })
  
  return
  // Thực hiện các thao tác hoặc gọi hàm cần thiết ở đây.
}
  store.setOtp(emails)
  // localStorage.removeItem("email")
  if(store.email === null || store.email === ""){
    alert("Vui lòng thử lại")
    router.push("/login")


    return
  }


})
// const submit = () => {
//   axios.post('https://localhost:44309/api/User/QuenPassword', null, {
//     params: {
//       email: formData.Email 
//     },
//   }).then(rs => {
//     codeApi.value = rs.data.Code;
//     formData.Email = rs.data.Email; 
//   }).catch(er => {
//     errorMessage.value = er.response.data;
//     showErrorMessage.value = true;
//     setTimeout(() => {
//       showErrorMessage.value = false;
//     }, 3000);
//   });
// };

// const save = () => {
//   if (codeApi.value !== codeClient.value) {
//     errorMessage.value = 'Mã xác minh không đúng';
//     showErrorMessage.value = true;
//     setTimeout(() => {
//       showErrorMessage.value = false;
//     }, 3000);
//     return;
//   }

//   if (formData.CfNewPass !== formData.NewPass) {
//     errorMessage.value = '2 mật khẩu không giống nhau';
//     showErrorMessage.value = true;
//     setTimeout(() => {
//       showErrorMessage.value = false;
//     }, 3000);
//     return;
//   }

//   axios.post('https://localhost:44309/api/User/DoiMatKhau', formData)
//     .then(rs => {
//       successMessage.value = rs.data;
//       showSuccessMessage.value = true;
//       setTimeout(() => {
//         showSuccessMessage.value = false;
//       }, 3000);
//     }).catch(er => {
//       errorMessage.value = er.message;
//       showErrorMessage.value = true;
//       setTimeout(() => {
//         showErrorMessage.value = false;
//       }, 3000);
//     });
// };

const save = () =>{
  if (formData.value.CfNewPass !== formData.value.NewPass) {
    alert("Mật khẩu phải chùng khớp")
    return;
  }

  UpdatePassword.value.password = formData.value.NewPass
  UpdatePassword.value.token = codeClient.value 
  UpdatePassword.value.email = store.email
  console.log(store.email)
  if(store.email === "" || store.email === null){
      console.log("Null")
      return
    }
  axios.put("https://localhost:44309/api/User/UpdatePassword", UpdatePassword.value)
  .then(response => {
    if(response.data.statusCode === 200){
      alert("Cập nhật thành công")
      localStorage.removeItem("email")
      router.push("/login")
      return
    }
    else{
      alert("Thông tin sai vui lòng thử lại")
      return
    }
  }).catch(error => {
    console.log(error)
  })
  
  
}
</script>
<style scoped>
.error-message {
  color: red;
  font-weight: bold;
}
</style>
