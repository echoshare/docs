import { GitContributors } from "E:/develop/docs-echoshare/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.85_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.7_@type_5iootvs7pf727kpx646q4sq6wy/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "E:/develop/docs-echoshare/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.85_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.7_@type_5iootvs7pf727kpx646q4sq6wy/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
