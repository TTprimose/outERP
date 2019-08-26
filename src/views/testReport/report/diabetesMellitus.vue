<template>
    <div class="report_box">
        <div v-for="(item, index) in reportData" :key="index">
            <!--第1页-->
            <div class="report_page">
                <div class="report_content">
                    <pageOne :userInfo="userInfo[index]" :reportInfo="reportInfo"></pageOne>
                </div>
                <bottmPage :page='{size: 1, all:5}'></bottmPage>
            </div>

            <!--第2页-->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <pageTwo :content="json.reportPageTwo()['糖尿病风险测评']"></pageTwo>
                    </div>
                </div>
                <bottmPage :page='{size: 2, all:5}'></bottmPage>
            </div>
            <!--第3页-->
            <div class="report_page">
                <div class="report_conetnt">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo" :pageTitle="pageTitle"></headerPage>
                        <div class="pagecontent_page">
                            <div>
                                <div class="diabete_complicate_title">
                                    <span>1、糖尿病并发症专项</span>
                                </div>
                                <div class="diabete_complicate_content">
                                    <riskLine v-for="(zkzyitem,index) in complicationRisk" :key="index" :index="index" :zkzyInfo="zkzyitem"  :rankList='jsonData["complicationRisk"][zkzyitem.funcation_explain]'></riskLine>
                                </div>
                                <explainLntroOne></explainLntroOne>
                                <div class="diabete_complicate_sussage">
                                    <div class="sussage_title">改善建议：</div>
                                    <div class="sussage_content">对于普通人群,若β细胞功能风险长期高、偏高,则并发症风险较高,应该引起注意,定期进行检测。如有糖尿病家族史,更需要引起注意。</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page='{size: 3, all:5}'></bottmPage>
            </div>
            <!--第4页-->
            <div class="report_page">
                <div class="report_conetnt">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo" :pageTitle="pageTitle"></headerPage>
                        <div class="pagecontent_page">
                            <div>
                                <div class="diabete_complicate_title">
                                    <span>2、糖尿病修复能力</span>
                                </div>
                                <div class="diabete_complicate_content">
                                    <riskLine v-for="(zkzyitem,index) in repairCapacity" :key="index" :index="index" :zkzyInfo="zkzyitem"  :rankList='jsonData["repairCapacity"][zkzyitem.funcation_explain]'></riskLine>
                                </div>
                                <explainLntroTwo></explainLntroTwo>
                                <div class="diabete_complicate_sussage">
                                    <div class="sussage_title">改善建议：</div>
                                    <div class="sussage_content">修复能力说明细胞及器官的调节能力，长期等级高，不利于机体健康。</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page='{size:4, all:5}'></bottmPage>
            </div>
            <!--第5页-->
            <div class="report_page">
                <div class="report_conetnt">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo" :pageTitle="pageTitle"></headerPage>
                        <div class="pagecontent_page">
                            <div>
                                <kjzlList v-for="(zkzyitem,index) in zkzy" :key="index" :index="index" :zkzyInfo="zkzyitem"  :rankList='jsonData["zkzy"][zkzyitem.funcation_explain]'></kjzlList>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page='{size:5, all:5}'></bottmPage>
            </div>

        </div>
    </div>
</template>
<script>
import global from "../../../utils/global";
import bottmPage from '../../../components/report/bottomPageSize'
import pageOne from '../../../components/report/reportOne'
import pageTwo from '../../../components/report/reportTwo'
import headerPage from '../../../components/report/headerPage'
import riskLine from '../../../components/report/pages/riskLine'
import http from '../../../../src/api/report/report'
import explainLntroOne from '../../../components/report/pages/explainLntroOne'
import explainLntroTwo from '../../../components/report/pages/explainLntroTwo'
import kjzlList from '../../../components/report/pages/zkzyList'

