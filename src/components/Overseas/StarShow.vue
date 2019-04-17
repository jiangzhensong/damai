<template>
    <div class="wrap-attention">
        <ul class="star-list">
            <li class="star-list-conment"
                v-for="item in 5"
                :key="item"
            >
                <img src="https://intercms.damai.cn/artist/pic/1547626487740/1547626487740-main.jpg" title="">
                <div class="attention">3.55万关注</div>
                <div class="name">Troye Sivan</div>
                <div class="city">上海 / 香港 / 新加坡</div>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    // methods:{
    //     getStarList(){
    //         Axios.get('',{

    //         })
    //     }
    // }
}
</script>


<style lang="less">
    .wrap-attention{
        // height: 170px;
        margin-top: 20px;
        box-sizing: border-box;
        padding: 0 15px;
        overflow-x: auto;
        overflow-y: hidden;
        &::-webkit-scrollbar { //去除滚动条，设置滚动条的背景颜色为透明 
            background-color: transparent;
            display:none;
        }
        .star-list{
            display: flex;
            flex-wrap: nowrap;
            .star-list-conment{
                border-right: 1px solid #ffffff;
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1 0 auto;
                width: 110px;
                height: 170px;
                // background-color:red; 
                position: relative;
                margin: 0 5px;
                img{
                    width: 110px;
                    height: 110px;
                    display: block;
                    border-radius: 50%;
                }
                .attention{
                    width: 68px;
                    height: 14px;
                    border-radius: 7px;
                    color: rgba(255,255,255,.75);
                    background-color: rgba(0,0,0, 0.5);
                    font-size: 10px;
                    line-height: 14px;
                    text-align: center;
                    position: absolute;
                    top: 98px;
                }
                .name{
                    font-size: 14px;
                    line-height: 14px;
                    margin-top: 12px;
                }
                .city{
                    font-size: 10px;
                    line-height: 10px;
                    color: #888;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
