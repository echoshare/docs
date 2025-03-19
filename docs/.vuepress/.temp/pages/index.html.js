import comp from "E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://i.postimg.cc/nLP9DHWn/just-logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started\",\"type\":\"primary\"},{\"text\":\"Online App\",\"link\":\"https://echoshare.site\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"🖥️ Screen Sharing\",\"details\":\"Share your screen in real-time for more intuitive communication.\"},{\"title\":\"📹 Camera Sharing\",\"details\":\"Enable face-to-face interaction to enhance the sense of presence in remote collaboration.\"},{\"title\":\"🔊 Audio Sharing\",\"details\":\"Deliver system audio clearly to ensure a complete audio experience.\"},{\"title\":\"🎙️ Microphone Sharing\",\"details\":\"Communicate seamlessly with real-time voice sharing.\"},{\"title\":\"⏳ Local History Records\",\"details\":\"Easily review shared content history for quick access.\"},{\"title\":\"🔗 Custom Webhooks\",\"details\":\"Flexibly integrate with other systems to enable automated workflows.\"},{\"title\":\"🔄 Auto Recovery After Interruption\",\"details\":\"Automatically reconnect after network interruptions to ensure continuous sharing.\"},{\"title\":\"📱 PWA Support\",\"details\":\"Use it like a native app for a smoother experience.\"},{\"title\":\"🌍 Multi-language Support\",\"details\":\"Cater to global users with seamless communication across languages.\"}],\"footer\":\"EchoShare © 2025\"},\"headers\":[],\"git\":{\"updatedTime\":1742304123000,\"contributors\":[{\"name\":\"shawroger\",\"username\":\"shawroger\",\"email\":\"roger2000s@outlook.com\",\"commits\":1,\"url\":\"https://github.com/shawroger\"}],\"changelog\":[{\"hash\":\"c0cebd358e4a5e2565408ab4adb06666e7a10c75\",\"time\":1742304123000,\"email\":\"roger2000s@outlook.com\",\"author\":\"shawroger\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
