<template>
    <div>
        <div class="pic_box">
            <div class="pic_title">{{healthyPicInfo.picTitle}}</div>
            <div class="pic_content">
                <div class="report_ph1">
                    <img class="body_func" :src="imgUrl + healthyPicInfo.body" alt="">
                </div>
                <div class="report_ph2">
                    <img class="vtb_func" :src="imgUrl + healthyPicInfo.vtb" alt="">
                    <div class="pic_tip">
                        <div class="tip_title">{{healthyPicInfo.tipTitle}}</div>
                        <div class="tip_content">
                            <ul>
                                <li><span class="active_k">●</span>亢奋</li>
                                <li><span class="active_j">●</span>健康</li>
                                <li><span class="active_s">●</span>衰退</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import global from '../../utils/global'

export default {
    data() {
        return {
            imgUrl:'https://testgif.kuaijianzhiliao.com'
        }
    },
    props:{
        healthyPicInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style scoped lang="less">
    .pic_title{
        font-size: 28px;
        line-height: 28px;
        color: #25a5a1;
    }
    .report_ph1{
        font-size: 16px;
        display: inline-block;
        vertical-align: bottom;
        width: 250px;
    }
    .report_ph2{
        font-size: 16px;
        display: inline-block;
        vertical-align: bottom;
        width: 140px;
    }

    .pic_content{
        width: 400px;
        margin: 0 auto;
        text-align: center;
        .body_func{
            width: 203px;
            height: 506px;
        }
        .vtb_func{
            width: 45px;
            height: 246px;
        }
    }
    .tip_title{
        font-size: 16px;
        margin-left: 20px;
    }
    .active_k{
        font-size: 24px;
        color: #ff7e00;
    }
    .active_j{
        font-size: 24px;
        color: #13ce35;
    }
    .active_s{
        font-size: 24px;
        color: #009fe8;
    }
</style>
