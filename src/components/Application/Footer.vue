<template>
    <v-footer dark padless>
        <v-card cols="8" sm="12" md="12" lg="4" flat tile class="black white--text py-6 px-14"
            style=" border-radius: 12px;background-color: #F7F8FA">
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="4">
                    <div class="d-flex align-items-center">
                        <v-img :src="logo" style="width: 100px; height:100px"></v-img>
                    </div>
                    <v-card-text class="text-center">
                        <v-btn class="mx-1 white--text" icon fab outlined small>
                            <v-icon size="20px">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn class="mx-1 white--text" icon fab outlined small>
                            <v-icon size="20px">mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn class="mx-1 white--text" icon fab outlined small>
                            <v-icon size="20px">mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn class="mx-1 white--text" icon fab outlined small>
                            <v-icon size="20px">mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="4">
                    <v-card-text class="white--text pt-0">
                        <h3 style="font-weight: bold; font-size: 20px;">Tại Hà Nội</h3>
                    </v-card-text>
                    <v-card-text class="grey--text">Địa Chỉ: Số 110 Lạc Long Quân, Phường Bưởi , Quận Tây Hồ, Thành phố
                        Hà Nội</v-card-text>
                    <v-card-text class="grey--text mt-n4">Điện thoại: +84.4.3 722 8112, Fax: +84.4.3 722
                        8115</v-card-text>
                    <v-card-text class="grey--text mt-n4">Hotline: 0983 353 885</v-card-text>
                    <v-card-text class="grey--text mt-n4">Email: ceo.vietnamtourist@gmail.com</v-card-text>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="4">
                    <v-card-text class="white--text pt-0">
                        <h3 style="font-weight: bold; font-size: 20px;">Tại Thành Phố Hồ Chí Minh</h3>
                    </v-card-text>
                    <v-card-text class="grey--text">Địa Chỉ: Số 219 đường Võ Văn Tần, Phường 5, Quận 3, Thành phố Hồ
                        Chí Minh</v-card-text>
                    <v-card-text class="grey--text mt-n4">Điện thoại: 0816 222 022</v-card-text>
                    <v-card-text class="grey--text mt-n4">Email: dieuhanh.vietnamtourist@gmail.com</v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>
<script lang="ts" setup>
import logo from "../../assets/image/logo.png"
</script>


<style></style>