<template>
    <div id="messageContainer"  v-show='visible'>
        <div class="messageBox">
            <div class="mes-content">{{textOptions.content}}</div>
            <div class="mes-footer"><button @click="$emit('nextprocess','cancel')">{{textOptions.cancel}}</button><button @click="$emit('nextprocess','confirme')">{{textOptions.confirme}}</button></div>
        </div>
    </div>    
</template>

<script>

export default{
    name:'messageBox',
    props:['textOptions','visible'],
    data(){
        return {
            cancel:'取消',
            confirme:'确认',
            content:'Hello Word'
        }
    },
    created(){
        console.log(this.visible);
    },
    methods:{
        
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