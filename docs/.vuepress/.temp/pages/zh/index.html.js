import comp from "E:/develop/docs-echoshare/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"首页\",\"lang\":\"简体中文\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://i.postimg.cc/nLP9DHWn/just-logo.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/zh/get-started\",\"type\":\"primary\"},{\"text\":\"在线体验\",\"link\":\"https://echoshare.site\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"🖥️ 屏幕共享\",\"details\":\"实时展示您的屏幕，让沟通更直观。\"},{\"title\":\"📹 摄像头共享\",\"details\":\"面对面交流，增强远程协作的临场感。\"},{\"title\":\"🔊 音频共享\",\"details\":\"清晰传递系统声音，确保完整的音频体验。\"},{\"title\":\"🎙️ 麦克风共享\",\"details\":\"实时语音沟通，让交流更顺畅。\"},{\"title\":\"⏳ 本地历史记录\",\"details\":\"轻松回顾共享记录，方便快捷。\"},{\"title\":\"🔗 自定义 webhook\",\"details\":\"灵活集成其他系统，实现自动化工作流。\"},{\"title\":\"🔄 中断后自动拉取\",\"details\":\"网络中断也能自动恢复，保证共享的连续性。\"},{\"title\":\"📱 支持 PWA\",\"details\":\"像原生应用一样使用，体验更流畅。\"},{\"title\":\"🌍 多语言支持\",\"details\":\"满足全球用户需求，沟通无障碍。\"}],\"footer\":\"EchoShare © 2025\"},\"headers\":[],\"git\":{\"updatedTime\":1742359326000,\"contributors\":[{\"name\":\"shawroger\",\"username\":\"shawroger\",\"email\":\"roger2000s@outlook.com\",\"commits\":2,\"url\":\"https://github.com/shawroger\"}],\"changelog\":[{\"hash\":\"a42b1a166b42d857dd96023fee24eb5a6ac47dcd\",\"time\":1742359326000,\"email\":\"roger2000s@outlook.com\",\"author\":\"shawroger\",\"message\":\"add usage\"},{\"hash\":\"c0cebd358e4a5e2565408ab4adb06666e7a10c75\",\"time\":1742304123000,\"email\":\"roger2000s@outlook.com\",\"author\":\"shawroger\",\"message\":\"init\"}]},\"filePathRelative\":\"zh/README.md\"}")
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
