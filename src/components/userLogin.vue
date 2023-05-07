<template>
    <div class="login">

        <form action="#" method="post">
            <h2 class="login_title">登录 Word Wanderers</h2>

            <div class="info">
                <input type="text" id="username" name="username" placeholder="Username" required>
            </div>
            <div class="info">
                <input type="password" id="password" name="password" placeholder="Password" required>
            </div>
            
            <div style="text-align: center;">
                <input class="button" type="submit" value="→">
            </div>

            <div class="login_register">
                <p>Don't have a Word Wanderers account yet?</p>
                <router-link to="/userRegister" style="color:rgb(47,110,195);">Get started here</router-link>
            </div>
        </form>
    </div>
</template>

<style src="../assets/css/login.css" scoped></style>
<style></style>