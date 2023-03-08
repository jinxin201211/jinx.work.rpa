<template>
  <div class="jinx-help-article">
    <p>打开项目：</p>
    <p>方式一：</p>
    <p>如果 .xaml 文件已经关联了默认程序为UiPath Studio，则直接双击项目源代码中的.xaml文件，即可打开</p>
    <p>方式二：</p>
    <p>在.xaml文件上右键，从右键菜单中选择打开方式下的UiPath Studio。</p>
    <p>方式三：</p>
    <p>按照下面的步骤操作：</p>
    <p>1.打开UiPath Studio</p>
    <p><img :src="openuipath" alt="" /></p>
    <p>2.单击打开，选择项目源代码文件夹中的project.json 文件，单击打开按钮</p>
    <p><img :src="openproject" alt="" /></p>
    <p>运行项目：</p>
    <p>项目打开之后，可以单击“调试文件”进行调试运行，也可以单击“运行”直接运行</p>
    <p><img :src="runP" alt="" /></p>
  </div>
</template>

<script setup>
import openproject from "./images/uipathRun/openproject.png";
import openuipath from "./images/uipathRun/openuipath.png";
import runP from "./images/uipathRun/run.png";
import "./styles/help.css";
</script>
