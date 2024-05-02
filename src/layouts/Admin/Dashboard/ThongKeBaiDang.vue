<template>
    <canvas id="myChart1" style="background-color:white;"></canvas>
</template>
<script>
import Chart from 'chart.js/auto';
export default {
    mounted() {
        const ctx = document.getElementById('myChart1');

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
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
}
</script>

<style></style>