\<template>
    <div>
        <v-card class="mt-0" variant="flat" style="width: 426px;
           height: 450px;
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);">
            <v-img class="mx-auto mt-0" style="width: 250px; height: 80px;" :src="logo"></v-img>
            <div class="text-h4 mt-6 mb-0"
                style=" font-family: 'Public Sans',sans-serif; font-size: 32px; font-weight: 600; line-height: 48px; letter-spacing: 0em; text-align: center; margin: 0 auto; display: flex; align-items: center; justify-content: center; color:#1B1B33;">
                Quên Mật khẩu
            </div>
            <v-form :style="{ width: '425px', height: '260px' }">
                <div class="text-subtitle-1 text-medium-emphasis" style="margin-top:20px; width: 425px; height: 60px;">
                    <div
                        style="height: 28px; font-family: 'Public Sans', sans-serif; font-size: 14px; font-weight: bold; color: #464F60;">
                        Email</div>
                    <v-text-field v-model="Email" type="email" required
                        density="compact" placeholder="Nhập email của bạn" variant="outlined"></v-text-field>
                </div>
                <div class="d-flex justify-space-between align-center mt-8" >
                </div>
                <v-btn  block class="mb-5 rounded-button" @click="submit"
                    color="#0F60FF"
                    style="font-family: 'Public Sans', sans-serif; width: 425px; height: 48px; font-size: 16px; ">
                    <span class="text-capitalize">Tiếp</span>
                    <span class="text-lowercase">tục</span>
                </v-btn>
                <div class="text-center" style=" width: 425px; height: 20px;">
                    <a class="text-decoration-none text-center"
                        style="font-family: 'Public Sans', sans-serif; font-size: 14px; color: #5A5C6F;">Quay Lại?</a>
                        <router-link to="/login" class="text-decoration-none text-center"
                        style="font-family: 'Public Sans', sans-serif; font-size: 14px; color:#0F60FF; font-weight: bold;">
                        Đăng nhập
                    </router-link>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script setup>
import logo from '../../assets/image/logo.png'
import { ref } from 'vue';
import axios from 'axios';
import {useOtpStore} from '../../store/GuiOtp/otp'
import {useRouter} from 'vue-router';

const Email = ref('');
const store = useOtpStore()
const router = useRouter()

const submit = () => {
    axios.post('https://localhost:44309/api/User/GuiOTP', null, {
        params: {
            Email: Email.value
        },
    }).then(rs => {
        // this.codeApi = rs.data.Code
        // this.FormData.Email = rs.data.Email
        if(rs.data.statusCode === 200){
            localStorage.setItem("email", JSON.stringify(Email.value))
            store.setOtp(Email.value)
            // const test = store.email // Hiển thị dữ liệu được lưu trong "State"
            router.push("/re_password")
        }
        
    }).catch(er => {
        //alert(er.response.data)
        this.$emit('close')
        this.$store.commit('setLoginError', {
            show: true,
            icon: '$error',
            content: er.response.data,
            color: 'error'
        });
        setTimeout(() => {
            this.$store.commit('clearLoginError');
        }, 3000);
    });
};
</script>

<style>
.icon-field .v-icon {
    width: 4.98px;
    height: 4.98px;
}

.rounded-button {
    border-radius: 24px;
    /* Độ cong của góc */
}

.custom-checkbox .v-label {
    font-family: 'Public Sans', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: black;
}

.custom-link {
    font-family: 'Public Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #0F60FF;
}

.custom-checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
}

.custom-checkbox .v-input--selection-controls__ripple {
    width: 16px;
    height: 16px;
    border-radius: 4px;
}
</style>