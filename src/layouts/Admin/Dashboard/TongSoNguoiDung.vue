<template>
    <v-card bg-color="white" height="70px">
        <v-row>
            <v-col cols="4" class="text-center justify-center">
                <v-btn class="ma-2" color="green" icon="mdi-account-circle"></v-btn>
            </v-col>
            <v-col cols="8">
                <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng Khách Hàng</p>
                <span style="font-weight: bold;" class="ml-1 text-black">{{ toatalClient }} khách hàng</span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    name: 'TongKhachHang',
    data() {
        return {
            toatalClient: 0,
        }
    },
    created() {
        this.gettoatalClient()
    },
    methods:
    {
        gettoatalClient() {
            axios.get('http://localhost:5224/api/DashBoard/getToatlAccountClient').then(rs => {
                this.toatalClient = rs.data
            }).catch(erro => {
                console.log(erro)
            })
        }
    }
}
</script>

<style></style>