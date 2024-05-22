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
                Đăng nhập
            </div>
            <v-form id="myForm" @submit.prevent="loginform.handleLogin" @keyup.enter="loginform.handleLogin"
                :style="{ width: '425px', height: '260px' }">
                <div class="text-subtitle-1 text-medium-emphasis" style="margin-top:20px; width: 425px; height: 60px;">
                    <div
                        style="height: 28px; font-family: 'Public Sans', sans-serif; font-size: 14px; font-weight: bold; color: #464F60;">
                        Email</div>
                    <v-text-field v-model="loginform.email" type="email" :error-messages="loginform.emailError" required
                        density="compact" placeholder="Nhập email" variant="outlined"></v-text-field>
                </div>
                <div class="text-subtitle-1 text-medium-emphasis" style="margin-top:20px; width: 425px; height: 60px;">
                    <div
                        style="height: 28px; font-family: 'Public Sans', sans-serif; font-size: 14px; font-weight: bold; color: #464F60;">
                        Mật Khẩu</div>
                    <v-text-field v-model="loginform.password" :error-messages="loginform.passwordError"
                        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" :type="visible ? 'text' : 'password'"
                        density="compact" placeholder="••••••••••••••" variant="outlined"
                        @click:append-inner="visible = !visible">
                    </v-text-field>
                </div>
                <div class="d-flex justify-space-between align-center mt-8" style="width: 425px; height: 20px;">
                    <v-row></v-row>
                    <router-link to="forgot_password"
                        class="text-caption text-decoration-none text-blue mb-6 custom-link mt-4" style="height: 28px;">
                        Quên mật khẩu?
                    </router-link>
                </div>
                <v-btn @click="loginform.handleLogin" @enter="loginform.handleLogin" block class="mb-5 rounded-button"
                    color="#0F60FF"
                    style="font-family: 'Public Sans', sans-serif; width: 425px; height: 48px; font-size: 16px; ">
                    <span class="text-capitalize">Đăng</span>
                    <span class="text-lowercase">nhập</span>
                </v-btn>
                <div class="container" style="display: flex; justify-content: space-between; width: 425px;">
                    <v-btn :disabled="!isReady" @click="() => login()" block class="mb-5 rounded-button" color="#5A5C6F"
                        style="font-family: 'Public Sans', sans-serif; width: 425px; height: 45px; font-size: 16px; ">
                        <v-img :src="google" class="mr-2"
                            style="width: 24px; height: 24px; margin-right: 8px; vertical-align: middle;" />
                        <span class="text-capitalize" style="color: secondary; vertical-align: middle;">Google</span>
                    </v-btn>
                </div>

                <div class="text-center" style=" width: 425px; height: 20px;">
                    <a class="text-decoration-none text-center"
                        style="font-family: 'Public Sans', sans-serif; font-size: 14px; color: #5A5C6F;">Bạn chưa có tài
                        khoản?</a>
                    <router-link to="/register" class="text-decoration-none text-center"
                        style="font-family: 'Public Sans', sans-serif; font-size: 14px; color:#0F60FF; font-weight: bold;">
                        Đăng ký?
                    </router-link>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import logo from '../../assets/image/logo.png'
import google from '../../assets/image/google.png'
import facebook from '../../assets/image/facebook.png'
import { reactive, ref } from 'vue';
import { userLoginForm } from './login.service';
import { useOneTap, type CredentialResponse } from "vue3-google-signin";

const loginform = reactive(userLoginForm());
const visible = ref(false)
const terms = ref('')

const { isReady, login } = useOneTap({
    disableAutomaticPrompt: true,
    onSuccess: (response: CredentialResponse) => {
        console.log("Success:", response);
        sendTokenToBackend(response.credential);
    },
    onError: () => console.error("Error with One Tap Login"),
});
const sendTokenToBackend = async (credential: any) => {
    try {
        loading.showLoading(true);
        const response = await axios.post('https://localhost:44309/api/Auth/google-login', { credential });
        console.log(response.data);
        if (response.data.success) {
            showSuccessNotification(response.data.message);
            localStorageAuthService.setAccessToken(data.accessToken);
            localStorageAuthService.setAccessTokenExpiredAt(data.accessTokenExpiration);
            localStorageAuthService.setRefreshToken(data.refreshToken);
            localStorageAuthService.setUserRole(data.role);
            loading.showLoading(false);
            setTimeout(() => {
                router.push('/');
            }, 3000)
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.data.errors !== undefined) {
                showErrors(error.response?.data.errors);
            }
        }
        loading.showLoading(false);
    };
}
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
./login.js