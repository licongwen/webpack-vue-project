<template>
    <div id="main">
        <router-link to="/firstpage">按钮</router-link>
        <router-link to="/imagepage">图片</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
console.log('vue home!');
export default {
    name:'App',
}
</script>