export default {
    name: "",
    data() {
        return {
            reportData:[],
            url:global.imgUrl,
            userInfo:[
                [
                    {
                        name: "姓名",
                        value: "胡国元"
                    },
                    {
                        name: "联系方式",
                        value: "135****5212"
                    },
                    {
                        name: "性别",
                        value: "男"
                    },
                    {
                        name: "检测时间",
                        value: "2019-08-08"
                    }
                ]
            ],
            reportInfo:{
                logo: global.imgUrl + "cell_logo.png",
                name: '糖尿病风险测评',
                smallName: '专项健康检测报告  '
            },
            pageTitle:{
                title: '糖尿病风险评估'

            },
            pageInfo:{
                list: [
                    {
                        name: "姓名",
                        value: "胡国元"
                    },
                    {
                        name: "联系方式",
                        value: "135****5212"
                    },
                    {
                        name: "性别",
                        value: "男"
                    },
                    {
                        name: "检测时间",
                        value: "2019-08-08"
                    }
                ]
            },
            jsonData: {
                'complicationRisk':{
                    'β细胞功能风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '葡萄糖耐量受损风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '胰岛素抵抗风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '心血管风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '肾风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '眼底风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'

                    },
                    '下肢风险':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    }
                },
                'repairCapacity':{
                    'β细胞修复能力':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '心血管修复能力':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '肾修复能力':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '眼底修复能力':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    },
                    '下肢修复能力':{
                        rank1:'低',
                        rank2:'偏低',
                        rank3:'中',
                        rank4:'偏高',
                        rank5:'高'
                    }
                },
                'zkzy':{
                    '健康风险':{
                        rank1:'较低',
                        rank2:'偏低',
                        rank3:'偏高',
                        rank4:'较高',
                        rank5:'过高'
                    },
                    '能量储备':{
                        rank1:'较低',
                        rank2:'偏低',
                        rank3:'正常',
                        rank4:'偏高',
                        rank5:'较高'
                    },
                    '精神压力':{
                        rank1:'较低',
                        rank2:'偏低',
                        rank3:'偏高',
                        rank4:'较高',
                        rank5:'过高'
                    },
                    '抗氧化能力':{
                        rank1:'较低',
                        rank2:'偏低',
                        rank3:'正常',
                        rank4:'偏高',
                        rank5:'较高'
                    },
                    '耗氧率':{
                        rank1:'较低',
                        rank2:'偏低',
                        rank3:'正常',
                        rank4:'偏高',
                        rank5:'较高'
                    },
                    '自主神经功能':{
                        rank1:'副交感神经中度兴奋',
                        rank2:'副交感神经轻度兴奋',
                        rank3:'自主神经系统兴奋性正常',
                        rank4:'交感神经轻度兴奋',
                        rank5:'交感神经中度兴奋',
                        rank6:'自主神经系统兴奋性失调'
                    }
                }
            }
        };
    },
    components: {
        bottmPage,
        pageOne,
        pageTwo,
        headerPage,
        riskLine,
        explainLntroOne,
        explainLntroTwo,
        kjzlList
    },
    methods: {},
    created() {
        let obj = {
            examIds: '15651720924651803a20233d5'
        }

        http.getDiabetesReport(obj).then(({data})=>{
            this.reportData = data;
            // console.log(this.reportData.data)
            this.reportData.forEach((item, index)=>{
                // 获取用户信息
                this.userInfo[index][0].value = item["examAndUserInfo"].userName;
                this.userInfo[index][1].value = item["examAndUserInfo"].userPhone;
                this.userInfo[index][2].value = item["examAndUserInfo"].userSex == 1 ? "男" : "女";
                this.userInfo[index][3].value = this.$moment(item["examAndUserInfo"].createTime).format("YYYY-MM-DD");

                this.pageInfo.list[0].value = item["examAndUserInfo"].userName;
                this.pageInfo.list[1].value = item["examAndUserInfo"].userPhone;
                this.pageInfo.list[2].value = item["examAndUserInfo"].userSex == 1 ? "男" : "女";
                this.pageInfo.list[3].value = this.$moment(item["examAndUserInfo"].createTime).format("YYYY-MM-DD");

                // console.log(this.userInfo)
                // console.log(this.userInfo[index][1])
                // console.log(this.userInfo[index][1].value)
                // console.log(index)
                // 最后3页数据
                this.zkzy = item["report"].zkzy;
                this.complicationRisk = item["report"].complicationRisk;
                this.repairCapacity = item["report"].repairCapacity;



            })
        })
    },
    mounted() {
        // window.print()
    },
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.pagecontent_page{
    font-size: 22px;
    color:#333;
    .diabete_complicate_title{
        font-size: 28px;
        margin-bottom:20px;
    }
    .diabete_complicate_sussage{
        color:#666;
        margin:20px 0;
        .sussage_title{
            color: #2dbdb6;
            margin: 30px 0 20px;
            font-size: 22px;
            font-family: "Microsoft YaHei";
        }
        .sussage_content{
            font-size:20px;

        }

    }
    .img_small_title{
        display: flex;
        align-items: center;
        margin: 20px 0;
        img{
            width: 28px;
            height: 28px;
            margin-right: 5px;
        }
    }
    .page_slider_content{
        font-size: 20px;
        color: #666;

        span{
            font-size: 38px;
            position: relative;
            top: 8px;
        }
    }

}


</style>
