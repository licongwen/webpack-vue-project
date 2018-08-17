<template>
    <div>
        <p class="title">image here;</p>
        <input v-model="token"/>
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
        }
    }
}
</script>

