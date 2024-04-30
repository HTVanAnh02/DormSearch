<template>
    <v-dialog class="custom-dialog" transition="dialog-top-transition" width="500px">
        <v-card class="rounded-0">
            <v-toolbar class="text-center bold-text" style="background-color: #0080dd;color: white;" title="Quên mật khẩu">
            </v-toolbar>
            <v-card-text v-if="this.codeApi == ''">
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="this.Username" prepend-icon="mdi-account" label="Tài khoản"
                            required></v-text-field>
                    </v-col>
                </v-row>
                <v-card-actions class="justify-center">
                    <v-btn class="rounded-0" @click="submit()"
                        style="background-color: #028bda !important;border-color: #028bda;color: white;">Submit</v-btn>
                    <v-btn class="rounded-0" @click="this.$emit('close')"
                        style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                </v-card-actions>
            </v-card-text>
            <v-card-text v-else>
                <v-row>
                    <v-col cols="12">
                        <v-text-field type="password" v-model="this.FormData.NewPass" prepend-icon="mdi-account" label="Mật khẩu mới"
                            required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field type="password"  v-model="this.FormData.CfNewPass" prepend-icon="mdi-account"
                            label="Nhập lại mật khẩu mới" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="this.codeClient" prepend-icon="mdi-account" label="Nhập mã xác minh"
                            required></v-text-field>
                    </v-col>
                </v-row>
                <v-card-actions class="justify-center">
                    <v-btn class="rounded-0" @click="save()"
                        style="background-color: #028bda !important;border-color: #028bda;color: white;">Submit</v-btn>
                    <v-btn class="rounded-0" @click="this.$emit('close')"
                        style="background-color: #ABBAC3 !important;border-color: white !important;color: white;">Hủy</v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    name: 'FormQuenMatKhau',
    data() {
        return {
            Username: '',
            FormData: {
                Username: '',
                NewPass: '',
                CfNewPass: '',
            },
            codeClient: '',
            codeApi: '',
        }
    },
    methods: {
        submit() {
            axios.post('http://localhost:5224/api/Account/QuenPassword', null, {
                params: {
                    username: this.Username
                },
            }).then(rs => {
                this.codeApi = rs.data.Code
                this.FormData.Username = rs.data.Username
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
        },
        save() {
            if (this.codeApi !== this.codeClient) {
                //alert("Mã xác minh không đúng")
                this.$emit('close')
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: 'Mã xác minh không đúng',
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }
            if (this.FormData.CfNewPass !== this.FormData.NewPass) {
                //alert("2 mật khẩu không giống nhau")
                this.$emit('close')
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: '2 mật khẩu không giống nhau',
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }
            axios.post('http://localhost:5224/api/Account/DoiMatKhau', this.FormData).then(rs => {
                //console.log(rs.data)
                this.$emit('close')
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$success',
                    content: rs.data,
                    color: 'success'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            }).catch(er => {
                //alert(er.message)
                this.$emit('close')
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: er.message,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            });;
        }
    }
}
</script>

<style></style>