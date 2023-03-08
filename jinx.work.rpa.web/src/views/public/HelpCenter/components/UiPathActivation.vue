<template>
  <div class="jinx-help-article">
    <p>1.打开UiPath Studio 软件</p>
    <p><img :src="open" alt="" /></p>
    <p>2.单击 “Sign in”，在打开的浏览器中，可能提示启用扩展程序，选择启用</p>
    <p><img :src="extendP" alt="" /></p>
    <p>3.如果已经有UiPath 账号，可以直接选择 “Continue with Email” 登录，否则，单击 “Sign up” 进行注册，然后再用注册的账号进行登录。</p>
    <p><img :src="sign" alt="" /></p>
    <p>4.登录之后，浏览器提示“打开 UiPath”</p>
    <p><img :src="switchP" alt="" /></p>
    <p>5.设置为中文环境，然后重启</p>
    <p><img :src="restart" alt="" /></p>
    <p>6.关闭“为新项目使用新式体验”</p>
    <p><img :src="experience" alt="" /></p>
  </div>
</template>

<script setup>
import experience from "./images/uipathActivation/experience.png";
import extendP from "./images/uipathActivation/extend.png";
import open from "./images/uipathActivation/open.png";
import restart from "./images/uipathActivation/restart.png";
import sign from "./images/uipathActivation/sign.png";
import switchP from "./images/uipathActivation/switch.png";
import "./styles/help.css";
</script>
