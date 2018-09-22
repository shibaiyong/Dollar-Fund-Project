
<template>
  <div class="radio" @click="changeStatus"><a href="javascript:void(0);" v-show="lable == currentLable[0]">&#8226;</a></div>
</template>

<script>

  export default {

    name:'radio',

    props:{
      currentLable:{
        type:Array
      },
      lable:{
        type:Number,
        default:-2
      }
    },

    data(){
      return {
        isChecked:false
      }
    },

    created(){

    },

    mounted(){

    },

    methods:{
      changeStatus(){
        this.$emit('input',[this.lable])
      }
    },

    computed:{
      
    }

  }
</script>

<style>

  .radio{
    width:14px;
    height:14px;
    border-radius: 50%;
    border:1px solid #999;
    position:relative;
    overflow: hidden;
  }
  
  .radio a{
    font-size: 28px;
    width: 100%;
    height: 100%;
    position:absolute;
    color: black;
    display: inline-block;
    text-align: center;
    line-height: 14px;
    top:-4px; left:0px;
  }


</style>
