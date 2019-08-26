<template>
    <div>
        <wehchatCodeHead v-if="stystemName" :title="{name: stystemName}"></wehchatCodeHead>
        <div class="system" v-if='riskData&&stystemImg'>
            <img :src="url+stystemImg" alt="">
            <div class="report6_tle_table">
                <multilevelTable  :tableTitle='riskTitle' :tableData='riskData'></multilevelTable>
            </div>
        </div>
        <tellNumberTow  v-if='riskData&&stystemImg'></tellNumberTow>
        <colorTable :tableTitle='stystemTitle' :tableData='stystemData'></colorTable>
    </div>
</template>
<script>
import global from "../../../utils/global";
import colorTable from '../../../components/report/pages/colorTable'
import multilevelTable from '../../../components/report/pages/multilevelTable'
import wehchatCodeHead from "../../../components/report/pages/wehchatCodeHead";
import tellNumberTow from "../../../components/report/pages/tellNumberTow"
// import { constants } from 'crypto';

export default {
    data(){
        return {
            url: global.imgUrl
        }
    },
    created(){
        this.stystemData.forEach(item => {
            switch (item.diminished){
            case '衰退':
                item.diminished = {name:'▼衰退', color:'#1383a9'};
                break;
            case '正常':
                item.diminished = {name:'●正常', color:'#13ce35'};
                break;
            case '亢奋':
                item.diminished = {name:'■亢奋', color:'#ffb300'};
                break;
            default:
                break
            }

            switch (item.hyperactivity){
            case '衰退':
                item.hyperactivity = {name: '▼衰退', color:'#1383a9'};
                break;
            case '正常':
                item.hyperactivity = {name: '●正常', color:'#13ce35'};
                break;
            case '亢奋':
                item.hyperactivity = {name: '■亢奋', color:'#ffb300'};
                break;
            default:
                break
            }
        });
    },
    components:{
        colorTable,
        multilevelTable,
        wehchatCodeHead,
        tellNumberTow
    },
    props:{
        stystemTitle:{
            type:Object,
            default(){
                return {}
            }
        },
        stystemData:{
            type:Array,
            default(){
                return []
            }
        },
        riskTitle:{
            type:Object,
            default(){
                return {}
            }
        },
        riskData:{
            type:Array,
            default(){
                return []
            }
        },
        stystemName:{
            type:String,
            default(){
                return ''
            }
        },
        stystemImg:{
            type:String,
            default(){
                return ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .system{
        position: relative;
        font-size: 18px;
        min-height: 170px;
        img{
            position: absolute;
            top: 50%;
            left: 5%;
            margin-top: -61px;
        }
        .report6_tle_table{
            margin-left: 250px;
            min-height: 170px;
            position: relative;
        }
    }
</style>
