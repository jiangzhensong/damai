<template>
    <div id="detail">
        <div class="detail-main">
            <div class="main-title">
                <div class="title-img"></div>
                <div class="title-content">
                    <h2>
                        【北京站】陈小春 Stop Angry 巡回演唱会（北京站）
                    </h2>
                    <span class="price">¥380-¥1280</span>
                </div>
            </div>
            <Detailmain></Detailmain>
        </div>
        <div class="detail-footer">
            <div class="footer-love">
                <span class="index">大麦首页</span>
                <span class="love">关注</span>
            </div>
            <div class="footer-buy">立即购买</div>
        </div>
    </div>
</template>

<script>
import Detailmain from '../components/Detailcom/Detailmain.vue'
export default {
    components:{
        Detailmain,
    }
}
</script>


<style lang="less">
    #detail{
        width: 100%;
        // height: 1000px;
        background: url("https://gd3.alicdn.com/imgextra/i4/2/O1CN01M8Alg72GdS9Uh2nP3_!!2-item_pic.png_400x400") no-repeat;
        background-size: 100%; 
        .detail-main{
            width: 100%;
            // background: red;
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            // bottom: 50px;
            padding-bottom: 44px;
            .main-title{
                width: 100%;
                height: 178px;
                background-color: rgba(0,0,0,0.5);
                padding: 20px 15px;
                box-sizing: border-box; 
                display: flex;
                justify-content: space-between;
                align-items: center;
                .title-img{
                    width: 100px;
                    height: 135px;
                    background: url("https://gd3.alicdn.com/imgextra/i4/2/O1CN01M8Alg72GdS9Uh2nP3_!!2-item_pic.png_400x400") no-repeat;
                    background-size: 100%;
                }
                .title-content{
                    width: 175px;
                    height: 135px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h2{
                        font-weight: 700;
                        font-size: 16px;
                        letter-spacing: 0;
                        line-height: 20px;
                        text-align: justify;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        color: #fff;
                    }
                    .price{
                        font-size: 14px;
                        line-height: 16px;
                        color: #fff;
                    }
                }
            }
        }
        .detail-footer{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 44px;
            // background: blue;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .footer-love{
                width: 100px;
                height: 44px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #fff;
                .index{
                    display: block;
                    width: 50px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #eee; 
                }
                .love{
                    display: block;
                    width: 50px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #eee; 
                }
            }
            .footer-buy{
                width: 220px;
                height: 44px;
                line-height: 44px;
                text-align: center;
                background-color:  #ff407b;
                color: #fff;
            }
        }
    }
</style>
