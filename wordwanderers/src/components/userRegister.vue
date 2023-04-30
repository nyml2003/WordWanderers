<template>
    <div class="register">
    
        <form action="#" method="post">
            <h2 class="register_title">欢迎来到 Word Wanderers</h2>
    
            <div class="info">
            <p>用户名<span style="color: red;">*</span></p>
            <input type="text" id="username" name="username" placeholder="用户名长度为1-10，由数字、字母、汉字组成" required >
            </div>
    
        <div class="info">
            Email<span style="color: red;">*</span><br>
            <input type="text" id="username" name="username" placeholder="请填写您的邮箱" required> 
        </div>
    
        <div class="info">
            Password<span style="color: red;">*</span><br>
            <input type="password" id="password" name="password" placeholder="密码长度为1-15，由数字、字母组成"  required>
        </div>
    
    
        <div class="info">
            Confirm Password<span style="color: red;">*</span><br>
            <input type="password" id="c_password" name="c_password" placeholder="请确认您的密码" required><br>
        </div>
    
        <div style="text-align: center;">
            <input class="button" type="submit" value="注册">
        </div>
        </form>
    </div>
</template>
    
<style>
    @import url("@/assets/css/register.css")
</style>