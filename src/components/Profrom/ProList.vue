<template>
    <div id="WrapList">
        <ul class="list-info">
            <li class="list-info-item"
                v-for="item in 10"
                :key="item"
            >
                <router-link class="item-img" to="">
                    <img src="https://pimg.dmcdn.cn/perform/project/1765/176587_n.jpg?_t=1554286296989">
                </router-link>
                <div class="item-info">
                    <div class="info-title">AIA呈獻：2019国际冠军杯足球赛新加坡站</div>
                    <div class="info-city">新加坡 / 2019年07月20日-21日19：30（当地时间） / 新加坡国家体育场Singapore National Stadium</div>
                    <div class="price">￥210-1890</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
    #WrapList{
        padding: 0 15px;
        padding-top: 20px;
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

