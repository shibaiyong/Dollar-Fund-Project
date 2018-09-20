<template>
  <div id="app">
      <router-view></router-view>
  </div>
   
</template>

<script>
import Vue from 'vue';
import TreeMenu from "@/components/common/TreeMenu"
import Listpage from "./components/Listpage"
import Detail from "./components/Detail"
Vue.component('TreeMenu', TreeMenu);

export default {
  name: 'app',
  components:{
    Listpage,
    Detail
    }
}
</script>

<style lang='scss'>

  @import './styles/_reset.scss';
	
</style>
