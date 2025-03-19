<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1>
<p align="center">
  <img src="https://i.postimg.cc/d0M9TjZW/echoshare-mobile-left.png" width="200" alt="just-logo">
</p>
<p>Echoshare 是一款开箱即用且支持高度自定义配置的在线媒体共享应用。</p>
<p>基于 WebRTC 技术，Echoshare 提供高效、低延迟的在线屏幕共享功能，可同时传输屏幕画面、摄像头视频流、麦克风音频流以及系统音频，全面满足多样化的远程协作需求。</p>
<h2 id="使用须知" tabindex="-1"><a class="header-anchor" href="#使用须知"><span>使用须知</span></a></h2>
<ol>
<li>为了确保 EchoShare 的正常运行，请确认您的浏览器支持 WebRTC 技术。首次使用时，系统将请求您授予摄像头和麦克风权限。若您拒绝授权，可能导致功能受限。您可以在浏览器的网页权限设置中查看或修改这些权限。</li>
</ol>
<p><img src="https://i.postimg.cc/5tjjsgYN/image.png" alt="网页权限"></p>
<ol start="2">
<li>由于移动端浏览器限制，使用 EchoShare 时，您在手机或平板电脑上仅能共享摄像头和麦克风，屏幕共享功能暂不可用。但接收媒体不受影响。因此，您可以利用 EchoShare 将电脑端的音频传输至移动设备播放，即使电脑本身没有音频输出设备。</li>
</ol>
<h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点</span></a></h2>
<h3 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能"><span>核心功能</span></a></h3>
<ul>
<li>🖥️ <strong>屏幕共享</strong>：实时展示您的屏幕，让沟通更直观。</li>
<li>📹 <strong>摄像头共享</strong>：面对面交流，增强远程协作的临场感。</li>
<li>🔊 <strong>音频共享</strong>：清晰传递系统声音，确保完整的音频体验。</li>
<li>🎙️ <strong>麦克风共享</strong>：实时语音沟通，让交流更顺畅。</li>
</ul>
<h3 id="✨-增强功能" tabindex="-1"><a class="header-anchor" href="#✨-增强功能"><span>✨ 增强功能</span></a></h3>
<ul>
<li>⏳ <strong>本地历史记录</strong>：轻松回顾共享记录，方便快捷。</li>
<li>🔗 <strong>自定义 webhook</strong>：灵活集成其他系统，实现自动化工作流。</li>
<li>🔄 <strong>中断后自动拉取</strong>：网络中断也能自动恢复，保证共享的连续性。</li>
<li>📱 <strong>支持 PWA</strong>：像原生应用一样使用，体验更流畅。</li>
<li>🌍 <strong>多语言支持</strong>：满足全球用户需求，沟通无障碍。</li>
<li>📐 <strong>响应式设计</strong>：适配各种设备，随时随地都能高效工作。</li>
</ul>
<h2 id="立刻使用" tabindex="-1"><a class="header-anchor" href="#立刻使用"><span>立刻使用</span></a></h2>
<h3 id="在线使用" tabindex="-1"><a class="header-anchor" href="#在线使用"><span>在线使用</span></a></h3>
<p>Echoshare 是通过 Vercel 部署的，因此您可以直接在线体验：<a href="https://echoshare.site" target="_blank" rel="noopener noreferrer">https://echoshare.site</a>。</p>
<p>Vercel 是一个功能强大的云服务平台，支持静态和动态网站的快速部署。通过与 GitHub 的无缝集成，Vercel 可以实现代码推送后的自动化部署，同时提供全球 CDN 加速和 HTTPS 自动配置，确保访问速度快且安全。借助 Vercel 的高效部署能力，Echoshare 为用户提供了流畅的在线体验，满足多样化的使用需求。</p>
<p>如果您也想在 Vercel 上部署，可以点击下方按钮：</p>
<p><a href="https://vercel.com/new/clone?repository-url=https://github.com/echoshare/echoshare" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a></p>
<h3 id="本地部署" tabindex="-1"><a class="header-anchor" href="#本地部署"><span>本地部署</span></a></h3>
<p>本应用是一个完全基于前端的项目，因此可以通过以下步骤轻松在本地部署</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 克隆项目地址</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/echoshare/echoshare.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>确保您的系统已安装 Node.js 和 npm（或 yarn）。然后运行以下命令安装项目依赖：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装依赖并编译</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用配置" tabindex="-1"><a class="header-anchor" href="#应用配置"><span>应用配置</span></a></h2>
<p>echoshare 在默认情况下无需任何配置即可使用，但您可以根据需要进行自定义配置，所有的配置项都在 <code v-pre>/~settings</code> 路由下。</p>
<p><img src="https://i.postimg.cc/ZntKjm64/image.pngg" alt="配置页面"></p>
<h3 id="自定义-peer-节点" tabindex="-1"><a class="header-anchor" href="#自定义-peer-节点"><span>自定义 peer 节点</span></a></h3>
<p>echoshare 使用 <a href="https://github.com/peers/peerjs-server" target="_blank" rel="noopener noreferrer">peer-server</a> 作为 WebRTC API，在默认情况下使用 <code v-pre>https://0.peerjs.com</code> 作为 peer 节点。</p>
<p>如果想要使用自定义 peer 节点，可以在设置页面中输入对应的 server 地址。</p>
<p>具体配置样例如下：</p>
<ol>
<li>节点位于 443 端口下</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your.server.com/custom-path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>节点位于其他端口下</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your.server.com:3456/custom-path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>节点配置了 <a href="https://peerjs.com/docs/#peer-options-key" target="_blank" rel="noopener noreferrer">key 属性</a></li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your.server.com:3456/custom-path?key=your-key</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="自定义-stun-turn-服务器" tabindex="-1"><a class="header-anchor" href="#自定义-stun-turn-服务器"><span>自定义 STUN/TURN 服务器</span></a></h3>
<p>特殊情况下，您还需要配置 STUN/TURN 服务器，具体配置样例如下：</p>
<ol>
<li>有 STUN 服务器的配置接口</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your-stun-api.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后点击下方按钮，echoshare 会通过该接口获取 STUN 服务器地址，并转为 json 格式保存。</p>
<ol start="2">
<li>手动输入 json 格式配置</li>
</ol>
<p>输入后点击保存，只需要输入数组格式的配置即可。</p>
<h2 id="自定义-webhook" tabindex="-1"><a class="header-anchor" href="#自定义-webhook"><span>自定义 webhook</span></a></h2>
<p>echoshare 提供了自定义 webhook 的功能，您可以在 <code v-pre>/~webhook</code> 路由中输入对应的 webhook 地址。通过 webhook，您可以实现自动化工作流，例如在共享结束后自动发送通知、自动拉取共享记录等。</p>
<h3 id="自定义-data" tabindex="-1"><a class="header-anchor" href="#自定义-data"><span>自定义 data</span></a></h3>
<p><img src="https://i.postimg.cc/P5JJXTzr/image.png" alt="自定义 data"></p>
<p>echoshare 会在 webhook 中携带以下您在<strong>自定义 data</strong>中填写的内容，方便您在 webhook 中使用。所有的自定义数据都携带在 echoshare 所有请求的 <code v-pre>custom</code> 属性下。</p>
<h3 id="拉取-uid-的-webhook" tabindex="-1"><a class="header-anchor" href="#拉取-uid-的-webhook"><span>拉取 UID 的 webhook</span></a></h3>
<p>该 webhook 本身是一个 GET 请求，您可以在目标地址中获取到共享的 UID，主要用于接收媒体。</p>
<p>请注意，目标地址必须是一个提供 GET 接口 URL，且返回 data 中须含有 <code v-pre>uid</code> 项，否则 echoshare 将不会解析 UID。</p>
<p>echoshare 在该请求中携带的参数：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"on-get"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"receive"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"{current-timestamp}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推送-uid-的-webhook" tabindex="-1"><a class="header-anchor" href="#推送-uid-的-webhook"><span>推送 UID 的 webhook</span></a></h3>
<p>该 webhook 本身是一个 POST 请求，当您分享媒体流并且生成 UID 功后，echoshare 会向目标地址发送 POST 请求，内容如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"uid"</span><span class="token operator">:</span> <span class="token string">"{your-uid}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"on-post"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"share"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"{current-timestamp}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"your-custom-data"</span><span class="token operator">:</span> <span class="token string">"{your-custom-data}"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="媒体流成功收发的-webhook" tabindex="-1"><a class="header-anchor" href="#媒体流成功收发的-webhook"><span>媒体流成功收发的 webhook</span></a></h3>
<p>该 webhook 本身是一个 POST 请求，当您成功分享或接收媒体流后，echoshare 会向目标地址发送 POST 请求，内容如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"uid"</span><span class="token operator">:</span> <span class="token string">"{your-uid}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"on-success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"{share | receive}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"{current-timestamp}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"your-custom-data"</span><span class="token operator">:</span> <span class="token string">"{your-custom-data}"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="媒体流收发失败的-webhook" tabindex="-1"><a class="header-anchor" href="#媒体流收发失败的-webhook"><span>媒体流收发失败的 webhook</span></a></h3>
<p>该 webhook 本身是一个 POST 请求，当您分享或接收媒体流失败后，echoshare 会向目标地址发送 POST 请求，内容如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"uid"</span><span class="token operator">:</span> <span class="token string">"{your-uid}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"fail"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"on-fail"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"{share | receive}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"{current-timestamp}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"your-custom-data"</span><span class="token operator">:</span> <span class="token string">"{your-custom-data}"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数"><span>路由参数</span></a></h2>
<p>Echoshare 提供了一些路由参数，方便您在不同场景下使用。</p>
<h3 id="自动全屏媒体接收功能-😍" tabindex="-1"><a class="header-anchor" href="#自动全屏媒体接收功能-😍"><span>自动全屏媒体接收功能 😍</span></a></h3>
<p>该功能主要用于将媒体共享为全屏的视频和音频媒体流，可作为虚拟摄像头的媒体来源使用。具体操作中，可以通过将接收媒体的路由从 <code v-pre>receive</code> 切换为 <code v-pre>view</code> 来实现媒体的直接查看和使用，从而满足多样化的应用场景需求。</p>
<p>例如 <code v-pre>https://echoshare.site/~receive?uid=your-uid</code> 可以替换为：<code v-pre>https://echoshare.site/~view?uid=your-uid</code> 即可实现自动全屏媒体接收功能。</p>
<h3 id="自动播放" tabindex="-1"><a class="header-anchor" href="#自动播放"><span>自动播放</span></a></h3>
<p>如果想要在接收媒体时自动播放，可以在接收媒体的路由中添加 <code v-pre>autoplay</code> 参数。</p>
<p>例如 <code v-pre>https://echoshare.site/~receive?uid=your-uid</code> 可以替换为：<code v-pre>https://echoshare.site/~receive?uid=your-uid&amp;autoplay=true</code> 即可实现自动播放功能。</p>
</div></template>


