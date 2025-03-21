import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  head: [["link", { rel: "stylesheet", href: "/styles/index.css" }]],

  locales: {
    "/": {
      lang: "English",
      title: "EchoShare",
      description:
        "Echoshare is an out-of-the-box, highly customizable online media sharing application",
    },
    "/zh/": {
      lang: "简体中文",
      title: "EchoShare",
      description: "开箱即用的在线媒体共享应用",
    },
  },

  theme: defaultTheme({
    logo: "https://i.postimg.cc/j2TV1S2q/navlogo.png",

    locales: {
      "/": {
        navbar: [
          "/",
          "/get-started",
          { text: "Github", link: "https://github.com/echoshare/echoshare" },
        ],
      },
      "/zh/": {
        navbar: [
          "/zh/",
          "/zh/get-started",
          {
            text: "Github ",
            link: "https://github.com/echoshare/echoshare",
          },
        ],
      },
    },
  }),

  bundler: viteBundler(),
});
