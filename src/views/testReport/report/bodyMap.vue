<template>
    <div class="report_box">
        <div v-for="(item, index) in reportData" :key="index">
            <!-- 第 1 页 -->
            <div class="report_page">
                <div class="report_content">
                    <pageOne :userInfo="userInfo[index]" :reportInfo="reportInfo"></pageOne>
                </div>
                <bottmPage :page="{size: 1, all:10}"></bottmPage>
            </div>
            <!-- 第 2 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <pageTwo :content="json.reportPageTwo()['身体地图健康测评']"></pageTwo>
                    </div>
                </div>
                <bottmPage :page="{size: 2, all:10}"></bottmPage>
            </div>
            <!-- 第 3 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '检测评分情况'}"></wehchatCodeHead>
                        <colorTable :tableTitle='jsonData["检测评分"]' :tableData="testScore"></colorTable>
                        <div class="report_content_intro">
                            <div class="report_content_intro_title">评分说明：</div>
                            <div class="report_content_intro_content">
                                <p><span>◎</span> 项目评分只代表该项目内所有指标的综合评分，不排除正常项目评分中有严重异常的指标检测结果。 </p>
                                <ul>
                                    <li>89~100分 整体情况优良 </li>
                                    <li>79~88分 有指标出现问题，需要引起注意。 </li>
                                    <li>69~78分 指标异常，需要引起重视。 </li>
                                    <li>68分以下 需要去医院进行检验。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page='{size: 3, all:10}'></bottmPage>
            </div>
            <!-- 第 4 页 -->
            <!-- <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '指标检测情况'}"></wehchatCodeHead>
                        <colorTable :tableTitle='jsonData["指标检测"]' :tableData="indicatorTest"></colorTable>

                    </div>
                </div>
                <bottmPage :page='{size: 4, all:10}'></bottmPage>
            </div> -->

        </div>
    </div>
</template>
<script>
import global from "../../../utils/global"
import bottmPage from "../../../components/report/bottomPageSize";
import pageOne from "../../../components/report/reportOne";
import pageTwo from "../../../components/report/reportTwo";
import wehchatCodeHead from "../../../components/report/pages/wehchatCodeHead";
import colorTable from "../../../components/report/pages/colorTable";
import http from '../../../../src/api/report/report'

export default {
    name: "",
    data() {
        return {
            reportData:[],
            url: global.imgUrl,
            //第一页数据
            userInfo: [
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
            pageInfo: {
                title: "身体地图健康测评",
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
            reportInfo: {
                logo: global.imgUrl + "cell_logo.png",
                name: "身体地图检测报告",
                smallName: "全身健康检测报告  "
            },

            //间质生化，经络，疾病风险数据
            jsonData: {
                '检测评分': {
                    '项目名称': {
                        name: 'itemName',
                        width: null
                    },
                    '检测评分': {
                        name: 'functionStatus',
                        width: null
                    }
                }


            },
            tableData: [

            ],
            testScore: [
                {
                    itemName: "身体状况",
                    functionStatus:"94"
                },
                {
                    itemName: "肝功能",
                    functionStatus:"91"
                },
                {
                    itemName: "肺功能",
                    functionStatus:"94"
                },
                {
                    itemName: "胰岛功能",
                    functionStatus:"92"
                },
                {
                    itemName: "免疫系统",
                    functionStatus:"92"
                },
                {
                    itemName: "子宫附件",
                    functionStatus:"91"
                },
                {
                    itemName: "维生素",
                    functionStatus:"94"
                },
                {
                    itemName: "微量元素",
                    functionStatus:"91"
                },
                {
                    itemName: "重金属",
                    functionStatus:"94"
                },
                {
                    itemName: "皮肤状况",
                    functionStatus:"94"
                }
            ]

        }
    },
    components: {
        pageOne,
        pageTwo,
        bottmPage,
        wehchatCodeHead,
        colorTable

    },
    methods: {},
    created() {
        let obj = {
            examIds: '1566466706636090519010002'
        }

        http.getBodyMapReport(obj).then(({data})=>{
            this.reportData = data;
            console.log(this.reportData)
            // console.log(this.reportData.data)
            data.forEach((item, index)=>{
                // 获取用户信息
                this.userInfo[index][0].value = item["examAndUserInfo"].userName;
                this.userInfo[index][1].value = item["examAndUserInfo"].userPhone;
                this.userInfo[index][2].value = item["examAndUserInfo"].userSex == 1 ? "男" : "女";
                this.userInfo[index][3].value = this.$moment(item["examAndUserInfo"].createTime).format("YYYY-MM-DD");


            })
        })
    },
    mounted() {
        // window.print()
    },
    props: {},
    computed: {},
    watch: {}
}

</script>
<style scoped lang="less">
    .report_content{
        color:#333;
    }
    .report_content_intro_title{
        font-size: 30px;
        color: rgb(0,130,138);
        margin-top: 45px;
        margin-bottom: 30px;
    }
    .report_content_intro_content{
        font-size: 24px;
        color: rgb(102,102,102);
        line-height: 32px;
    }
    .report_content_intro_content p{
        margin-bottom:40px;
    }
    .report_content_intro_content p span{
        font-size: 36px;
    }


</style>
