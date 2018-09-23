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
            <button @click="openMessage1">显示消息框1</button>
        </div>
    </div>
    
</template>
<script>
// import messageBox from "@/components/common/messageBox"
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
        console.log(this);
    },
    methods:{
        sortBy(key){
            this.sortKey = key
            this.order = -this.order
        },
        openMessage(){
            this.MessageBox({

                cancelBtn:'取',
                confirmeBtn:'确认',
                content:'Hello Word',
                visible:true

            }).then(() => {
                alert('con');
            },() => {
                alert('cancel');
            })
        },
        openMessage1(){
            this.MessageBox({

                cancelBtn:'取东方闪电',
                confirmeBtn:'确认',
                content:'Hello Word',
                visible:true

            }).then(() => {
                alert('con');
            },() => {
                alert('cancel');
            })
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
