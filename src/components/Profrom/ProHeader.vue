<template>
    <div id="prohead">
        <ul class="pro-head">
            <li class="head-item"
                v-for="item in 8"
                :key="item"
            >
                <router-link to="">
                    全部
                </router-link>
            </li>
        </ul>
    </div>
</template>


<style lang="less">

    .head-item{
    }
</style>
