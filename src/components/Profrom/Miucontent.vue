<template>
    <div id="miushead">
        <div class="miu-title">
            <div class="miu-title-item"
                v-for="(item,index) in theList"
                :key="index"
            >
                {{item}}
            </div>
        </div>
        <WrapList :theList="gettheLists"></WrapList>
    </div>
</template>

<script>
import WrapList from './WrapList.vue'
import axios from 'axios'
export default {
    props:{
        routerList:{
            type:String
        },
        gitListss:{
            type:Array
        }
    },
    data(){
        return{
            theList:[
                "北京",
                "全部时间",
                "推荐排序",
                "距离最近",
            ],
            getLists:[]
        }
    },
    computed:{
        gettheLists(){
            if(this.gitListss.length!=0){
                return this.gitListss
            }else{
                return this.getLists
            }
        }
    },
    components:{
        WrapList
    },
    methods:{
        getList(){
            let thisJson = '/json/'+this.routerList+'.json'
            axios.get(thisJson).then(res=>{
                let data = res.data;
                this.getLists = data.data.projectInfo;
            })
        },
    },
    created(){
        this.getList();
    },
}
</script>

<style lang="less">
    #miushead{
        position: absolute;
        top: 88px;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        .miu-title{
            position: fixed;
            top: 50px;
            left: 0;
            right: 0;
            width: 320px;
            height: 38px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #f5f5f5;
            font-size: 12px;
            z-index: 999;
            .miu-title-item{
                
            }
        }
    }
</style>
