<template>
    <div id="messageContainer"  v-show='visible'>
        <div class="messageBox">
            <div class="mes-content">{{alertParams.content}}</div>
            <div class="mes-footer"><button @click="cancelCallback">{{alertParams.cancelBtn}}</button><button @click="confirmeCallback">{{alertParams.confirmeBtn}}</button></div>
        </div>
    </div>    
</template>

<script>

export default{
    name:'messageBox',
    data(){
        return {
            alertParams:{
                cancelBtn:'取消',
                confirmeBtn:'确认',
                content:'Hello Word'
            },
            confirmeFun:'',
            cancelFun:'',
            visible:false
        }
    },
    created(){
        console.log(this.visible);
    },
    methods:{
        //确定是执行的操作
        confirmeCallback(){
            this.confirmeFun();
            this.visible = false;
        },
        //取消时执行的操作
        cancelCallback(){
            this.cancelFun();
            this.visible = false;
        }
    },
    mounted(){

    }
}


</script>


<style scoped>
    #messageContainer{
        width:100%;
        height:100%;
        position:absolute;
        top:0;left:0;
        z-index:999;
        background:rgba(51,51,51,0.5);
    }
    .messageBox{
        width:40%;
        height:200px;
        margin:0 auto;
        background:red;
    }
</style>