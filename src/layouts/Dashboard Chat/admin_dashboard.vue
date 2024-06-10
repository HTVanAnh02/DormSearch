<template>
    <div>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
        <v-btn @click="dashboard">Làm mới</v-btn>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

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
                            width: 800,
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
                store.value = [
                    { storeName: 'Số bài đăng', revenue: 120 },
                    { storeName: 'Đánh giá bài đăng', revenue: 66 },
                    { storeName: 'Số người dùng', revenue: 46 },
                    { storeName: 'Số bài cần duyệt', revenue: 56 },
                ];
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            }
        };

        dashboard();

        return {
            store,
            series,
            chartOptions,
            dashboard,
        };
    },
};
</script>

<style scoped>
button {
    margin-top: 20px;
}
</style>