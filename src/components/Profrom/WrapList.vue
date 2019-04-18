<template>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="van-list"
        >
        <van-cell
            v-for="(item,index) in theList"
            :key="index"
            class="list-info-item"
        >
            <router-link class="item-item" to="/detail">
                <div class="item-img">
                   <img :src="item.verticalPic">
                </div>
                <div class="item-info">
                    <div>
                        <div class="info-title">{{item.name}}</div>
                        <div class="info-city">{{item.venueCity}} / {{item.showTime}} / {{item.venueName}}</div>
                    </div>
                    <div class="price">￥{{item.formattedPriceStr}}</div>
                </div>
            </router-link>
        </van-cell>
    </van-list>
</template>
<script>
export default {
    props:{
        theList:{
            type:Array
        }
    },
    data() {
        return {
            thelist: this.theList,
            loading: false,
            finished: false
        };
    },


    methods: {
        onLoad() {
        // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.thelist.push(this.thelist.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.thelist.length >= 40) {
                    this.finished = true;
                    // console.log(this.theList)
                }
            }, 500);
        }
    }
}
</script>
<style lang="less">
    .van-list{
        padding-top: 20px;
    }
    .van-cell:not(:last-child)::after{
        border: 0;
    }
    .list-info-item{
        padding: 0 15px;
        height: 102px;
        // padding-top: 20px;
        margin-bottom: 38px;
        .item-item{
            height: 102px;
            display: flex;
            justify-content: space-between;
            padding: 0;
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
        }
        .item-info{
            width: 202px;
            height: 102px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .info-title{
                font-size: 14px;
                line-height: 18px;
                color: #111;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                color: #111;
                font-weight: 700;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .info-city{
                font-size: 10px;
                line-height: 15px;
                color: #222;
                margin-top: 5px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #111111;
                color: #aaa;
                padding-top: 5px;
            }
            .price{
                font-size: 12px;
                font-weight: 600;
                color: #ff1268;
            }
        }
    }
</style>

