<template>
  <div class="jinx-help-article">
    <p>安装步骤：</p>
    <p>1.双击下载的安装程序以启动安装向导。</p>
    <p><img :src="welcome" alt="" /></p>
    <p>2.选中“我已阅读并接受本许可协议中的条款”，单击“自定义”安装按钮</p>
    <p><img :src="agreement" alt="" /></p>
    <p>3.可以设置安装位置，勾选相关菜单，单击安装</p>
    <p><img :src="install" alt="" /></p>
    <p>4.耐心等待安装完成，注意：若有安全软件的提示需要手动允许（如360安全软件，可能会有注册表修改提醒，需要手动允许操作）</p>
    <p><img :src="progress" alt="" /></p>
  </div>
</template>

<script setup>
import welcome from "./images/tableauInstall/welcome.png";
import agreement from "./images/tableauInstall/agreement.png";
import install from "./images/tableauInstall/install.png";
import progress from "./images/tableauInstall/progress.png";
import "./styles/help.css";
</script>
