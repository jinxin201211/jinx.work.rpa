<template>
  <div class="jinx-help-article">
    <p>访问Tableau官方网站，下载免费的公开版：戳这里(<a href="https://www.tableau.com/zh-cn/products/public/download" target="_blank">https://www.tableau.com/zh-cn/products/public/download</a>)</p>
    <p>单击“下载 TABLEAU PUBLIC”</p>
    <p><img :src="download" alt="" /></p>
    <p>填写信息，然后单击“下载应用”，直接下载</p>
    <p><img :src="sign" alt="" /></p>
  </div>
</template>

<script setup>
import download from "./images/tableauDownload/download.png";
import sign from "./images/tableauDownload/sign.png";
import "./styles/help.css";
</script>
