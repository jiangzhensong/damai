<template>
    <div id="WrapList">
        <div class="list-title">
            <router-link class="list-title-item"
                to=""
                v-for="item in 4"
                :key="item"
            >全部分类<i class="iconfont icon-icon"></i></router-link>
        </div>
        <ul class="list-info">
            <li class="list-info-item"
                v-for="(item,index) in showList"
                :key="index"
            >
                <router-link class="item-img" to="">
                    <img :src="item.verticalPic">
                </router-link>
                <div class="item-info">
                    <div class="info-title">{{item.name}}</div>
                    <div class="info-city">{{item.venueCity}} / {{item.showTime}} / {{item.venueName}}</div>
                    <div class="price">￥{{item.priceStr}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            showList:[]
        }
    },
    methods:{
        getShwoList(){
            axios.get('/json/starListss.json').then(res=>{
                let data = res.data
                this.showList = res.data.data.currentCity
                console.log(this.showList);
            })
        }
    },
    created(){
        this.getShwoList();
    }
}
</script>


<style lang="less">
    #WrapList{
        padding: 0 15px;
        .list-title{
            height: 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
            .list-title-item{
            }
        }
        .list-info{
            .list-info-item{
                height: 102px;
                margin-bottom: 38px;
                display: flex;
                justify-content: space-between;
                .item-img{
                    display: block;
                    width: 76px;
                    height: 102px;
                    img{
                        display: block;
                        width: 76px;
                        height: 102px;
                        border-radius: 5px;
                    }
                }
                .item-info{
                    width: 202px;
                    height: 102px;
                    .info-title{
                        font-size: 14px;
                        line-height: 18px;
                        color: #111;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .info-city{
                        font-size: 10px;
                        line-height: 15px;
                        color: #222;
                        margin-top: 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-bottom: 32px;
                        color: #111111;
                    }
                }
            }
        }
    }
</style>

