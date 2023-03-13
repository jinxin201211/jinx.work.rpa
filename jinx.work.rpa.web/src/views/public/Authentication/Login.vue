<template>
  <div class="jinx-login-container" :style="{ 'background-image': 'url(\'' + backgroundImage + '\')' }">
    <div class="login-box">
      <div class="login-title">用户登录</div>
      <div class="login-form-input" :class="{ invalid: !validate.account }">
        <jinx-icon-svg icon="user" clazz="icon"></jinx-icon-svg>
        <input v-model="form.account" type="text" placeholder="账号" @keyup="handleInputEnd" />
        <div class="login-error-message">不能为空！</div>
      </div>
      <div class="login-form-input" :class="{ invalid: !validate.password }">
        <jinx-icon-svg icon="password" clazz="icon"></jinx-icon-svg>
        <input v-model="form.password" type="password" placeholder="密码" @keyup="handleInputEnd" />
        <div class="login-error-message">不能为空！</div>
      </div>
      <div class="login-forgot">
        <el-link>忘记密码？</el-link>
      </div>
      <div class="login-form-button" @click="handleSubmit">
        <span>登录</span>
      </div>
      <div class="login-time"><span v-text="loginTime"></span></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import moment from "moment";
import backgroundImage from "@/assets/c91f4c5f3d874deab52f6d3a050d495e.jpg";
import JinxButton from "../components/JinxButton.vue";

let form = reactive({
  account: "",
  password: "",
});

let loading = ref(false);

const time_format = "YYYY年MM月DD日 HH:mm:ss";
let loginTime = ref(moment().format(time_format));
const changeLoginTime = () => {
  setTimeout(function f() {
    loginTime.value = moment().format(time_format);
    setTimeout(f, 1000);
  }, 0);
};
changeLoginTime();

let validate = reactive({
  account: true,
  password: true,
});

const handleSubmit = () => {
  validate.account = form.account !== "";
  validate.password = form.password !== "";
  console.log(validate);
  if (!validate.account || !validate.password) {
    return;
  }
};

const handleInputEnd = () => {
  validate.account = form.account !== "";
  validate.password = form.password !== "";
};
</script>

<style lang="less" scoped>
.jinx-login-container {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  background-position: center;
  background-size: cover;
  background-repeat: repeat;

  .login-box {
    height: 480px;
    width: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(224, 224, 224, 0.95);
    border-radius: 6px;
    box-shadow: 0 0 6px #e0e0e0;

    .login-title {
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: 800;
      color: @primary-color;
    }

    .login-form-input {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      height: 45px;
      width: 300px;
      margin: 20px 0;
      padding: 8px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e0e0e0;
      box-shadow: inset 3px 3px 8px #d0d0d0, inset -3px -3px 8px #f0f0f0;
      position: relative;

      .icon {
        height: 16px;
        width: 16px;
        margin-right: 8px;
      }

      input {
        width: 100%;
        height: 100%;
        flex: 1;
        background: transparent;
        border: none;
        font-size: 14px;
        color: #090909;
        outline: none;
      }

      .login-error-message {
        position: absolute;
        bottom: -24px;
        left: 31px;
        color: @error-color;
        display: none;
      }
    }

    .login-form-input.invalid {
      border: 1px solid @error-color;

      .login-error-message {
        display: initial;
      }
    }

    .login-forgot {
      display: flex;
      justify-content: flex-end;
      margin: 20px 0;
      width: 300px;

      :deep(.el-link) {
        color: #090909;
      }

      :deep(.el-link:hover) {
        color: @primary-color;
      }
    }

    .login-form-button {
      border-radius: 20px;
      height: 45px;
      width: 300px;
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease-in;
      position: relative;
      overflow: hidden;
      z-index: 1;
      color: #090909;
      // padding: 0.7em 1.7em;
      font-size: 16px;
      // border-radius: 0.5em;
      background: #e8e8e8;
      border: 1px solid #e8e8e8;
      box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    }

    .login-form-button:active {
      color: #666;
      box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
    }

    .login-form-button:before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scaleY(1) scaleX(1.25);
      top: 100%;
      width: 140%;
      height: 180%;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }

    .login-form-button:after {
      content: "";
      position: absolute;
      left: 55%;
      transform: translateX(-50%) scaleY(1) scaleX(1.45);
      top: 180%;
      width: 160%;
      height: 190%;
      background-color: @primary-color;
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }

    .login-form-button:hover {
      color: #ffffff;
      border: 1px solid @primary-color;
    }

    .login-form-button:hover:before {
      top: -35%;
      background-color: @primary-color;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    .login-form-button:hover:after {
      top: -45%;
      background-color: @primary-color;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    .login-time {
      font-size: 14px;
      color: #090909;
    }
  }
}
</style>
