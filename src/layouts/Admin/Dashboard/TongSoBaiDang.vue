<template>
    <v-card bg-color="white" height="70px">
        <v-row>
            <v-col cols="4" class="text-center justify-center">
                <v-btn class="ma-2" color="blue" icon=" mdi-ammunition"></v-btn>
            </v-col>
            <v-col cols="8">
                <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng số bài đăng</p>
                <span style="font-weight: bold;" class="ml-1 text-black">{{ toatalpost }}Tổng số bài đăng</span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            toatalpost: 0,
        }
    },
    created() {
        this.gettoatalpost()
    },
    methods:
    {
        gettoatalpost() {
            axios.get('http://localhost:5224/api/DashBoard/getTotalProduct').then(rs => {
                this.toatalpost = rs.data
            }).catch(erro => {
                console.log(erro)
            })
        }
    }
}
</script>

<style></style>