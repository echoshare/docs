# Quick start

<p align="center">
<img src="https://i.postimg.cc/d0M9TjZW/echoshare-mobile-left.png" width="200" alt="just-logo">
</p>

Echoshare is an out-of-the-box and highly customizable configuration-enabled online media sharing application.

Based on WebRTC technology, Echoshare provides efficient, low-latency online screen sharing that simultaneously transmits screen shots, camera video streams, microphone audio streams, and system audio to meet diverse remote collaboration needs.

## Functional features

### Core functionality

- 🖥️ **Screen Sharing**: Show your screen in real time for more intuitive communication.
- 📹 **Camera sharing**: face-to-face communication to enhance the sense of presence in remote collaboration.
- 🔊 **AUDIO SHARING**: Clearly conveys system sound to ensure a complete audio experience.
- 🎙️ **Microphone Sharing**: real-time voice communication for smoother exchanges.

### ✨ Enhancements

- ⏳ **Local History**: easily review shared records for convenience.
- 🔗 **Customize webhook**: Flexible integration with other systems for automated workflows.
- 🔄 **Automatic pull after interruption**: automatic recovery even when the network is interrupted, ensuring continuity of sharing.
- 📱 **Support PWA**: Use it like a native app for a smoother experience.
- 🌍 **Multi-language support**: meet the needs of global users, communication without barriers.
- 📐 **Responsive design**: adapts to a wide range of devices, so you can work efficiently anytime, anywhere.

## Use it now

### Online use

Echoshare is deployed through Vercel, so you can experience it directly online: [https://echoshare.site](https://echoshare.site).

Vercel is a powerful cloud services platform that supports rapid deployment of static and dynamic websites. Seamlessly integrated with GitHub, Vercel automates deployment after code push, while providing global CDN acceleration and HTTPS auto-configuration to ensure fast and secure access. With Vercel's efficient deployment capabilities, Echoshare provides users with a smooth online experience that meets a wide variety of usage needs.

If you would also like to deploy on Vercel, you can do so by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/echoshare/echoshare)

### Local deployment

This application is a completely front-end based project, so it can be easily deployed locally by following these steps

```bash
# Clone the project address
git clone https://github.com/echoshare/echoshare.git
```

Make sure you have Node.js and npm (or yarn) installed on your system. Then run the following command to install the project dependencies:

```bash
# Install dependencies and compile
npm install
npm run build
```

## Application configuration

echoshare works by default without any configuration, but you can customize the configuration as needed, all the configuration items are under the `/~settings` route.

![Configuration page](https://i.postimg.cc/ZntKjm64/image.pngg)

### Customize peer nodes

echoshare uses [peer-server](https://github.com/peers/peerjs-server) as the WebRTC API and `https://0.peerjs.com` as the peer node by default.

If you want to use a customized peer node, you can enter the corresponding server address in the Settings page.

A sample configuration is shown below:

1. Node located under port 443

```
https://your.server.com/custom-path
```

2. Nodes are located under other ports

```
https://your.server.com:3456/custom-path
```

3. Node configured with [key attribute](https://peerjs.com/docs/#peer-options-key)

```
https://your.server.com:3456/custom-path?key=your-key
```

## Customizing the STUN/TURN server

In special cases, you also need to configure the STUN/TURN server, as shown in the following example:

### Configuration interface with STUN server

```
https://your-stun-api.com
```

Then click the button below, echoshare will get the STUN server address through this interface and save it in json format.

### manually enter the configuration in json format

Enter and click save, just enter the configuration in array format.

## Customize webhook

echoshare provides the ability to customize webhook, you can enter the corresponding webhook address in `/~webhook` route. With webhooks, you can automate workflows, such as sending notifications when a share ends, pulling share records automatically, and so on.

### Customize data

![custom data](https://i.postimg.cc/P5JJXTzr/image.png)

echoshare carries the following content that you fill in **custom data** in the webhook for your convenience. All custom data is carried under the `custom` attribute in all echoshare requests.

### pull the UID webhook

The webhook itself is a GET request, and you can get the shared UID in the destination address, which is mainly used for receiving media.

Note that the destination must be a URL that provides a GET interface and the return data must contain a `uid` entry, otherwise echoshare will not resolve the UID.

echoshare The parameters carried in this request:

```json
{
  "hook": "on-get",
  "action": "receive",
  "timestamp": "{current-timestamp}"
}
```

### push UID webhook

The webhook itself is a POST request. When you share a stream and generate a UID credit, echoshare sends a POST request to the destination address, which looks like this:

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

### Successful webhooks for media streaming

The webhook itself is a POST request. When you successfully share or receive a stream, echoshare sends a POST request to the destination address as follows:

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

### Failed webhook for sending and receiving media streams

The webhook itself is a POST request. When you fail to share or receive a media stream, echoshare sends a POST request to the destination address as follows:

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

## Routing parameters

echoshare provides routing parameters for users to customize their experience.

### Automatic full-screen media reception function 😍

This feature is mainly used to share media as a full-screen video and audio media stream, which can be used as a media source for virtual cameras. In particular, the media can be directly viewed and used by switching the route of receiving media from `receive` to `view`, thus meeting the needs of diverse application scenarios.

For example, `https://echoshare.site/~receive?uid=your-uid` can be replaced with: `https://echoshare.site/~view?uid=your-uid` to realize the automatic full screen media receiving function.

### Autoplay

If you want autoplay on incoming media, you can add the `autoplay` parameter to the route for incoming media.

For example, `https://echoshare.site/~receive?uid=your-uid` can be replaced with: `https://echoshare.site/~receive?uid=your-uid&autoplay=true` to realize the autoplay function.
