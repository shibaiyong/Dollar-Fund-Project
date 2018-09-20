<template>
        <li>
            <div :class="{'blod':isFolder}" @click="toggle">{{treedata.name}}<span v-if="isFolder">{{open?'-':'+'}}</span></div>
            <ul v-show='open' v-if='isFolder' class='childList'>
                <TreeMenu :treedata="tree" v-for="(tree,index) in treedata.children" :key="index"></TreeMenu>
            </ul>
        </li>
</template>
<script>

    // import TreeContent from "@/components/common/TreeContent"

    export default {
        name:'treemenu',
        props:['treedata'],
        data(){
            return {
                open:false
            }
        },
        beforeCreate: function () {
            
            // this.$options.components.TreeContent = () => import("@/components/common/TreeContent")
        },
        created(){
            
        },
        methods:{
            toggle(){
                if(this.isFolder){
                    this.open=!this.open;
                }    
            }
        },
        computed:{
            isFolder(){
                return this.treedata.children&&this.treedata.children.length;
            }
        },
        mounted(){
            
        }
    }
</script>
<style scoped>
    .blod{
        font-weight: bold;
    }
    .childList{
        margin-left: 32px;
    }
</style>

