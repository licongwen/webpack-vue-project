<template>
    <div>
        <p class="title">image here;</p>
        <el-input class="elinput" v-model="token"/>
        <el-button type='primary' @click="clickHere">按钮</el-button>
        <el-button type="success"> 按钮2</el-button>
    </div>
</template>
<script>
import '../assets/index.css'
export default {
    name:'ImagePage',
    data(){
        return {
            token:'123456token',
            userName:'',
        }
    },
    watch:{
        'token':function(val,oldVal){
            console.log('current value: '+val);
            console.log('origin value: ' +oldVal);
        }
    },
    created(){
        this.initData();
        this.userName = this.$store.state.userName;
        console.log(this.userName);
    },
    methods:{
        initData(){
            let arr = 12;
            const str = 'xiaodebaoasdd';
            console.log(str);
        },
        clickHere(){
            alert('clicked!');
        }
    }
}
</script>
<style>
.elinput{
    width: 200px;
    color: red;
}
.title{
    color: red;
}
</style>


