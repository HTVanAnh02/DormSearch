<template>
    <div style="background-color:#F8F8FF">
        <v-container>
            <v-row>
                <v-col cols="8">
                    <v-row>
                        <v-col cols="6">
                            <TongNguoiDung />
                        </v-col>
                        <v-col cols="6">
                            <TongSoBaiDang />
                        </v-col>
                        <v-col cols="6">
                            <TongDanhGia />
                        </v-col>
                        <v-col cols="6">
                            <TongSoBaiDangCanDuyet />
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
import ThongKeBaiDang from './ThongKeBaiDang.vue';
import TongNguoiDung from './TongNguoiDung.vue';
import TongSoBaiDang from './TongSoBaiDang.vue';
import TongDanhGia from './TongDanhGia.vue';
import TongSoBaiDangCanDuyet from './TongSoBaiDangCanDuyet.vue';
import BaiDangCanDuyet from './BaiDangCanDuyet.vue';
export default {
    components: { TongSoBaiDangCanDuyet, DoanhThuTheoTuan, ThongKeBaiDang, TestAmchartjsVue, TongNguoiDung, TongSoBaiDang, TongDanhGia, BaiDangCanDuyet }
}
</script>


<style></style>