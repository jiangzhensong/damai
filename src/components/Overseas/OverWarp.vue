<template>
    <div class="overwrap">
        <h2 class="wrap-title">热门目的地</h2>
        <ul class="wrap-adlist">
            <li class="wrap-adlist-item"
                v-for="(item,index) in imglist"
                :key="index"
            >
                <router-link to="">
                    <img :src="item"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imglist:[
                "//img.alicdn.com/tps/i4/TB1WsMKuyAnBKNjSZFvSuuTKXXa.jpg",
                "//img.alicdn.com/tps/i4/TB17o4VuCYTBKNjSZKbSutJ8pXa.jpg",
                "//img.alicdn.com/tps/i4/TB1YzOFLW6qK1RjSZFmSut0PFXa.jpg",
            ]
        }
    }
}
</script>

<style lang="less">
    .overwrap{
        width: 100%;
        height: 134px;
        padding: 0 15px;
        .wrap-title{
            font-weight: normal;
            font-size: 18px;
            line-height: 18px;
            color: #111;
            margin: 22px 0;
        }
        .wrap-adlist{
            display: flex;
            justify-content: space-between;
            .wrap-adlist-item{
                width: 94px;
                height: 94px;
                img{
                    display: block;
                    width: 94px;
                    height: 94px;
                    border-radius: 5px;
                }
            }
        }
    }
</style>
