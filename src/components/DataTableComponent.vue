<template>
    <div class="dataTableComponent">
        <!-- <operationGroup :datas="params" :sendParams="reciveParams"></operationGroup> -->
        <Calender :format=" 'yyyy 年 MM 月 dd 日' " :format-value="'yyyy-MM-dd'" :default-value="'2000/1/1'" v-model="dateValue"/>
        <DataTable :getData="reciveData"></DataTable>
        <div class="pageBox">
            <Pagination :totalNum="dataQuantity" v-bind:pageSize="showSize" v-on:currentChange="getTableData"/>
        </div>
        <div>
            <h3>单选框</h3>
            <ul>
                <li v-for="item in params"><Radio :lable="item.id" :currentLable="currentlable" v-model="currentlable"/></li>
            </ul>
            
        </div>
    </div>
</template>

<script>
import axios from "axios";

import DataTable from "@/components/common/DataTable";
import operationGroup from "@/components/common/operationGroup";
import Pagination from "@/components/common/pagination";
import Calender from "@/components/common/Calender";
import Radio from "@/components/common/Radio";

    export default {
        name:'dataTableComponent',
        data(){
            return {
                a:1,
                params:[
                    {id:1,item:'传参1'},
                    {id:2,item:'传参2'},
                    {id:3,item:'传参3'}
                ],
                reciveData:'',
                dataQuantity:100,
                showSize:5,
                pageIndex:1,
                currentlable:[],
                dateValue:''
            }
        },
        updated(){
            //console.log(this.dateValue)
            console.log(this.currentlable)
        },
        created(){
            console.log(this.dateValue)
        },
        methods:{
            reciveParams(params){
                this.reciveData = params || '传参一';
            },
            getTableData(index,size){
                // var pageIndex = index || this.pageIndex;
                // var showSize = size || this.showSize;
                // axios.get('/dataTable/getData/'+ pageIndex +'/'+ showSize).then(res => {
                    
                //     if(res.status == 200){
                //         this.reciveData = res.data.result;
                //     }
                // })
            },
            getTableData1(index,size){
                
                axios.get('/iKnows/v1/message/pageList').then(res => {
                    console.log(res);
                    if(res.status == 200){
                        this.reciveData = res.data.result;
                    }
                })
            }
        },
        mounted(){
            this.getTableData();
            //console.log(this.dateValue)
            this.getTableData1();
            
        },
        components:{
            DataTable,
            operationGroup,
            Pagination,
            Calender,
            Radio           
        }
    }

</script>
<style scoped>
    .dataTableComponent{
        width: 50%;
        margin: 0 auto;
    }
    .pageBox{
        margin-top:15px;
        float:right;
    }
</style>