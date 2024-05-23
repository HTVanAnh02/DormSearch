<template>
    <v-card bg-color="white" height="70px">
        <v-row>
            <v-col cols="4" class="text-center justify-center">
                <v-btn class="ma-2" color="red" icon="mdi-bell-alert"></v-btn>
            </v-col>
            <v-col cols="8">
                <p style="font-weight: bold;" class="mt-3 ma-0 text-red">Tổng bài đăng cần duyệt</p>
                <span style="font-weight: bold;" class="ml-1 text-black">2</span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'TongSoBaiCanDuyet',
    data() {
        return {
            toatalClient: 0,
        }
    },
    created() {
        // this.gettoatalClient()
    },
    methods:
    {
        //     gettoatalClient() {
        //         axios.get('http://localhost:5224/api/DashBoard/getToatlAccountClient').then(rs => {
        //             this.toatalClient = rs.data
        //         }).catch(erro => {
        //             console.log(erro)
        //         })
        //     }
    }
}
</script>

<style></style>