<template>
    <v-card bg-color="white" height="70px">
        <v-row>
            <v-col cols="4" class="text-center justify-center">
                <v-btn class="ma-2" color="orange" icon="mdi-bag-personal"></v-btn>
            </v-col>
            <v-col cols="8">
                <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng đơn hàng</p>
                <span style="font-weight: bold;" class="ml-1 text-black">{{ this.toatalOrders }}</span><span> đơn
                    hàng</span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            toatalOrders: 0,
        }
    },
    created() {
        this.gettoatalOrders()
    },
    methods:
    {
        gettoatalOrders() {
            axios.get('http://localhost:5224/api/DashBoard/getTotalOrder').then(rs => {
                this.toatalOrders = rs.data
            }).catch(erro => {
                console.log(erro)
            })
        }
    }
}
</script>

<style></style>