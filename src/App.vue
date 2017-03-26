<template>
  <div id="app">
    <header>
			<nav class="navbar navbar-default">
			    <div class="container">
			    	<div class="collapse navbar-collapse ">
				      <ul class="nav navbar-nav ">
				    	<li>
				    		<a href="index.html"><img src="src/assets/gQ4fcp.png" class="img-responsive image" alt="Responsive image"></a>
				    	</li>	 
				      </ul>
					  <ul class="nav navbar-nav right">
				        <li ><a href="#">首页</a></li>
				        <li ><a href="html/login.html">登陆</a></li>
				        <li ><a href="html/register.html">注册</a></li>
				        <li ><a href="#">个人中心</a></li>
				      </ul>
			    	</div>
			    </div>		 	
			 </nav>	
    </header>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  /* @import  './styles/reset.css';*/
</style>
