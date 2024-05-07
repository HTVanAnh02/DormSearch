<template>
    <v-container>
        <v-card class="rounded-0">
            <v-toolbar max-height="60px" class="text-center bold-text" style="background-color: #46694f;color: white;">
                <v-icon left class="mx-6" size="40" color="white">mdi-cart</v-icon>
                <h3>Bài Đăng của bạn</h3>
            </v-toolbar>
            <v-card-text>
                <div class="ma-1">
                    <v-table fixed-header class="bottom-border">
                        <thead>
                            <tr>
                                <th>Mã Bài Đăng</th>
                                <th style="min-width: 150px;">Tên nhà trọ</th>
                                <th style="min-width: 150px;">Mô tả</th>
                                <th style="min-width: 150px;">Giá</th>
                                <th style="min-width: 150px;">Địa Chỉ</th>
                                <th style="min-width: 150px;">Trạng Thái</th>
                                <th style="min-width: 150px;">Xác Nhận</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in this.listBaiDangByUserId" :key="item.Id">
                                <td>{{ item.Id }}</td>
                                <td>{{ item.NguoiNhan }}</td>
                                <td>{{ item.DiaChi }}</td>
                                <td>{{ formatCurrency(item.Total) }}</td>
                                <td>{{ formatDateTime(item.NgayDat) }}</td>
                                <td v-if="item.TrangThai === 0"><span class="text-green">Chờ duyệt</span></td>
                                <td v-if="item.TrangThai === -1"><span class="text-white pa-2"
                                        style="background-color: rgb(242, 12, 12);min-width: 30px;">Đã hủy</span></td>
                                <td v-if="item.TrangThai === 1"><span class="text-green">Đang duyệt</span></td>
                                <td v-if="item.TrangThai === 2"><span class="text-white pa-2"
                                        style="background-color: rgb(12, 242, 12);">Thành công</span></td>
                                <td v-if="item.TrangThai === 2">
                                    <v-btn @click="DaDuyet(item.Id)" variant="tonal" color="green">Đã duyệt</v-btn>
                                </td>
                                <td v-else></td>
                                <td>
                                    <v-btn @click="ShowDetails(item)" variant="text"><v-icon
                                            color="green">mdi-eye</v-icon></v-btn>
                                </td>
                                <td v-if="item.TrangThai === 0 || item.TrangThai === 1">
                                    <v-btn @click="DaHuy(item.Id)" variant="tonal" color="red">Hủy</v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </v-card-text>
        </v-card>
        <HouseDetail :orderId="this.orderId" v-model="this.ShowDialogDetails" />
    </v-container>
</template>
<script>
import axios from 'axios';
import HouseDetail from './HouseDetail.vue';
export default {
    name: 'BaiDang',
    components: {
        HouseDetail
    },
    props: {
        id: String
    },
    data() {
        return {
            listBaiDangByUserId: [],
            ShowDialogDetails: false,
            orderId: ''
        }
    },
    mounted() {
        this.getlistBaiDangByUserId(this.$store.state.UserId)
    },
    methods: {
        getlistBaiDangByUserId(UserId) {
            if (sessionStorage.getItem('UserId')) {
                axios.get('', {
                    params: {
                        id: UserId,
                    },
                    headers: {
                        'Authorization': `Bearer ` + this.$store.state.token,
                    },
                }).then(rs => {
                    this.listBaiDangByUserId = rs.data
                    //console.log(this.listBaiDangByUserId)
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
        DaDuyet(id) {
            axios.get('', {
                params: {
                    id: id
                },
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(() => {
                this.getlistBaiDangByUserId(this.$store.state.UserId)
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
        DaHuy(id) {
            axios.get('', {
                params: {
                    id: id
                },
                headers: {
                    'Authorization': `Bearer ` + this.$store.state.token,
                },
            }).then(() => {
                this.getlistBaiDangByUserId(this.$store.state.UserId)
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
            this.getlistBaiDangByUserId(newVal)
        }
    }
}
</script>

<style></style>