# 快速上手

<p align="center">
  <img src="https://i.postimg.cc/d0M9TjZW/echoshare-mobile-left.png" width="200" alt="just-logo">
</p>

Echoshare 是一款开箱即用且支持高度自定义配置的在线媒体共享应用。

基于 WebRTC 技术，Echoshare 提供高效、低延迟的在线屏幕共享功能，可同时传输屏幕画面、摄像头视频流、麦克风音频流以及系统音频，全面满足多样化的远程协作需求。

## 使用须知

1. 为了确保 EchoShare 的正常运行，请确认您的浏览器支持 WebRTC 技术。首次使用时，系统将请求您授予摄像头和麦克风权限。若您拒绝授权，可能导致功能受限。您可以在浏览器的网页权限设置中查看或修改这些权限。

![网页权限](https://i.postimg.cc/5tjjsgYN/image.png)

2. 由于移动端浏览器限制，使用 EchoShare 时，您在手机或平板电脑上仅能共享摄像头和麦克风，屏幕共享功能暂不可用。但接收媒体不受影响。因此，您可以利用 EchoShare 将电脑端的音频传输至移动设备播放，即使电脑本身没有音频输出设备。

## 功能特点

### 核心功能

- 🖥️ **屏幕共享**：实时展示您的屏幕，让沟通更直观。
- 📹 **摄像头共享**：面对面交流，增强远程协作的临场感。
- 🔊 **音频共享**：清晰传递系统声音，确保完整的音频体验。
- 🎙️ **麦克风共享**：实时语音沟通，让交流更顺畅。

### ✨ 增强功能

- ⏳ **本地历史记录**：轻松回顾共享记录，方便快捷。
- 💓 **定时心跳检测**：实时检测连接状态。
- 🔗 **自定义 webhook**：灵活集成其他系统，实现自动化工作流。
- 🔄 **中断后自动拉取**：网络中断也能自动恢复，保证共享的连续性。
- 📱 **支持 PWA**：像原生应用一样使用，体验更流畅。
- 🌍 **多语言支持**：满足全球用户需求，沟通无障碍。
- 📐 **响应式设计**：适配各种设备，随时随地都能高效工作。

## 立刻使用

### 在线使用

Echoshare 是通过 Vercel 部署的，因此您可以直接在线体验：[https://echoshare.site](https://echoshare.site)。

Vercel 是一个功能强大的云服务平台，支持静态和动态网站的快速部署。通过与 GitHub 的无缝集成，Vercel 可以实现代码推送后的自动化部署，同时提供全球 CDN 加速和 HTTPS 自动配置，确保访问速度快且安全。借助 Vercel 的高效部署能力，Echoshare 为用户提供了流畅的在线体验，满足多样化的使用需求。

如果您也想在 Vercel 上部署，可以点击下方按钮：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/echoshare/echoshare)

### 本地部署

本应用是一个完全基于前端的项目，因此可以通过以下步骤轻松在本地部署

```bash
# 克隆项目地址
git clone https://github.com/echoshare/echoshare.git
```

确保您的系统已安装 Node.js 和 npm（或 yarn）。然后运行以下命令安装项目依赖：

```bash
# 安装依赖并编译
npm install
npm run build
```

## 应用配置

echoshare 在默认情况下无需任何配置即可使用，但您可以根据需要进行自定义配置，所有的配置项都在 `/~settings` 路由下。

![配置页面](https://i.postimg.cc/ZntKjm64/image.pngg)

### 自定义 peer 节点

echoshare 使用 [peer-server](https://github.com/peers/peerjs-server) 作为 WebRTC API，在默认情况下使用 `https://0.peerjs.com` 作为 peer 节点。

如果想要使用自定义 peer 节点，可以在设置页面中输入对应的 server 地址。

具体配置样例如下：

1. 节点位于 443 端口下

```
https://your.server.com/custom-path
```

2. 节点位于其他端口下

```
https://your.server.com:3456/custom-path
```

3. 节点配置了 [key 属性](https://peerjs.com/docs/#peer-options-key)

```
https://your.server.com:3456/custom-path?key=your-key
```

### 自定义 STUN/TURN 服务器

特殊情况下，您还需要配置 STUN/TURN 服务器，具体配置样例如下：

1. 有 STUN 服务器的配置接口

```
https://your-stun-api.com
```

然后点击下方按钮，echoshare 会通过该接口获取 STUN 服务器地址，并转为 json 格式保存。

2. 手动输入 json 格式配置

输入后点击保存，只需要输入数组格式的配置即可。

## 自定义 webhook

echoshare 提供了自定义 webhook 的功能，您可以在 `/~webhook` 路由中输入对应的 webhook 地址。通过 webhook，您可以实现自动化工作流，例如在共享结束后自动发送通知、自动拉取共享记录等。

### 自定义 data

![自定义 data](https://i.postimg.cc/P5JJXTzr/image.png)

echoshare 会在 webhook 中携带以下您在**自定义 data**中填写的内容，方便您在 webhook 中使用。所有的自定义数据都携带在 echoshare 所有请求的 `custom` 属性下。

### 拉取 UID 的 webhook

该 webhook 本身是一个 GET 请求，您可以在目标地址中获取到共享的 UID，主要用于接收媒体。

请注意，目标地址必须是一个提供 GET 接口 URL，且返回 data 中须含有 `uid` 项，否则 echoshare 将不会解析 UID。

echoshare 在该请求中携带的参数：

```json
{
  "hook": "on-get",
  "action": "receive",
  "timestamp": "{current-timestamp}",
  "custom": {
    "your-custom-data": "{your-custom-data}"
  }
}
```

### 推送 UID 的 webhook

该 webhook 本身是一个 POST 请求，当您分享媒体流并且生成 UID 功后，echoshare 会向目标地址发送 POST 请求，内容如下：

```json
{
  "uid": "{your-uid}",
  "hook": "on-post",
  "action": "share",
  "timestamp": "{current-timestamp}",
  "custom": {
    "your-custom-data": "{your-custom-data}"
  }
}
```

### 媒体流成功收发的 webhook

该 webhook 本身是一个 POST 请求，当您成功分享或接收媒体流后，echoshare 会向目标地址发送 POST 请求，内容如下：

```json
{
  "uid": "{your-uid}",
  "result": "success",
  "hook": "on-success",
  "action": "{share | receive}",
  "timestamp": "{current-timestamp}",
  "custom": {
    "your-custom-data": "{your-custom-data}"
  }
}
```

### 媒体流收发失败的 webhook

该 webhook 本身是一个 POST 请求，当您分享或接收媒体流失败后，echoshare 会向目标地址发送 POST 请求，内容如下：

```json
{
  "uid": "{your-uid}",
  "result": "fail",
  "hook": "on-fail",
  "action": "{share | receive}",
  "timestamp": "{current-timestamp}",
  "custom": {
    "your-custom-data": "{your-custom-data}"
  }
}
```

## 路由参数

Echoshare 提供了一些路由参数，方便您在不同场景下使用。

### 自动全屏媒体接收功能 😍

该功能主要用于将媒体共享为全屏的视频和音频媒体流，可作为虚拟摄像头的媒体来源使用。具体操作中，可以通过将接收媒体的路由从 `receive` 切换为 `view` 来实现媒体的直接查看和使用，从而满足多样化的应用场景需求。

例如 `https://echoshare.site/~receive?uid=your-uid` 可以替换为：`https://echoshare.site/~view?uid=your-uid` 即可实现自动全屏媒体接收功能。

### 自动播放

如果想要在接收媒体时自动播放，可以在接收媒体的路由中添加 `autoplay` 参数。

例如 `https://echoshare.site/~receive?uid=your-uid` 可以替换为：`https://echoshare.site/~receive?uid=your-uid&autoplay=true` 即可实现自动播放功能。