<template>
    <v-card>
        <v-card-title style="font-size: 14px;"><strong>Đơn hàng cần duyệt</strong>
            <div style="width: 100%; height: 2px;background-color: rgb(216, 216, 136);"></div>
        </v-card-title>
        <v-card-text v-if="this.listDonHangCanDuyet.length !== 0">
            <v-table fixed-header min-height="100px" max-height="400px">
                <thead>
                    <tr>
                        <th>
                            <v-checkbox v-model="selectAll" color="success"
                                class="d-flex align-center justify-center"></v-checkbox>
                        </th>
                        <th>MĐH</th>
                        <th>Tên KH</th>
                        <th>Total</th>
                        <th>Time</th>
                        <!-- <th>Action</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listDonHangCanDuyet" :key="item.Id">
                        <td><v-checkbox v-model="chooseListDonHang" :value="item.Id" color="success"
                                class="d-flex align-center justify-center"></v-checkbox></td>
                        <td>
                            <p>{{ item.Id }}</p>
                        </td>
                        <td>{{ item.NguoiNhan }}</td>
                        <td>{{ formatCurrency(item.Total) }}</td>
                        <td>{{ formatDateTime(item.NgayDat) }}</td>
                        <!-- <td>
                            <v-btn color="success">Duyệt</v-btn>
                        </td> -->
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
        <v-card-text v-else>
            <v-table fixed-header min-height="100px" max-height="400px">
                <thead>
                    <tr>
                        <th>MĐH</th>
                        <th>Tên KH</th>
                        <th>Total</th>
                        <th>Time</th>
                        <!-- <th>Action</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4">
                            <p class="text-green text-center">Chưa có đơn mới</p>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
        <v-card-actions v-if="this.listDonHangCanDuyet.length !== 0">
            <v-btn @click="DuyetDonHang()" min-width="20%" height="40" class="ml-auto mr-3" style="color: white;"
                color="success" variant="elevated">Duyệt</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            listDonHangCanDuyet: [],
            selectAll: false,
            chooseListDonHang: []
        }
    },
    created() {
        this.getDonHangCanDuyets();

        // Sử dụng setInterval để gọi lại mỗi 1 phút (60 giây)
        this.intervalId = setInterval(() => {
            this.getDonHangCanDuyets();
        }, 5000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        getDonHangCanDuyets() {
            axios.get('http://localhost:5224/api/DashBoard/getDonHangCanDuyet').then(rs => {
                this.listDonHangCanDuyet = rs.data
                //console.log(rs.data)
            }).catch(erro => {
                alert(erro)
                console.log(erro)
            })
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
        DuyetDonHang() {
            if (this.chooseListDonHang.length === 0 || this.chooseListDonHang == []) {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: "Vui lòng chọn đơn hàng cần duyệt",
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
                return
            }
            axios.post('http://localhost:5224/api/DashBoard/DuyetDonHang', this.chooseListDonHang).then(rs => {
                this.getDonHangCanDuyets()
                this.selectAll = false
                this.chooseListDonHang = []
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$success',
                    content: rs.data,
                    color: 'success'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            }).catch(erro => {
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
        setEmpty() {
            this.selectAll = false
            this.chooseListDonHang = []
        }
    },
    watch: {
        selectAll(newVal) {
            //alert(newVal)
            if (!newVal) {
                this.setEmpty()
                return
            }
            this.chooseListDonHang = this.listDonHangCanDuyet.map(cart => cart.Id);
        },
        chooseListDonHang(newval) {
            // this.setEmpty()
        }
    },

}
</script>

<style></style>