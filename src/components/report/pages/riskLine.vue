<template>
    <div>
        <div class="diabete_complicate_content">
            <div class="kjzl_title">
                <p>{{zkzyInfo.funcation_explain}}：<span>{{zkzyInfo.changeC}}</span></p>
            </div>
            <div class="kjzl_content">
                <ul class="kjzl_ul" >
                    <li v-for="(item,index) in rankList" :key="index" class="kjzl_li" :style="zkzyInfo.changeC==item?'background-color:#28c7c2;color:#fff':''">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            zkzyList:[]
        }
    },
    created(){

    },
    methods:{

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
    .diabete_complicate_content{
        color:#333;
    }
    .kjzl_title{
        font-size: 22px;
        margin: 25px 0;

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
        }
    }
    .diabete_complicate_content p{
        font-size: 22px;
    }
    .diabete_complicate_content span{
        color: #49b1ae;
    }

</style>
