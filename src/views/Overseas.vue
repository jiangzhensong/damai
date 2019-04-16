<template>
    <div id="overseas">
        <ListBanner></ListBanner>
        <div class="the-title">最IN明星演出</div>
        <StarShow></StarShow>
        <OverWarp></OverWarp>
        <h2 class="over-title">推荐</h2>
        <WrapList></WrapList>
        <router-view></router-view>
    </div>
</template>
<script>
import ListBanner from '../components/Overseas/OverBanner.vue'
import StarShow from '../components/Overseas/StarShow.vue'
import OverWarp from '../components/Overseas/OverWarp.vue'
import WrapList from '../components/Overseas/WrapList.vue'

export default {
    components:{
        ListBanner,
        StarShow,
        OverWarp,
        WrapList
    }
}
</script>
<style lang="less">
    .the-title{
        font-size: 18px;
        padding: 20px 0 0 15px;
        color: #111;
    }
    .over-title{
        font-weight: normal;
        font-size: 18px;
        line-height: 18px;
        color: #111;
        padding: 22px 15px 12px;
    }   
</style>


