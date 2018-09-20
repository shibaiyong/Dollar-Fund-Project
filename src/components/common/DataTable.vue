<template>
    <div class="dataTables">
        <table class="inews-table">
            <thead>
                <tr>
                    <th><input type="checkbox"/>全选</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>    
                </tr>
            </thead>
            <tbody>
                <tr v-for='item in getData'>
                    <td><slot name="firstOperation"></slot></td>
                    <td>{{item.id}}</td>
                    <td>{{item.code}}</td>
                    <td>{{item.sex}}</td>
                    <td><slot name="lastOperation"></slot></td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        name:'dataTables',
        props:['getData'],
        data(){
            return {
                tabledata:[]
                
            }
        },
        created(){
            
        },
        updated(){
            
        },
        methods:{
            
        },
        mounted(){
        }
    }

</script>
<style scoped>
    .inews-table{
        width:100%;
    }
    .inews-table td,.inews-table th{
        width:33%;
        border:1px solid #ccc;
    }
    /* .inews-table tr{
        border-top:1px solid #ccc;
    }
    .inews-table tr:last-child{
        border-bottom:1px solid #ccc;
    } */
    .inews-table tr td{
        border:1px solid #ccc;
    }
</style>