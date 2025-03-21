<template><div><h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start"><span>Quick start</span></a></h1>
<p align="center">
<img src="https://i.postimg.cc/d0M9TjZW/echoshare-mobile-left.png" width="200" alt="just-logo">
</p>
<p>Echoshare is an out-of-the-box and highly customizable configuration-enabled online media sharing application.</p>
<p>Based on WebRTC technology, Echoshare provides efficient, low-latency online screen sharing that simultaneously transmits screen shots, camera video streams, microphone audio streams, and system audio to meet diverse remote collaboration needs.</p>
<h2 id="usage-instructions" tabindex="-1"><a class="header-anchor" href="#usage-instructions"><span>Usage Instructions</span></a></h2>
<ol>
<li>To ensure EchoShare functions correctly, please verify that your browser supports WebRTC technology. Upon initial use, the system will request permission to access your camera and microphone. Denying these permissions may result in limited functionality. You can review or modify these permissions in your browser's website settings.</li>
</ol>
<p><img src="https://i.postimg.cc/5tjjsgYN/image.png" alt="web permissions"></p>
<ol start="2">
<li>Due to mobile browser limitations, when using EchoShare on a mobile phone or tablet, you can only share your camera and microphone; screen sharing is not currently available. However, media reception is unaffected. Therefore, you can use EchoShare to transmit audio from a computer to a mobile device for playback, even if the computer itself lacks audio output capabilities.</li>
</ol>
<h2 id="functional-features" tabindex="-1"><a class="header-anchor" href="#functional-features"><span>Functional features</span></a></h2>
<h3 id="core-functionality" tabindex="-1"><a class="header-anchor" href="#core-functionality"><span>Core functionality</span></a></h3>
<ul>
<li>🖥️ <strong>Screen Sharing</strong>: Show your screen in real time for more intuitive communication.</li>
<li>📹 <strong>Camera sharing</strong>: face-to-face communication to enhance the sense of presence in remote collaboration.</li>
<li>🔊 <strong>AUDIO SHARING</strong>: Clearly conveys system sound to ensure a complete audio experience.</li>
<li>🎙️ <strong>Microphone Sharing</strong>: real-time voice communication for smoother exchanges.</li>
</ul>
<h3 id="✨-enhancements" tabindex="-1"><a class="header-anchor" href="#✨-enhancements"><span>✨ Enhancements</span></a></h3>
<ul>
<li>⏳ <strong>Local History</strong>: easily review shared records for convenience.</li>
<li>💓 <strong>Heartbeat detection</strong>: real-time detection of connection status.</li>
<li>🔗 <strong>Customize webhook</strong>: Flexible integration with other systems for automated workflows.</li>
<li>🔄 <strong>Automatic pull after interruption</strong>: automatic recovery even when the network is interrupted, ensuring continuity of sharing.</li>
<li>📱 <strong>Support PWA</strong>: Use it like a native app for a smoother experience.</li>
<li>🌍 <strong>Multi-language support</strong>: meet the needs of global users, communication without barriers.</li>
<li>📐 <strong>Responsive design</strong>: adapts to a wide range of devices, so you can work efficiently anytime, anywhere.</li>
</ul>
<h2 id="use-it-now" tabindex="-1"><a class="header-anchor" href="#use-it-now"><span>Use it now</span></a></h2>
<h3 id="online-use" tabindex="-1"><a class="header-anchor" href="#online-use"><span>Online use</span></a></h3>
<p>Echoshare is deployed through Vercel, so you can experience it directly online: <a href="https://echoshare.site" target="_blank" rel="noopener noreferrer">https://echoshare.site</a>.</p>
<p>Vercel is a powerful cloud services platform that supports rapid deployment of static and dynamic websites. Seamlessly integrated with GitHub, Vercel automates deployment after code push, while providing global CDN acceleration and HTTPS auto-configuration to ensure fast and secure access. With Vercel's efficient deployment capabilities, Echoshare provides users with a smooth online experience that meets a wide variety of usage needs.</p>
<p>If you would also like to deploy on Vercel, you can do so by clicking the button below:</p>
<p><a href="https://vercel.com/new/clone?repository-url=https://github.com/echoshare/echoshare" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a></p>
<h3 id="local-deployment" tabindex="-1"><a class="header-anchor" href="#local-deployment"><span>Local deployment</span></a></h3>
<p>This application is a completely front-end based project, so it can be easily deployed locally by following these steps</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># Clone the project address</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/echoshare/echoshare.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Make sure you have Node.js and npm (or yarn) installed on your system. Then run the following command to install the project dependencies:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># Install dependencies and compile</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-configuration" tabindex="-1"><a class="header-anchor" href="#application-configuration"><span>Application configuration</span></a></h2>
<p>echoshare works by default without any configuration, but you can customize the configuration as needed, all the configuration items are under the <code v-pre>/~settings</code> route.</p>
<p><img src="https://i.postimg.cc/ZntKjm64/image.pngg" alt="Configuration page"></p>
<h3 id="customize-peer-nodes" tabindex="-1"><a class="header-anchor" href="#customize-peer-nodes"><span>Customize peer nodes</span></a></h3>
<p>echoshare uses <a href="https://github.com/peers/peerjs-server" target="_blank" rel="noopener noreferrer">peer-server</a> as the WebRTC API and <code v-pre>https://0.peerjs.com</code> as the peer node by default.</p>
<p>If you want to use a customized peer node, you can enter the corresponding server address in the Settings page.</p>
<p>A sample configuration is shown below:</p>
<ol>
<li>Node located under port 443</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your.server.com/custom-path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Nodes are located under other ports</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your.server.com:3456/custom-path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>Node configured with <a href="https://peerjs.com/docs/#peer-options-key" target="_blank" rel="noopener noreferrer">key attribute</a></li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your.server.com:3456/custom-path?key=your-key</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="customizing-the-stun-turn-server" tabindex="-1"><a class="header-anchor" href="#customizing-the-stun-turn-server"><span>Customizing the STUN/TURN server</span></a></h2>
<p>In special cases, you also need to configure the STUN/TURN server, as shown in the following example:</p>
<h3 id="configuration-interface-with-stun-server" tabindex="-1"><a class="header-anchor" href="#configuration-interface-with-stun-server"><span>Configuration interface with STUN server</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://your-stun-api.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Then click the button below, echoshare will get the STUN server address through this interface and save it in json format.</p>
<h3 id="manually-enter-the-configuration-in-json-format" tabindex="-1"><a class="header-anchor" href="#manually-enter-the-configuration-in-json-format"><span>manually enter the configuration in json format</span></a></h3>
<p>Enter and click save, just enter the configuration in array format.</p>
<h2 id="customize-webhook" tabindex="-1"><a class="header-anchor" href="#customize-webhook"><span>Customize webhook</span></a></h2>
<p>echoshare provides the ability to customize webhook, you can enter the corresponding webhook address in <code v-pre>/~webhook</code> route. With webhooks, you can automate workflows, such as sending notifications when a share ends, pulling share records automatically, and so on.</p>
<h3 id="customize-data" tabindex="-1"><a class="header-anchor" href="#customize-data"><span>Customize data</span></a></h3>
<p><img src="https://i.postimg.cc/P5JJXTzr/image.png" alt="custom data"></p>
<p>echoshare carries the following content that you fill in <strong>custom data</strong> in the webhook for your convenience. All custom data is carried under the <code v-pre>custom</code> attribute in all echoshare requests.</p>
<h3 id="pull-the-uid-webhook" tabindex="-1"><a class="header-anchor" href="#pull-the-uid-webhook"><span>pull the UID webhook</span></a></h3>
<p>The webhook itself is a GET request, and you can get the shared UID in the destination address, which is mainly used for receiving media.</p>
<p>Note that the destination must be a URL that provides a GET interface and the return data must contain a <code v-pre>uid</code> entry, otherwise echoshare will not resolve the UID.</p>
<p>echoshare The parameters carried in this request:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"hook"</span><span class="token operator">:</span> <span class="token string">"on-get"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"receive"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"{current-timestamp}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"your-custom-data"</span><span class="token operator">:</span> <span class="token string">"{your-custom-data}"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push-uid-webhook" tabindex="-1"><a class="header-anchor" href="#push-uid-webhook"><span>push UID webhook</span></a></h3>
<p>The webhook itself is a POST request. When you share a stream and generate a UID credit, echoshare sends a POST request to the destination address, which looks like this:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="successful-webhooks-for-media-streaming" tabindex="-1"><a class="header-anchor" href="#successful-webhooks-for-media-streaming"><span>Successful webhooks for media streaming</span></a></h3>
<p>The webhook itself is a POST request. When you successfully share or receive a stream, echoshare sends a POST request to the destination address as follows:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="failed-webhook-for-sending-and-receiving-media-streams" tabindex="-1"><a class="header-anchor" href="#failed-webhook-for-sending-and-receiving-media-streams"><span>Failed webhook for sending and receiving media streams</span></a></h3>
<p>The webhook itself is a POST request. When you fail to share or receive a media stream, echoshare sends a POST request to the destination address as follows:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="routing-parameters" tabindex="-1"><a class="header-anchor" href="#routing-parameters"><span>Routing parameters</span></a></h2>
<p>echoshare provides routing parameters for users to customize their experience.</p>
<h3 id="automatic-full-screen-media-reception-function-😍" tabindex="-1"><a class="header-anchor" href="#automatic-full-screen-media-reception-function-😍"><span>Automatic full-screen media reception function 😍</span></a></h3>
<p>This feature is mainly used to share media as a full-screen video and audio media stream, which can be used as a media source for virtual cameras. In particular, the media can be directly viewed and used by switching the route of receiving media from <code v-pre>receive</code> to <code v-pre>view</code>, thus meeting the needs of diverse application scenarios.</p>
<p>For example, <code v-pre>https://echoshare.site/~receive?uid=your-uid</code> can be replaced with: <code v-pre>https://echoshare.site/~view?uid=your-uid</code> to realize the automatic full screen media receiving function.</p>
<h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay"><span>Autoplay</span></a></h3>
<p>If you want autoplay on incoming media, you can add the <code v-pre>autoplay</code> parameter to the route for incoming media.</p>
<p>For example, <code v-pre>https://echoshare.site/~receive?uid=your-uid</code> can be replaced with: <code v-pre>https://echoshare.site/~receive?uid=your-uid&amp;autoplay=true</code> to realize the autoplay function.</p>
</div></template>


