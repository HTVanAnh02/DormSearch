<template>
    <div style="background-color:#F8F8FF">
        <v-container>
            <v-row>
                <v-col cols="8">
                    <v-row>
                        <v-col cols="6">
                            <TongKhachHang />
                        </v-col>
                        <v-col cols="6">
                            <TongSanPham />
                        </v-col>
                        <v-col cols="6">
                            <TongDonHang />
                        </v-col>
                        <v-col cols="6">
                            <DonCanDuyet />
                        </v-col>
                        <v-col cols="12">
                            <don-hang-can-duyet />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <v-card-title style="font-size: 14px;"><strong>Doanh Thu Tuần Này</strong>
                            <div style="width: 100%; height: 2px;background-color: rgb(216, 216, 136);"></div>
                        </v-card-title>
                        <v-card-text>
                            <DoanhThuTheoTuan />
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-4">
                        <v-card-title style="font-size: 14px;"><strong>Trạng thái đơn hàng</strong>
                            <div style="width: 100%; height: 2px;background-color: rgb(216, 216, 136);"></div>
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <TestAmchartjsVue />
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import DoanhThuTheoTuan from './DoanhThuTheoTuan.vue';
import TestAmchartjsVue from './TestAmchartjs.vue';
import ThongKeSanPham from './ThongKeSanPham.vue';
import TongKhachHang from './TongKhachHang.vue';
import TongSanPham from './TongSanPham.vue';
import TongDonHang from './TongDonHang.vue';
import DonCanDuyet from './DonCanDuyet.vue';
import DonHangCanDuyet from './DonHangCanDuyet.vue';
export default {
    components: { DonCanDuyet, DoanhThuTheoTuan, ThongKeSanPham, TestAmchartjsVue, TongKhachHang, TongSanPham, TongDonHang, DonHangCanDuyet }
}
</script>


<style></style>