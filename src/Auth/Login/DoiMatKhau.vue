<template>
    <v-container justify="center" align="center">
        <v-card width="500px" class="rounded-0">
            <v-toolbar class="text-center bold-text" style="background-color: #46694f;color: white;"
                title="Đổi mật khẩu"></v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="this.FormData.PasswordCu" type="password" label="Mật khẩu hiện tại" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="this.FormData.Password" type="password" label="Mật khẩu mới"
                            required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="this.FormData.cfPassword" type="password" label="Xác nhận mật khẩu mới"
                            required></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions style="background-color: #EFF3F8;" class="justify-center">
                <v-btn class="rounded-0" @click="DoiMatKhau()"
                    style="background-color: rgb(70, 105, 79) !important;border-color: #028bda;color: white;">Đổi</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            FormData: {
                PasswordCu: '',
                Password: '',
                cfPassword: '',
            }
        }
    },
    methods: {
        DoiMatKhau()
        {
            if(this.FormData.Password !== this.FormData.cfPassword)
            {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: "2 mật khẩu không đúng",
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }
            axios.get('http://localhost:5224/api/Account/DoiMatKhau2',{
                params:{
                    UserId:this.$store.state.UserId,
                    PassCu:this.FormData.PasswordCu,
                    PassNew:this.FormData.Password
                }
            }).then(rs=>{
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$success',
                    content: rs.data,
                    color: 'success'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                this.$router.push({name: 'TrangChu'})
                this.$store.dispatch('logout')
            }).catch(erro => {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: erro.response.data,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            })
        }
    },
}
</script>
  
<style></style>