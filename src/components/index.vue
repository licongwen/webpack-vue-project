<template>
    <div id="first">
        <p class="title">i am first page</p>
        <p class="colorRed">color red</p>
        <el-button>按钮</el-button>
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
        <img src="../../img/css2.png"/>
    </div>
</template>
<style lang="less">
#first{
    .colorRed{
        color: red;
        font-size: 16px;
    }
}
</style>
<script>
import '../assets/index.css';
// import '../assets/index.less';
export default {
    name:'FirstPage',
    mounted(){
        this.drawLine();
    },
    methods:{
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
        }
    }
}
</script>




