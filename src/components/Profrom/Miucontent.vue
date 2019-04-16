<template>
    <div id="miushead">
        <div class="miu-title">
            <div class="miu-title-item"
                v-for="item in 4"
                :key="item"
            >
                全部时间
            </div>
        </div>
        <WrapList></WrapList>
    </div>
</template>

<script>
import WrapList from './ProList.vue'
export default {
     components:{
         WrapList
     }
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
            .miu-title-item{
                
            }
        }
    }
</style>
