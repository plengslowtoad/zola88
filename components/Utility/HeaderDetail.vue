<template>
  <v-col cols="12" class="tw-bg-black/[.60]">
    <v-row no-gutters>
      <v-col cols="12" class="text-center">
        <p class="tw-text-[40px] tw-font-bold tw-text-white mt-10 mb-8">{{ header }}</p>
      </v-col>
    </v-row>
    <v-row no-gutters class="pb-12">
      <v-col cols="1"> </v-col>
      <!-- <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="5">
            <v-row no-gutters class="tw-bg-red-200">
              <v-col cols="12" class="tw-border-4 tw-border-b-[#f7b402]">
              </v-col>
              <v-col cols="12"> </v-col>
            </v-row>
          </v-col>

          <v-col cols="2" class="text-center">
            <v-icon large color="warning">mdi-crown</v-icon>
          </v-col>

          <v-col cols="5">
            <v-row no-gutters>
              <v-col cols="12" class="tw-border-4 tw-border-b-[#f7b402]">
              </v-col>
              <v-col cols="12"> </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col> -->

      <v-col cols="10" class="text-center">
        <v-icon large color="warning">mdi-crown</v-icon>
      </v-col>

      <v-col cols="1"> </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
      default: "รายงานการบริจาค",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>