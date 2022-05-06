module.exports = {
  important: true,
  prefix: "tw-",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#173C5D",
        secondary: "#11A294",
        accent: "#006EA0",
        error: "#BD2200",
        info: "#0A42DC",
        success: "#84BD00",
        warning: "#FFC100",
        text2e: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
