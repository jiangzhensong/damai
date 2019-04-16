<template>
    <div id="prohead">
        <ul class="pro-head">
            <li class="head-item"
                v-for="item in 8"
                :key="item"
            >
                <router-link class="aa" to="">
                    全的部
                </router-link>
            </li>
        </ul>
    </div>
</template>


<style lang="less">
    #prohead{
        display: fixed;
        top: 0;
        left: 0;
        overflow-x: auto;
        overflow-y: hidden;
        height: 50px;
        .pro-head{
            display:flex;
            align-items: center;
            .head-item{
                height: 32px;
                flex: 1 0 auto;
                box-sizing: border-box;
                margin: 0 10px;
                font-size: 14px;
                line-height: 32px;
                position: relative;
                // font-weight: 400;
                &::after{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 25px;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    height: 2px;
                    background: #ff1268;
                    border-radius: 1px;
                }
            }
            .aa{
                color: #111;
            }
           
        }
    }
</style>
