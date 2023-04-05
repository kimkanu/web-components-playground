import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";

export default defineConfig({
  /* @twind/with-web-components will use
   * hashed class names in production by default
   * If you don't want this, uncomment the next line
   */
  // hash: false,
  presets: [presetTailwind()],
  theme: {
    extend: {
      keyframes: {
        waving: {
          "0%, 100%": {
            transform: "rotate(-7deg)",
            "transform-origin": "bottom",
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            transform: "rotate(7deg)",
            "transform-origin": "bottom",
            "animation-timing-function": "ease-in-out",
          },
        },
      },
      animation: {
        waving: "waving 1s linear infinite",
      },
    },
  },
});
