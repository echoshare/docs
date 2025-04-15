export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Quick start"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/zh/get-started.html", { loader: () => import(/* webpackChunkName: "zh_get-started.html" */"E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/zh/get-started.html.js"), meta: {"title":"快速上手"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
