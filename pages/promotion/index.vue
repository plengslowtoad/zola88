<template>
  <v-col cols="12">
    <v-row no-gutters>
      <HeaderDetail header="โปรโมชั่น" />
    </v-row>

    <div class="app-section">
      <div class="app-container">
        <div class="app-grid">
          <div
            class="tattoo-item mt-4"
            v-for="(item, index) in promotionsListMock"
            :key="index"
          >
            <img :src="item.src" alt="" />
            <h4>{{ item.title }}</h4>
            <h6>{{ item.content }}</h6>
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
      promotionsListMock: [
        {
          src: "https://zola88.com/wp-content/uploads/2021/12/LINE_ALBUM_zola88.com_๒๑๑๒๒๓_1-768x768.jpg",
          title: "",
          content: "",
        },
        {
          src: "https://zola88.com/wp-content/uploads/2021/12/LINE_ALBUM_zola88.com_๒๑๑๒๒๓_3-768x768.jpg",
          title: "แนะนำเพื่อนรับ 20%",
          content:
            "เพียงแนะนำเพื่อนมาเล่นกับเรา รับไปเลย 20% ของยอดฝากเพื่อน ฝากมาก ได้มาก",
        },
        {
          src: "https://zola88.com/wp-content/uploads/2021/12/LINE_ALBUM_zola88.com_๒๑๑๒๒๓_2-768x768.jpg",
          title: "ทุกยอดฝากรับ 20%",
          content:
            "พิเศษสุดๆ ทุกๆ ยอดฝากรับไปเลย 20% เพียงทำยอด 3 เท่า ถึงจะถอนได้",
        },
        {
          src: "https://zola88.com/wp-content/uploads/2021/12/LINE_ALBUM_zola88.com_๒๑๑๒๒๓_0-768x768.jpg",
          title: "รับโบนัส 100%",
          content:
            "โปรโมชั่นพิเศษสุด สมัครใหม่ + ฝากแรกของวัน รับโบนัสไปเลยทันที 100% โดยไม่ต้องทำเทิร์น (ต้องทำยอดให้ได้ 5 เท่าถึงจะถอนได้)",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.app-section {
  padding: 20px;
}

.app-container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.404);
}

.app-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
}

.tattoo-item img {
  display: block;
  width: 100%;
  cursor: zoom-in;
}
</style>