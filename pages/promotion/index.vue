<template>
  <v-col cols="12" class="bg-header">
    <v-row no-gutters>
      <HeaderDetail header="โปรโมชั่น" />
    </v-row>

    <div class="py-5 px-10">
      <div
        class="app-container my-8"
        v-for="(item, index) in promotionsListMock"
        :key="index"
      >
        <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-bg-black/[.60]">
          <div class="tattoo-item mt-4">
            <img :src="item.src" alt="" />

            <p
              class="tw-text-[25px] tw-font-bold tw-text-white text-center mt-8"
            >
              {{ item.title }}
            </p>
            <p class="tw-text-[25px] tw-text-white text-center">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="$device.isDesktop">Desktop</div>
    <div v-else-if="$device.isTablet">Tablet</div>
    <div v-else>Mobile</div> -->
  </v-col>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>


<style lang="scss" scoped>
.app-container {
  // max-width: 1100px;
  max-width: 68.75rem;
  margin-left: auto;
  margin-right: auto;
}

.tattoo-item img {
  // max-width: 750px;
  // max-width: 46.875rem;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.404);
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