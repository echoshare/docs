export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/styles/index.css\"}]],\"locales\":{\"/\":{\"lang\":\"English\",\"title\":\"EchoShare\",\"description\":\"Echoshare is an out-of-the-box, highly customizable online media sharing application\"},\"/zh/\":{\"lang\":\"简体中文\",\"title\":\"EchoShare\",\"description\":\"开箱即用的在线媒体共享应用\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
