<template>
  <div class="jinx-help-article">
    <p>1.单击管理程序包，搜索UiPath.WebAPI.Activities，单击安装与保存</p>
    <p><img :src="activities1" alt="" /></p>
    <p><img :src="activities2" alt="" /></p>
    <p>2.在活动面板搜索“http 请求”，选中“应用程序集成&gt;网页&gt;HTTP 请求”，拖拽放置到序列中</p>
    <p><img :src="http" alt="" /></p>
    <p>3.配置请求信息：</p>
    <p>端点：上传地址</p>
    <p>启用SSL证书验证：取消此选择框</p>
    <p>请求方法：选择POST</p>
    <p><img :src="ssl" alt="" /></p>
    <p>4.添加附件：</p>
    <p>1.单击添加附件按钮</p>
    <p>2.输入名称：file</p>
    <p>3.文件路径：上传文件的全路径（默认为相对项目根路径，比如：如果文件在项目根目录中，则只需要输入文件名称即可）</p>
    <p>4.点击预览可以进行提交测试</p>
    <p>5.点击确定，则配置完成</p>
    <p><img :src="file" alt="" /></p>
  </div>
</template>

<script setup>
import activities1 from "./images/uipathUpload/activities1.png";
import activities2 from "./images/uipathUpload/activities2.png";
import http from "./images/uipathUpload/http.png";
import ssl from "./images/uipathUpload/ssl.png";
import file from "./images/uipathUpload/file.png";
import "./styles/help.css";
</script>
