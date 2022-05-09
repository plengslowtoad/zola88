<template>
  <v-col cols="12" class="bg-header">
    <v-row no-gutters>
      <HeaderDetail header="วิธีเล่นเกม" />
    </v-row>

    <div class="pa-5">
      <div class="tw-grid tw-grid-rows-1 tw-grid-flow-col tw-gap-5">
        <div
          class="
            tattoo-item
            tw-rounded-xl tw-border-solid tw-border-2 tw-border-transparent
            hover:tw-border-yellow-500
          "
          v-for="(item, index) in articlesListMock"
          :key="index"
          @click="goDetail(item)"
        >
          <img :src="item.src" alt="" class="tw-rounded-t-xl" />

          <div class="pa-4">
            <p class="tw-text-[20px] tw-font-bold tw-text-[#f7b402] mb-0">
              {{ item.title }}
            </p>
            <!-- <p class="tw-text-[13px] tw-text-[#D5D5D5] mb-0">
              {{ item.content }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      articlesListMock: [
        {
          src: "https://zola88.com/wp-content/uploads/2021/11/img-tiker.webp",
          title: "วิธีเล่นเสือ-มังกร",
          content:
            "จุดดึงดูดของเกม บาคาร่าออนไลน์ SA คือทางเลือกของคุณ และเกมมีหลายรูปแบบ ได้แก่ classic baccarat, Super Six Baccarat, Cow Cow Baccarat , Squeeze Baccarat , Speed Baccrarat  เกมบาคาร่าทุกรูปแบบมีความแตกต่าง",
        },
        {
          src: "https://zola88.com/wp-content/uploads/2021/11/img-lotto.webp",
          title: "วิธีการแทงหวยออนไลน์",
          content:
            "เกมยิงปลาออนไลน์ เล่นง่าย ได้เงินจริง ขั้นแรก เลือกเว็บไซต์ที่น่าเชื่อถือ แล้วเลือกยิงปลาเล็กก่อน สองสิ่งนี้เท่านั้นที่เล่นเกมยิงปลาได้เงินจริง เกมยิงปลาออนไลน์ เล่นง่าย ยิงปลาให้ตาย และทำเงิน คุณสามารถยิงปลาใหญ่จนตายได้มาก ยิ่งมีรายได้",
        },
        {
          src: "https://zola88.com/wp-content/uploads/2021/11/img-baccara-1.webp",
          title: "วิธีเล่นบาคาร่า",
          content:
            "เกมพนันออนไลน์ ที่วิวัฒนาการมาจากเกมหยอดเหรียญ ได้แปลงเป็นรูปแบบออนไลน์ เล่นง่าย กราฟิกสวยงาม เอฟเฟกต์ชัดเจน น่าตื่นเต้น เกมยิงปลาออนไลน์ ที่สนุกและเพลิดเพลิน สามารถเล่นผ่านเว็บบราวเซอร์หรือมือถือ เพื่อตอบสนองความ",
        },
        {
          src: "https://zola88.com/wp-content/uploads/2021/11/img-chicken.webp",
          title: "วิธีเล่นไก่ชน",
          content:
            "สูตรเซียนบาคาร่าล้มโต๊ะ หากคุณเป็นนักพนันอย่าพลาดที่จะรับสิ่งเหล่านี้ ทักษะที่ใช้ในการลงทุนเกมการพนันอย่างเด็ดขาด ถือเป็นแนวทาง วิธีเล่นบาคาร่าใหไดเงน ทเหลาเซยนบาคาราเหลานไมควรพลาด และทสำคญความแมนยำกสงดวยจงทำให",
        },
      ],
    };
  },
  methods: {
    goDetail(item) {
      console.log("item", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.tattoo-item {
  background-color: rgba(0, 0, 0, 0.404);
}

.tattoo-item img {
  display: block;
  width: 100%;
  cursor: zoom-in;
}

.bg-header {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url(https://zola88.com/wp-content/uploads/2021/08/bg.png);
}
</style>