<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://img.alicdn.com/tps/i4/TB1HjezPwHqK1RjSZFkSut.WFXa.jpg_q50.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="https://img.alicdn.com/tps/i4/TB1kl4CNbvpK1RjSZFqSuwXUVXa.jpg_q50.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="https://img.alicdn.com/tps/i4/TB1cvaTOCzqK1RjSZPcwu2TepXa.png_q50.jpg_.webp">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
export default {
  mounted(){
    new Swiper('.swiper-container',{
        autoplay: {
            delay:1000,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
  }
}
</script>
<style lang="less">
.swiper-container {
    width: 100%;
    height: 110px;
    img{
        width: 100%
    }
    .swiper-pagination{
        // opacity: 0.5;
        // background: #ffffff;
        .swiper-pagination-bullet{
            opacity: 0.5;
        }
        .swiper-pagination-bullet-active{
            opacity: 0.8;
            background-color: #ffffff;
        }
    }
}  
</style>

