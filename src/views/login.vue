<template>
    <div id="app-login" class="login">
        <div class="login-header">
            <h3>账号登录</h3>
        </div>
        <div class="login-contant">
            <form>
                <div>
                    <label for="loginUserName">手机</label>
                    <div>
                        <div class="input-group-addon"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span></div>
                        <input class="form-control" id="loginUserName" v-model="loginModel.userName" name="loginUserName" type="text" placeholder="请输入手机号" required autofocus>
                    </div>
                </div>
                <div>
                    <label for="loginPassword">密码</label>
                    <div>
                        <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                        <input class="form-control" id="loginPassword" v-model="loginModel.password" name="loginPassword" type="password" placeholder="密码" required> 
                    </div>
                </div>
                <div class="form-group">
                        <label class="sr-only" for="loginCaptcha">验证码</label>
                        <input class="form-control" id="loginCaptcha" name="captcha" type="text" placeholder="验证码" required>   
                        <img class="captchaImg" style="height:34px" alt="点击刷新验证码">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit" @click="login">登录</button>
                </div>
            </form>
        <div style="float:right;margin-right:-15px"><a href="register.html">立即注册</a></div>
        </div>
    </div>
</template>



<script>
export default {
  name: 'app_login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>