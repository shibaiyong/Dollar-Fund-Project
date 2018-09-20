<template>
    <div class="star-cloud">
        <span v-for="item in extendCloudData" :style='{"font-size":item.fontsize, position:"absolute", top:item.top+"px", left:item.left+"px"}'>{{item.name}}</span>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
         name:'starcloud',
        data(){
            return {
                cloudData:[]
            }
        },
        updated(){
        },
        created(){
            
        },
        methods:{
            getName(){
                axios.get('./static/dataTable.json').then(res => {
                    
                    this.cloudData = res.data;
                    
                })
            }
        },
        computed:{
            extendCloudData:function(){//当组件创建时,默认执行一次。
                
                var len = this.cloudData.length;
                var arr = this.cloudData;
                for(var i = 0; i < len; i++){
                    var k = arr[i].probability;
                    var fontsize = k.substring(0,k.length-1) / 100 * 30;
                    var left = Math.floor(Math.random()*500);
                    var top = Math.floor(Math.random()*400);
                    Object.assign(arr[i],{fontsize:Math.ceil(fontsize) + 'px', left:left, top:top, rgb:''})
                }
                return arr;
            }
        },
        mounted(){
            this.getName();
        },
        components:{
            
        }
    }
</script>
<style>
    .star-cloud{
        position:relative;
        width:500px;
        height:400px;
        border:1px solid #ddd;
        margin: 0 auto;
    }

    .star-cloud span{
        white-space: nowrap;
    }
</style>

