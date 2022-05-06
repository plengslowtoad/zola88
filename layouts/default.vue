<template>
  <v-app>
    <v-row >
      <v-col cols="12" >asd</v-col>
    </v-row>
    <v-main>
      <v-container>
        <v-row>
          <Nuxt />
        </v-row>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
