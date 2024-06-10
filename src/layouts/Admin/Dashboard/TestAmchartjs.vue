<template>
    <div>
    <h1>Thống kê khu vực có nhiều nhà trọ nhất</h1>
        <apexchart width="1000" type="bar" :options="chartOptions" :series="series"></apexchart>
        <v-btn @click="dashboard">Làm mới</v-btn>
    </div>
    <div style="display: flex; margin: 50px 0;">
        <div><h1>Thống kê miền có nhiều nhà trọ nhất</h1></div>
        <div v-for="(item, index) in mien" :key="index" style="width: 200px; margin: 30px 20px;">
            <div :style="'height: '+item+'px; background-color: black; width: 50px; color: red;'">
                {{ item }}
            </div>
            <div style="margin: 10px 0;">
                {{ index }}
            </div>
        </div>
        <v-btn @click="dashboardMien">Làm mới</v-btn>
    </div>
    
    <div style="display: flex; margin: 50px 0;">
        <div><h1>Thống kê diện tích phòng của các phòng trọ</h1></div>
        <div v-for="(item, index) in tienThue" :key="index" style="width: 200px; margin: 30px 20px;">
            <div :style="'height: '+item+'px; background-color: black; width: 50px; color: red;'">
                {{ item }}
            </div>
            <div style="margin: 10px 0;">
                {{ index }}
            </div>
        </div>
        <v-btn @click="dashboardtienThue">Làm mới</v-btn>
    </div>

    <div style="display: flex; margin: 50px 0;">
        <div><h1>Thống kê tiền thuê phòng của các phòng trọ</h1></div>
        <div v-for="(item, index) in DienTich" :key="index" style="width: 200px; margin: 30px 20px;">
            <div :style="'height: '+item+'px; background-color: black; width: 50px; color: red;'">
                {{ item }}
            </div>
            <div style="margin: 10px 0;">
                {{ index }}
            </div>
        </div>
        <v-btn @click="dashboardDienTich">Làm mới</v-btn>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import axios from 'axios';

export default {
    name: 'VueChart',
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const store = ref([
            { storeName: 'Store A', revenue: 5000 },
            { storeName: 'Store B', revenue: 8000 },
            { storeName: 'Store C', revenue: 3000 },
            { storeName: 'Store D', revenue: 6000 },
        ]);
        const mien = ref([])
        const tienThue = ref([])
        const DienTich = ref([])

        const series = computed(() => [{ data: store.value.map(s => s.revenue) }]);
        const labels = computed(() => store.value.map(s => s.storeName));
        const chartOptions = computed(() => ({
            chart: {
                id: 'vuechart-example',
            },
            xaxis: {
                categories: labels.value,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 1000,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        }));

        const dashboard = async () => {
            try {
                axios.get("https://localhost:44309/api/Thongke/thongkeThanhPho")
                .then(response => {
                    const keys = Object.keys(response.data.data)
                    const values = Object.values(response.data.data)
                    store.value.map((item, key) => {
                        item.storeName = keys[key]
                        item.revenue = values[key]
                    })
                })
                .catch(error => {
                    console.log(error)
                })
                // store.value = [
                //     { storeName: 'Số bài đăng', revenue: 120 },
                //     { storeName: 'Đánh giá bài đăng', revenue: 66 },
                //     { storeName: 'Số người dùng', revenue: 46 },
                //     { storeName: 'Số bài cần duyệt', revenue: 56 },
                // ];
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            }
        };

        const dashboardMien = async () => {
            try {
                axios.get("https://localhost:44309/api/Thongke/thongkeVungMien")
                .then(response => {
                    mien.value = response.data.data
                    // const keys = Object.keys(response.data.data)
                    // const values = Object.values(response.data.data)
                    // store.value.map((item, key) => {
                    //     item.storeName = keys[key]
                    //     item.revenue = values[key]
                    // })
                })
                .catch(error => {
                    console.log(error)
                })
                // store.value = [
                //     { storeName: 'Số bài đăng', revenue: 120 },
                //     { storeName: 'Đánh giá bài đăng', revenue: 66 },
                //     { storeName: 'Số người dùng', revenue: 46 },
                //     { storeName: 'Số bài cần duyệt', revenue: 56 },
                // ];
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            }
        };

        const dashboardtienThue = async () => {
            try {
                axios.get("https://localhost:44309/api/Thongke/totalBanTinGiaTien")
                .then(response => {
                    tienThue.value = response.data.data
                    // const keys = Object.keys(response.data.data)
                    // const values = Object.values(response.data.data)
                    // store.value.map((item, key) => {
                    //     item.storeName = keys[key]
                    //     item.revenue = values[key]
                    // })
                })
                .catch(error => {
                    console.log(error)
                })
                // store.value = [
                //     { storeName: 'Số bài đăng', revenue: 120 },
                //     { storeName: 'Đánh giá bài đăng', revenue: 66 },
                //     { storeName: 'Số người dùng', revenue: 46 },
                //     { storeName: 'Số bài cần duyệt', revenue: 56 },
                // ];
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            }
        };

        const dashboardDienTich = async () => {
            try {
                axios.get("https://localhost:44309/api/Thongke/totalBanTinDienTich")
                .then(response => {
                    DienTich.value = response.data.data
                    // const keys = Object.keys(response.data.data)
                    // const values = Object.values(response.data.data)
                    // store.value.map((item, key) => {
                    //     item.storeName = keys[key]
                    //     item.revenue = values[key]
                    // })
                })
                .catch(error => {
                    console.log(error)
                })
                // store.value = [
                //     { storeName: 'Số bài đăng', revenue: 120 },
                //     { storeName: 'Đánh giá bài đăng', revenue: 66 },
                //     { storeName: 'Số người dùng', revenue: 46 },
                //     { storeName: 'Số bài cần duyệt', revenue: 56 },
                // ];
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            }
        };

        dashboard();
        dashboardMien()
        dashboardtienThue()
        dashboardDienTich()

        return {
            DienTich,
            tienThue,
            mien,
            store,
            series,
            chartOptions,
            dashboard,
            dashboardMien,
            dashboardtienThue,
            dashboardDienTich
        };
    },
};
</script>

<style scoped>
button {
    margin-top: 20px;
}
</style>