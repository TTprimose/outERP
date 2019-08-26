<template>
    <div>
        <div class="kjzl_title">
            <div>
                <img :src="url + 'numIcon.png'" alt />
                <span>{{index + 1}}</span>
            </div>
            <div class="title">{{zkzyInfo.funcation_explain}}</div>
        </div>
        <div class="kjzl_content">
            <ul class="kjzl_ul" >
                <li v-for="(item,index) in rankList" :key="index" class="kjzl_li" :style="zkzyInfo.functionStatus==item?'background-color:#28c7c2;color:#fff':''">{{item}}</li>
            </ul>
        </div>
        <div class="kjzl_sussage">
            <span>◎</span> {{zkzyInfo.changeC}}
        </div>
    </div>
</template>
<script>
import global from '../../../utils/global'

export default {
    data(){
        return {
            zkzyList:[],
            url: global.imgUrl
        }
    },
    created(){
        if (this.zkzyInfo.funcation_explain){
            switch (this.zkzyInfo.funcation_explain) {
            case '健康风险':
                this.zkzyInfo.functionStatus = this.rank_jkfx(this.zkzyInfo.functionStatus);
                break;
            case '能量储备':
                this.zkzyInfo.functionStatus = this.rank_nlcb(this.zkzyInfo.functionStatus);
                break;
            case '精神压力':
                this.zkzyInfo.functionStatus = this.rank_jsyl(this.zkzyInfo.functionStatus);
                break;
            case '抗氧化能力':
                this.zkzyInfo.functionStatus = this.rank_kyhnl(this.zkzyInfo.functionStatus);
                break;
            case '耗氧率':
                this.zkzyInfo.functionStatus = this.rank_hyl(this.zkzyInfo.functionStatus);
                break;
            case '自主神经功能':
                this.zkzyInfo.functionStatus = this.rank_zzsj(this.zkzyInfo.functionStatus);
                break;
            default:
                break;
            }
        }

    },
    methods:{
        //this.zkzyInfo.functionStatus
        rank_jkfx(data){
            let str = ''

            switch (true){
            case data < 20:str = '较低';break;
            case data >= 20 && data < 40:str = '偏低';break;
            case data >= 40 && data < 60:str = '偏高';break;
            case data >= 60 && data < 80:str = '较高';break;
            case data >= 80:str = '过高';break;
            default:break;
            }
            return str;
        },
        rank_nlcb(data){
            let str = ''

            switch (true){
            case data < 40:str = '较低';break;
            case data >= 40 && data < 60:str = '偏低';break;
            case data >= 60 && data < 85:str = '正常';break;
            case data >= 85 && data < 95:str = '偏高';break;
            case data >= 95:str = '较高';break;
            default:break;
            }
            return str;
        },
        rank_jsyl(data){
            let str = ''

            switch (true){
            case data == '一级':str = '较低';break;
            case data == '二级':str = '偏低';break;
            case data == '三级':str = '偏高';break;
            case data == '四级':str = '较高';break;
            case data == '五级':str = '过高';break;
            default:break;
            }
            return str;
        },
        rank_kyhnl(data){
            let str = ''

            switch (true){
            case data == '较低':str = '较低';break;
            case data == '偏低':str = '偏低';break;
            case data == '正常':str = '正常';break;
            case data == '偏高':str = '偏高';break;
            case data == '较高':str = '较高';break;
            default:break;
            }
            return str;
        },
        rank_hyl(data){
            let str = ''

            switch (true){
            case data == '较低':str = '较低';break;
            case data == '偏低':str = '偏低';break;
            case data == '正常':str = '正常';break;
            case data == '偏高':str = '偏高';break;
            case data == '较高':str = '较高';break;
            default:break;
            }
            return str;
        },
        rank_zzsj(data){
            let str = ''

            switch (true){
            case data == '副交感神经中度兴奋':str = '副交感神经中度兴奋';break;
            case data == '副交感神经轻度兴奋':str = '副交感神经轻度兴奋';break;
            case data == '自主神经系统兴奋性正常':str = '自主神经系统兴奋性正常';break;
            case data == '交感神经轻度兴奋':str = '交感神经轻度兴奋';break;
            case data == '交感神经中度兴奋':str = '交感神经中度兴奋';break;
            case data == '自主神经系统兴奋性失调':str = '自主神经系统兴奋性失调';break;
            default:break;
            }
            return str;
        }
    },
    props:{
        zkzyInfo:{
            type:Object,
            return(){

            }
        },
        rankList:{
            type:Object,
            return(){

            }
        },
        index:{
            type:Number,
            return(){

            }
        }
    }
}
</script>
<style scoped lang="less">
    .kjzl_title{
        margin: 20px 0;
        div{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            img{
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
            span{
                color: white;
                font-size: 15px;
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .title{
            font-size: 22px;
            color: #25a5a1;
        }
    }
    .kjzl_content{
        ul{
            width: 100%;
            background-color: #ecf0f3;
            font-size: 16px;
            display: flex;
        }
        li{
            flex: auto;
            display: inline-block;
            max-height: 60px;
            text-align: center;
            padding: 10px 25px;
            color: #666;
        }
    }
    .kjzl_sussage{
        font-size: 20px;
        color: #666!important;
        margin-bottom: 30px;
        span{
            font-size: 38px;
            position: relative;
            top: 8px;
        }
    }
</style>
