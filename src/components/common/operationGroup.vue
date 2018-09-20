<template>
    <div class="buttons">
        <ul>
            <li v-for="ite in datas" @click="translateData(ite.item)">{{ite.item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'operationGroup',
        props:['sendParams','datas'],
        data(){
            return {
                
            }
        },
        created(){
            
        },
        methods:{
            translateData(item){
                this.sendParams(item);
            }
        },
        mounted(){

        }
    }
</script>

<style>

</style>
