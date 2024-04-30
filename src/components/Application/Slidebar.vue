<template>
  <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="500" >
      <div class="d-flex fill-height justify-center align-center">
        <v-img :src="slide.src" object-fit="cover"></v-img>
      </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "SlidebarComponet",
  data() {
    return {
      slides: [
        {
          src: "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FUcvcfUTYee0oRvekvI9K8zaCMCuJU3JE1G96GzRY2JU%2Fpreset%3Araw%2Fplain%2Fa9ad0f1e7102ae6b4e9ddc12cb6a9620-2828674230988306341.jpg&w=3840&q=75",
        },
        {
          src: "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FF1Iy8pIV295wRSonsdRDkQyFRY2Thcip3egSSilkyBg%2Fpreset%3Araw%2Fplain%2F9b8dc9ce0f6367d20b2b06856688d446-2820459848732268726.jpg&w=3840&q=75",
        },
        {
          src: "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FB_jsVXBb0fUQTy6FFB_2UK5iG0YRrfV-3cvBq-gzGqo%2Fpreset%3Araw%2Fplain%2F44fee9abc18a4b9995cc7b79c4df6249-2867429272132656523.jpg&w=3840&q=75",
        },
        {
          src: "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FveScoYPqB2TIpSbs2HCMOY6ZDVpcs21DlBQWp5a3Up8%2Fpreset%3Araw%2Fplain%2Fee1123abbc4c91975cf7a5f42c046d5b-2816676295139993019.jpg&w=3840&q=75",
        },
      ],
    };
  },
};
</script>

<style>
.v-carousel {
  width: 100%;
}

.v-carousel-item {
  height: 100vh;
  width: 100%;
}

.v-img {
  object-fit: cover;
  height: 100%;
}
</style>
