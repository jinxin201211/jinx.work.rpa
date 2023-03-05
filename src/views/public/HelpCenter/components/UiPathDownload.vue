<template>
  <div class="jinx-help-article">
    <p>访问UiPath 官方网站，下载免费的社区版：戳这里(<a href="https://www.uipath.com.cn/community-edition-download/" target="_blank">https://www.uipath.com.cn/community-edition-download/</a>)</p>
    <p><img :src="uipath" alt="" /></p>
    <p>填写带*的必填项，注意邮箱要填写正确，否则收不到邮件。</p>
    <p>然后，邮箱会收到一封包含下载链接地址的邮件，点击按钮下载</p>
    <p><img :src="download" alt="" /></p>
  </div>
</template>

<script setup>
import uipath from "./images/uipathDownload/uipath.png";
import download from "./images/uipathDownload/download.png";
import "./styles/help.css";
</script>
