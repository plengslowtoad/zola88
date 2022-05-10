<template>
  <v-col cols="12">
    <v-row no-gutters>
      <v-col cols="12" class="tw-h-[730px]">
        <v-img
          max-height="100%"
          max-width="100%"
          :src="require('../assets/bg-banner.png')"
        ></v-img>
      </v-col>
      <v-col cols="12" class="bg-header">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center">
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F8E4D0]
                tw-to-[#B2A89B]
                tw-text-[103px]
                tw-font-[1000]
                tw-bg-clip-text
                tw-text-transparent
                px-5
              "
            >
              Promotion
            </span>
          </v-col>
          <v-col cols="12" class="d-flex justify-center py-15">
            <v-sheet class="mx-auto" max-width="75%">
              <v-slide-group prev-icon="" next-icon="" show-arrows>
                <v-slide-item
                  v-for="n in promotionsListMock"
                  :key="n.src"
                  v-slot="{ toggle }"
                >
                  <v-row no-gutters class="pa-5">
                    <v-col>
                      <v-img
                        @click="toggle"
                        class="tw-border-[8px] tw-border-rose-500"
                        height="364px"
                        max-height="364px"
                        max-width="338px"
                        :src="n.src"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="bg-title tw-h-[550px]">
        <v-row no-gutters class="pa-15">
          <v-col cols="12" class="d-flex justify-start">
            <span
              class="
                tw-bg-gradient-to-t
                tw-from-[#F8E4D0]
                tw-to-[#B2A89B]
                tw-text-[50px]
                tw-font-[400]
                tw-bg-clip-text
                tw-text-transparent
              "
            >
              บทความ
            </span>
          </v-col>
          <v-col cols="10">
            <span class="tw-text-[26px] pa-15"
              >ZOLA 88 คาสิโนออนไลน์ สล็อตออนไลน์ เกมส์ยิงปลา เดิมพันกีฬา
              ครบวงจรที่นี่ที่เดียว เราคือเว็บพนันออนไลน์ อันดับ 1
              ของเอเซียด้วยระบบฝากถอนที่รวดเร็ว ปลอดภัย มั่นคง
              ทำให้ลูกค้าสามารถเล่นเดิมพันออนไลน์ ได้อย่างต่อเนื่องตลอด 24
              ชั่วโมง
              ให้ความรู้สึกเสมือนไปนั่งเล่นอยู่ที่คาสิโนต่างประเทศอย่างแน่นอน
              เรามีเกมส์เดิมพันหลากหลายให้เลือกเล่นครบทุกประเภท ไม่ว่าจะเป็น
              บาคาร่า รูเล็ต ไฮโล แทงบอล บาส ปิงปอง อีสปอร์ต สล็อต ยิงปลา
              ป๊อกเด้ง ปั้นแปะ น้ำเต้าปูปลา
              และเกมส์อื่นๆอีกมากมายที่มีให้เลือกเข้าไป
              เล่นโดยไม่ต้องมีการโยย้ายกระเป๋าเงินอีกต่อไป
              ยังไม่หมดเพียงเท่านี้เรายังมีโปรโมชั่นและกิจกรรมพิเศษให้
              ร่วมอยู่ตลอด ไม่ว่าจะเป็น เปิดไพ่เสี่ยงโชคกงล้อลุ้นทอง
              โบนัสวันเกิด โบนัสเติมเงิน เรายินดีให้บริการลูกค้า
              ทุกท่านด้วยความใส่ใจจริง พร้อมให้ความช่วยเหลือ ตลอด 24
              ชั่วโมง</span
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="bg-title-2 tw-h-[700px]">
        <v-row no-gutters>
          <v-col cols="3">
            <div>
              <v-img
                max-height="700px"
                max-width="400px"
                :src="require('../assets/home4-girl.png')"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-start">
            <div>
              <v-img
                class="position-card"
                max-height="200%"
                max-width="400px"
                :src="require('../assets/home4-card.png')"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="tw-w-[800px] d-flex justify-end">
              <v-img
                class="postion-main"
                max-height="200%"
                max-width="800px"
                :src="require('../assets/home4-player.png')"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="
          tw-bg-[#202020]
          tw-border-t-[30px]
          tw-border-[#E5493B]
          tw-min-h-[625px]
        "
      >
        <v-col cols="12">
          <span class="tw-text-[#DF3B2E] tw-text-[96px] d-flex justify-center"
            >วิธีเล่นเกม</span
          >
        </v-col>
        <v-col
          cols="12"
          class="tw-min-h-[450px] tw-border-b-[30px] tw-border-[#E5493B]"
        >
          <v-row no-gutters>
            <v-col cols="3">
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-end">
                  <v-img
                    height="173px"
                    max-height="173px"
                    max-width="202"
                    :src="require('../assets/home-cockfight.png')"
                  ></v-img>
                </v-col>
                <v-col class="d-flex justify-end" cols="12">
                  <span class="tw-text-[56px] tw-text-white">ชนไก่</span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-center">
                  <v-img
                    height="173px"
                    max-height="173px"
                    max-width="202"
                    :src="require('../assets/home-td.png')"
                  ></v-img>
                </v-col>
                <v-col class="d-flex justify-center" cols="12">
                  <span class="tw-text-[56px] tw-text-white">เสือ มังกร</span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-center">
                  <v-img
                    height="173px"
                    max-height="173px"
                    max-width="202"
                    :src="require('../assets/home-asset.png')"
                  ></v-img>
                </v-col>
                <v-col class="d-flex justify-center" cols="12">
                  <span class="tw-text-[56px] tw-text-white">หวย</span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-start">
                  <v-img
                    height="173px"
                    max-height="173px"
                    max-width="202"
                    :src="require('../assets/home-poker.png')"
                  ></v-img
                ></v-col>
                <v-col class="d-flex justify-start" cols="12">
                  <span class="tw-text-[56px] tw-text-white">บาคาร่า</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="tw-min-h-[1400px] pa-0 bg-title-3">
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-center">
              <v-img
                class="position-game"
                max-height="621"
                max-width="613"
                :src="require('../assets/home5-player.png')"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <v-row no-gutters class="px-15 pb-15">
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img1.png')"
                    ></v-img>
                  </span>
                </v-col>
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img2.png')"
                    ></v-img>
                  </span>
                </v-col>
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img3.png')"
                    ></v-img>
                  </span>
                </v-col>
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img4.png')"
                    ></v-img>
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row no-gutters class="pa-15">
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img5.png')"
                    ></v-img>
                  </span>
                </v-col>
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img6.png')"
                    ></v-img>
                  </span>
                </v-col>
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img7.png')"
                    ></v-img>
                  </span>
                </v-col>
                <v-col cols="3" class="px-3">
                  <span class="tw-text-white tw-text-[60px]">
                    <v-img
                      max-height="100%"
                      :src="require('../assets/home5-img8.png')"
                    ></v-img>
                  </span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" class="py-10 d-flex justify-center">
              <v-img
                max-height="219px"
                :src="require('../assets/bottom-img1.png')"
              ></v-img>
            </v-col>
            <v-col cols="12" class="py-10 d-flex justify-center">
              <v-img
                max-height="219px"
                :src="require('../assets/bottom-img2.png')"
              ></v-img>
            </v-col>
            <v-col cols="12" class="py-10 d-flex justify-center">
              <v-img
                max-height="219px"
                :src="require('../assets/bottom-img3.png')"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    model: 0,
    promotionsListMock: [
      {
        src: require("@/assets/promotion1.png"),
        title: "",
        content: "",
      },
      {
        src: require("@/assets/promotion2.jpg"),
        title: "แนะนำเพื่อนรับ 20%",
        content:
          "เพียงแนะนำเพื่อนมาเล่นกับเรา รับไปเลย 20% ของยอดฝากเพื่อน ฝากมาก ได้มาก",
      },
      {
        src: require("@/assets/promotion3.jpg"),
        title: "ทุกยอดฝากรับ 20%",
        content:
          "พิเศษสุดๆ ทุกๆ ยอดฝากรับไปเลย 20% เพียงทำยอด 3 เท่า ถึงจะถอนได้",
      },
      {
        src: require("@/assets/promotion4.jpg"),
        title: "รับโบนัส 100%",
        content:
          "โปรโมชั่นพิเศษสุด สมัครใหม่ + ฝากแรกของวัน รับโบนัสไปเลยทันที 100% โดยไม่ต้องทำเทิร์น (ต้องทำยอดให้ได้ 5 เท่าถึงจะถอนได้)",
      },
    ],
    items: [
      {
        src: "https://zola88.com/wp-content/uploads/2021/07/1627039872_33ec925b478f7a669e1c.jpg",
      },
      {
        src: "https://zola88.com/wp-content/uploads/2021/11/img-lotto.webp",
      },
      {
        src: "https://zola88.com/wp-content/uploads/2021/11/img-baccara-1.webp",
      },
      {
        src: "https://zola88.com/wp-content/uploads/2021/11/img-chicken.webp",
      },
    ],
    // colors: [
    //   "indigo",
    //   "warning",
    //   "pink darken-2",
    //   "red lighten-1",
    //   "deep-purple accent-4",
    // ],
  }),
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
  background-image: url("../assets/bg-home2.png");
}
.bg-title {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/home3-img.png");
}

.bg-title-2 {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/home4.png");
}

.bg-title-3 {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/home4.png");
}

.position-card {
  position: relative;
  z-index: 2;
  right: 250px;
  top: 40px;
}

.postion-main {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: -300px;
  left: 270px;
}

.position-game {
  position: relative;
  z-index: 1;
  bottom: 130px;
}

.theme--light.v-sheet {
  background-color: unset;
}
</style>
