<template>
    <div>
        <p class="title">image here;</p>
        <el-input class="elinput" v-model="token"/>
        <el-button type='primary' @click="clickHere">按钮</el-button>
        <el-button type="success"> 按钮2</el-button>
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
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
    mounted(){
        this.drawLine();
    },
    methods:{
        // 绘制echarts
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
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


