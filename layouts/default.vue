<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <v-col cols="12" class="tw-h-[337px] bg-header pa-0 m-0">
            <v-row no-gutters>
              <v-col cols="12">
                <v-btn color="red" class="ml-10 mt-10">
                  <span class="tw-text-white">สมัครสมาชิก</span>
                </v-btn>
                <v-btn outlined color="white" class="ml-5 mt-10">
                  <span class="tw-text-white">สมัครสมาชิก</span>
                </v-btn>
              </v-col>
              <v-col cols="12" class="d-flex justify-center align-center">
                <div>
                  <v-img
                    class="bg-logo"
                    :src="require('../assets/logo-footer.png')"
                    height="300px"
                    width="300px"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            class="tw-h-[65px] tw-bg-[#173C5D] d-flex justify-end align-center"
          >
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F7E18E]
                tw-to-[#394B58]
                tw-text-[33px]
                tw-font-[1000]
                tw-bg-clip-text
                tw-text-transparent
                px-5
              "
              @click="$router.push('/')"
              >หน้าหลัก</span
            >
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F7E18E]
                tw-to-[#394B58]
                tw-text-[33px]
                tw-font-[1000]
                tw-bg-clip-text
                tw-text-transparent
                px-5
              "
              @click="$router.push('/promotion')"
              >โปรโมชั่น</span
            >
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F7E18E]
                tw-to-[#394B58]
                tw-text-[33px]
                tw-font-[1000]
                tw-bg-clip-text
                tw-text-transparent
                px-5
              "
              @click="$router.push('/article')"
              >บทความ</span
            >
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F7E18E]
                tw-to-[#394B58]
                tw-text-[33px]
                tw-font-[1000]
                tw-bg-clip-text
                tw-text-transparent
                px-5
              "
              @click="$router.push('/howtoplay')"
              >วิธีเล่น</span
            >
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F7E18E]
                tw-to-[#394B58]
                tw-text-[33px]
                tw-font-[1000]
                tw-bg-clip-text
                tw-text-transparent
                pl-5
                tw-pr-[120px]
              "
              @click="$router.push('/contactus')"
              >ติดต่อเรา</span
            >
          </v-col>
          <Nuxt />
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="tw-p-0">
      <v-row no-gutters>
        <v-col cols="12" class="tw-h-[720px] bg-footer tw-bg-[#DF3B2E]">
          <v-row no-gutters justify="center">
            <v-col cols="12" class="d-flex justify-center pt-5">
              <div>
                <v-img
                  :src="require('../assets/logo-footer.png')"
                  height="289px"
                  width="291px"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center pt-5">
              <span class="tw-text-white tw-font-[400] tw-text-[26px]"
                >ฝาก – ถอน กับธนาคารชั้นนำ</span
              >
            </v-col>
            <v-col cols="12" class="d-flex justify-center pt-5">
              <span class="tw-text-white tw-font-[400] tw-text-[32px]"
                >ตลอด 24 ชม.</span
              >
            </v-col>
            <v-col cols="12" class="d-flex justify-center pt-5">
              <span class="px-3">
                <v-img
                  :src="require('../assets/logo-scb.png')"
                  height="60px"
                  width="60px"
                ></v-img
              ></span>
              <span class="px-3">
                <v-img
                  :src="require('../assets/logo-ktb.png')"
                  height="60px"
                  width="60px"
                ></v-img
              ></span>
              <span class="px-3">
                <v-img
                  :src="require('../assets/logo-krungsri.png')"
                  height="60px"
                  width="60px"
                ></v-img
              ></span>
              <span class="px-3">
                <v-img
                  :src="require('../assets/logo-gsb.png')"
                  height="60px"
                  width="60px"
                ></v-img
              ></span>
              <span class="px-3">
                <v-img
                  :src="require('../assets/logo-ttb.png')"
                  height="60px"
                  width="60px"
                ></v-img
              ></span>
            </v-col>
            <v-col cols="12" class="d-flex justify-center pt-5">
              <span class="tw-text-white tw-font-[400] tw-text-[26px]"
                >รองรับทั้งระบบ IOS & ANDROID</span
              >
            </v-col>
            <v-col cols="4"></v-col>
            <v-col cols="4" class="d-flex justify-center pt-5">
              <span class="px-3">
                <v-img
                  :src="require('../assets/googleplay.png')"
                  max-height="100px"
                ></v-img
              ></span>
              <span class="px-3">
                <v-img
                  :src="require('../assets/appstore.png')"
                  max-height="100px"
                ></v-img
              ></span>
            </v-col>
            <v-col cols="4" class="d-flex justify-start pt-5">
              <span class="px-3">
                <v-img
                  :src="require('../assets/img-qr.png')"
                  max-height="100px"
                  max-width="100px"
                ></v-img
              ></span>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <span>COPYRIGHT © 2021. ZOLA88.COM. ALL RIGHT RESERVED.</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bg-header {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/bg-header.png");
}

.bg-footer {
  background-repeat: no-repeat;
  background-image: url("../assets/footer-imgconner.png");
  background-size: contain;
}

.bg-logo {
  position: relative;
  bottom: 40px;
}
</style>
