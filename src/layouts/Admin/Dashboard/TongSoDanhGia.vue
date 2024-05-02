<template>
    <v-card bg-color="white" height="70px">
        <v-row>
            <v-col cols="4" class="text-center justify-center">
                <v-btn class="ma-2" color="blue" icon=" mdi-ammunition"></v-btn>
            </v-col>
            <v-col cols="8">
                <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng sản phẩm</p>
                <span style="font-weight: bold;" class="ml-1 text-black">{{ toatalproduct }} sản phẩm</span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            toatalproduct: 0,
        }
    },
    created() {
        this.gettoatalproduct()
    },
    methods:
    {
        gettoatalproduct() {
            axios.get('http://localhost:5224/api/DashBoard/getTotalProduct').then(rs => {
                this.toatalproduct = rs.data
            }).catch(erro => {
                console.log(erro)
            })
        }
    }
}
</script>

<style></style>