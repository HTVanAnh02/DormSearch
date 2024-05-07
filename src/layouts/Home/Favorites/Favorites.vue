<template>
    <v-container>
        <v-card class="rounded-0">
            <v-toolbar max-height="60px" class="text-center bold-text" style="background-color: #46694f;color: white;">
                <v-icon left class="mx-6" size="40" color="white">mdi-cart</v-icon>
                <h3>Danh sách yêu thích</h3>
            </v-toolbar>
            <v-card-text>
                <div class="ma-1">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Ảnh nhà trọ</th>
                                <th class="text-center">Tiêu Đề</th>
                                <th class="text-center">Nội Thất</th>
                                <th class="text-center">Diện tích</th>
                                <th class="text-center">Địa chỉ </th>
                                <th class="text-center">Hành động</th>
                                <th class="text-center">Ngày Đăng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in datas" :key="index">
                                <td class="text-center">{{ index + 1 }}</td>
                                <td class="text-center">
                                    <img :src="item.AnhBaiViet" style="width:150px;height:150px;" />
                                </td>
                                <td class="text-center">{{ item.TieuDe }}</td>
                                <td class="text-center">{{ formatDateTime(item.NgayDang) }}</td>
                                <td class="text-center">{{ item.NguoiDungId }}</td>
                                <td class="text-center">{{ item.NoiDung }}</td>
                                <td class="text-center">
                                    <v-btn icon color="red" size="small" @click="Show(item.BaiVietId)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios';
import ChiTietDonHangVue from './ChiTietDonHang.vue';
export default {
    name: 'DonHang',
    components: {
        ChiTietDonHangVue
    },
    props: {
        id: String
    },
    data() {
        return {
            listDonHangByUserId: [],
            ShowDialogDetails: false,
            orderId: ''
        }
    },
    mounted() {
        this.getlistDonHangByUserId(this.$store.state.UserId)
    },
    methods: {
        getlistDonHangByUserId(UserId) {
            if (sessionStorage.getItem('UserId')) {
                axios.get('http://localhost:5224/api/Order', {
                    params: {
                        id: UserId,
                    },
                    headers: {
                        'Authorization': `Bearer ` + this.$store.state.token,
                    },
                }).then(rs => {
                    this.listDonHangByUserId = rs.data
                    //console.log(this.listDonHangByUserId)
                    //console.log(rs.data)
                }).catch(erro => {
                    if (erro.response.statusText === 'Unauthorized')
                        this.$store.dispatch('logout')
                    this.$store.commit('setLoginError', {
                        show: true,
                        icon: '$error',
                        content: erro.message,
                        color: 'error'
                    });
                    setTimeout(() => {
                        this.$store.commit('clearLoginError');
                    }, 3000);
                })
            }
        },
        formatDateTime(dateTimeString) {
            const dateObject = new Date(dateTimeString);
            const day = String(dateObject.getDate()).padStart(2, '0');
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const year = String(dateObject.getFullYear()).slice(2);
            const hours = String(dateObject.getHours()).padStart(2, '0');
            const minutes = String(dateObject.getMinutes()).padStart(2, '0');
            const seconds = String(dateObject.getSeconds()).padStart(2, '0');
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        },
        formatCurrency(value) {
            const formatter = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return formatter.format(value);
        },
        ShowDetails(item) {
            this.orderId = item.Id
            this.ShowDialogDetails = true
        },
        DaNhan(id) {
            axios.get('http://localhost:5224/api/Order/DaNhanDonHang', {
                params: {
                    id: id
                },
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(() => {
                this.getlistDonHangByUserId(this.$store.state.UserId)
            }).catch(erro => {
                if (erro.response.statusText === 'Unauthorized')
                    this.$store.dispatch('logout')

                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: erro.message,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            })
        },
        HuyDon(id) {
            axios.get('http://localhost:5224/api/Order/HuyDon', {
                params: {
                    id: id
                },
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(() => {
                this.getlistDonHangByUserId(this.$store.state.UserId)
            }).catch(erro => {
                if (erro.response.statusText === 'Unauthorized')
                    this.$store.dispatch('logout')
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: erro.message,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            })
        }
    },
    watch: {
        id(newVal) {
            this.getlistDonHangByUserId(newVal)
        }
    }
}
</script>

<style></style>