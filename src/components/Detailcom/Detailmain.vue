<template>
    <div id="detailmain">
        <div class="main-list">
            <span class="list-tiem">2019.05.05 周日 19:00</span>
            <span class="list-text">演出时长约120分钟（以现场为准）</span>
        </div>
        <div class="main-address">
            <span class="add-city">北京市 | 凯迪拉克中心</span>
            <span class="add-add">北京海淀区复兴路69号</span>
        </div>
        <div class="artist">
            <h2>演出阵容</h2>
            <div class="artist-ar">
                <div class="artist-img">
                    <img src="https://intercms.damai.cn/artist/pic/1534413410929/1534413410929-main.jpg">
                </div>
                <div class="artist-con">
                    <span class="acon-title">
                        <i class="con-name">陈小春</i>
                        <b class="con-look">关注</b>
                    </span>
                    <p>陈小春，是香港电影演员及歌手。陈小春，是香港电影演员及歌手。陈小春，是香港电影演员及歌手。</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                演出介绍
            </h2>
            <p class="section-introduce">
                时隔近10年之久，陈小春将于今年11月起再次开办个人演唱会，此次全新巡演名为“陈小春Stop Angry巡回演唱会”，将登陆成都、佛山、南京、上海、武汉、北京等多座城市。值得一提的是，巡演的主题“Stop Angry”灵感来自陈小春儿子Jasper此前在综艺节目中喊话他的那句“Can you stop angry now”。而陈小春更是亲自参与到巡演歌单编排和舞美服装的设计当中，值得期待。此外，本次巡演启动发布会已在京盛大举办，歌迷朋友们可登陆大麦官网或下载大麦app及时了解演出最新动态。
            </p>
        </div>
    </div>
</template>

<style lang="less">
    #detailmain{
        width: 100%;
        background-color: #f8f8f8;
        .main-list{
            width: 100%;
            height: 70px;
            padding: 15px;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom: 1px solid #eee; 
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            .list-tiem{
                font-size: 14px;
                color: #000;
                font-weight: 700;
            }
            .list-text{
                font-size: 12px;
                color: #999;
            }
        }
        .main-address{
            width: 100%;
            height: 70px;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color:#fff; 
            margin-bottom: 10px;
            .add-city{
                font-size: 14px;
                color: #000;
                font-weight: 700;
            }
            .add-add{
                font-size: 12px;
                color: #999;
            }
        }
        .artist{
            width: 100%;
            height: 140px;
            box-sizing: border-box;
            padding: 0 15px;
            background: #fff;
            margin-bottom: 10px;
            h2{ 
                font-size: 20px;
                color: #000;
                font-weight: 700;
                padding: 15px 0;
            }
            .artist-ar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .artist-img{
                    width: 70px;
                    height: 70px;
                    img{
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                    }
                }
                .artist-con{
                    width: 215px;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-bottom: 15px;
                    .acon-title{
                        width: 215px;
                        height: 25px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        box-sizing: border-box;
                        padding-left:10px; 
                        .con-name{
                            color: #111;
                            font-size: 14px;
                            font-weight: 500;
                        }
                        .con-look{
                            display: block;
                            width: 60px;
                            height: 25px;
                            font-weight: normal;
                            text-align: center;
                            line-height: 25px;
                            border-radius: 12px;
                            color: #ff2d79;
                            background: rgba(255,45,121,.1);
                        }
                    }
                    p{  
                        box-sizing: border-box;
                        padding-left:10px; 
                        width: 215px;
                        height: 15px;
                        line-height: 15px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: 300;
                        color: #666;
                    }
                }
            }
        }
        .section{
            width: 100%;
            // height: 500px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 15px;
            .section-title{
                font-size: 20px;
                color: #000;
                font-weight: 700;
                box-sizing: border-box;
                padding: 15px 0;
            }
            .section-introduce{
                color: #888;
                font-size: 12px;
                line-height: 14px;
            }
        }
    }
</style>

