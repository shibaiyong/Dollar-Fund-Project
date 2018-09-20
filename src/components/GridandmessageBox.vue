<template>
    <div class='grid'>
        <input type="text" class="form-control" v-model="searchQuery"/>
        <table class='table table-hover' v-if="filterData.length>0">
            <thead>
                <tr>
                    <th v-for="item in gridColumns">{{item}}<span @click="sortBy(item)">▼</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filterData">
                    <td v-for="key in gridColumns">{{item[key]}}</td>
                </tr>
            </tbody>
        </table>
        <p v-else>没有找到对应的内容</p>
        <div class="test-messageBox">
            <button @click="openMessage">显示消息框</button>
            <button @click="hideMessage">隐藏消息框</button>
            <button @click="showOrhide">隐藏/显示消息框</button>
        </div>
        <messageBox v-on:nextprocess="callbackFun" :visible="isVisible" :textOptions="textOptions"/>
    </div>
    
</template>
<script>
import messageBox from "@/components/common/messageBox"
export default {
    name:'grid',
    data(){
        return {
            textOptions:{
                cancel:'Cancel',
                confirme:'确定',
                content:'Hello Word'
            },
            isVisible:false,
            sortKey:'power',
            searchQuery: '',
            order:1,
            gridColumns: ['name', 'power'],
            gridData: [
                { name: 'Chuck Norris', power: Infinity },
                { name: 'Bruce Lee', power: 9000 },
                { name: 'Jackie Chan', power: 7000 },
                { name: 'Jet Li', power: 8000 }
            ]
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        sortBy(key){
            this.sortKey = key
            this.order = -this.order
        },
        openMessage(){
            this.isVisible = true
        },
        hideMessage(){
            this.isVisible = false
        },
        showOrhide(){
            this.isVisible = !this.isVisible;
        },
        cancelFun(){
            // console.log('点击了取消按钮')
            this.isVisible = false
        },
        confirmFun(){
            // console.log('点击了确认按钮')
            this.isVisible = false
        },
        callbackFun(type){
            type == 'cancel' ? this.cancelFun():this.confirmFun();   
        }
    },
    computed:{
        filterData(){
            var sortKey = this.sortKey
            var searchQuery = this.searchQuery
            console.log(searchQuery)
            var order = this.order
            var data = this.gridData;//这一步很关键,保证每次查询和排序的都是最原始的数据.保证对data的操作是累加的
            if(searchQuery){
                data = data.filter(function(row){
                    return row.name.indexOf(searchQuery)!=-1;
                    // return Object.keys(row).some(function (key) {
                    //     return String(row[key]).toLowerCase().indexOf(searchQuery) > -1
                    // })
                })  
            }
            if(sortKey){
                data = data.slice().sort(function(a,b){
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a>b ? 1 : -1) * order
                })
            }
            return data;
        }
    },
    components:{
        messageBox
    },
    filters:{

    }
}
</script>
    
<style scoped>
    .grid{
        width:100%;
        height:100%;
        margin:0 auto;
    }
</style>
