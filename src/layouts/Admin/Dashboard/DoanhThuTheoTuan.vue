<template>
    <canvas id="myChart" style="background-color:white;"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from 'axios';
export default {
    data() {
        return {
            dataDoanhThuTheoTuan: [],
        }
    },
    methods: {
        getDoanhThuTheoTuan() {
            axios.get('http://localhost:5224/api/DashBoard/DoanhThuTheoTuan').then(rs => {
                this.dataDoanhThuTheoTuan = rs.data
                this.updateChart()
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
        updateChart() {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T6', 'T7', 'CN'],
                    datasets: [{
                        label: 'Doanh thu tuần này',
                        data: this.dataDoanhThuTheoTuan,
                        borderWidth: 0
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    },
    created() {
        this.getDoanhThuTheoTuan()
    }
}
</script>

<style></style>