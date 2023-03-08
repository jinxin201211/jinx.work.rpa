<template>
  <div class="jinx-help-article">
    <p>硬件要求：</p>
    <p><img :src="edition" alt="" /></p>
    <p>软件要求：</p>
    <p><span class="indent2">操作系统：Windows 8.1，Windows 8.1 N，Windows 10，Windows 10 N，Windows 11，Windows Server 2012 R2，Windows Server 2016，Windows Server 2019</span></p>
    <p><span class="indent2">浏览器：Google Chrome 64 版或更高版本，Mozilla Firefox 版本 52.0 或更高版本，适用于 Windows 10 1803 版或更高版本的 Microsoft Edge</span></p>
    <p>安装步骤：</p>
    <p>1.双击下载的安装程序以启动安装向导。</p>
    <p><img :src="install" alt="" /></p>
    <p><img :src="fast" alt="" /></p>
    <p>2.耐心等待安装完成，注意：若有安全软件的提示需要手动允许（如360安全软件，可能会有注册表修改提醒，需要手动允许操作）</p>
    <p><img :src="wait" alt="" /></p>
    <p>3.期间可能提示安装浏览器扩展，单击“确定”允许安装</p>
    <p><img :src="continueP" alt="" /></p>
    <p>4.安装完成，启动UiPath Studio或者关闭安装向导</p>
    <p><img :src="complete" alt="" /></p>
  </div>
</template>

<script setup>
import complete from "./images/uipathInstall/complete.png";
import continueP from "./images/uipathInstall/continue.png";
import edition from "./images/uipathInstall/edition.png";
import fast from "./images/uipathInstall/fast.png";
import install from "./images/uipathInstall/install.png";
import wait from "./images/uipathInstall/wait.png";
import "./styles/help.css";
</script>
