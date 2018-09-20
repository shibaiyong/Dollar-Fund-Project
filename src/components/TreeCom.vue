<template>
        <ul>
            <TreeMenu :treedata='treedata'></TreeMenu>
        </ul>
</template>
<script>
    var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
        name: 'child folder',
        children: [
            {
            name: 'child folder',
            children: [
                { name: 'hello' },
                { name: 'wat' }
            ]
            },
            { name: 'hello' },
            { name: 'wat' },
            {
            name: 'child folder',
            children: [
                { name: 'hello' },
                { name: 'wat' }
            ]
            }
        ]
        }
    ]
    }
    import TreeMenu from "@/components/common/TreeMenu"

    export default {
        name:'treecom',
        data(){
            return {
                treedata:data
            }
        },
        created(){

        },
        methods:{

        },
        computed:{

        },
        mounted(){
        },
        components:{
            TreeMenu
        }
    }
</script>
<style scoped>

</style>

