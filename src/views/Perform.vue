<template>
    <div>
        <div id="prohead">
            <ul class="pro-head">
                <li class="head-item"
                    v-for="(item,index) in titleList"
                    :key="index"
                    :id="item.id"
                    @click="fn(item.id)">
                        {{item.name}}
                </li>
            </ul>
        </div>
        <Miucontent :routerList="theRouter" :gitListss="getLists"></Miucontent>
    </div>
</template>

<script>
import Prehead from '../components/Profrom/ProHeader.vue'
import Miucontent from '../components/Profrom/Miucontent.vue'
import axios from 'axios'
export default {
    data(){
        return{
            theRouter:this.$route.path.substring(9),
            titleList:[
                {name:"全部",id:"quanbu"},
                {name:"演唱会",id:"yanchanghui"},
                {name:"话剧歌剧",id:"huajv"},
                {name:"音乐会",id:"yinyue"},
                {name:"曲苑杂坛",id:"zatan"},
                {name:"舞蹈芭蕾",id:"wudao"},
                {name:"体育比赛",id:"tiyv"},
                {name:"儿童亲子",id:"etong"},
                {name:"展览休闲",id:"xiuxian"},
                {name:"二次元",id:"ciyuan"},
                {name:"旅游展览",id:"lvyou"},
            ],
            theId:'',
            getLists:[]
        }
    },
    components:{
        Prehead,
        Miucontent
    },

    methods:{
        fn(id){
            this.$router.push({path:'/perform/'+id})
            this.getList();
        },
        getList(){
            let pathName=this.$route.path.substring(9);
            let thisJson = '/json/'+pathName+'.json'
            axios.get(thisJson).then(res=>{
                let data = res.data;
                this.getLists = data.data.projectInfo;
            })
        },
    }
}
</script>
<style lang="less">
    #prohead{
        position: fixed;
        top: 0;
        left: 0;
        left: 0;
        overflow-x: auto;
        overflow-y: hidden;
        height: 50px;
        background-color:#fff;
        z-index: 9999;
        &::-webkit-scrollbar { //去除滚动条，设置滚动条的背景颜色为透明 
            background-color: transparent;
            display:none;
        }
        .pro-head{
            display:flex;
            align-items: center;
            .head-item{
                height: 38px;
                flex: 1 0 auto;
                box-sizing: border-box;
                margin: 0 10px;
                font-size: 14px;
                line-height: 32px; 
                // position: relative;
                // &::after{
                //     content: "";
                //     position: absolute;
                //     bottom: 0;
                //     left: 50%;
                //     width: 25px;
                //     -webkit-transform: translateX(-50%);
                //     transform: translateX(-50%);
                //     height: 1px;
                //     background: #ff1268;
                //     border-radius: 1px;
                // }
            }
            .aa{
                color: #111;
            }
        }
    }
</style>
