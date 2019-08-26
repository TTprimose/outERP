<template>
    <div>
        <div class="report_box" v-for="(item,index) in reportData" :key="index">
            <!--第一页-->
            <div class="report_page">
                <div class="report_content">
                    <pageOne :userInfo="userInfo" :reportInfo="reportInfo"></pageOne>
                </div>
                <bottmPage :page='{size: 1, all:4}'></bottmPage>
            </div>

            <!--第二页-->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <pageTwo :content="json.reportPageTwo()['脑健康报告']"></pageTwo>
                    </div>
                </div>
                <bottmPage :page='{size: 2, all:4}'></bottmPage>
            </div>

            <!--第三页-->
            <div class="report_page">
                <div class="report_conetnt">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <div class="pagecontent_brain">
                                <div class="echart_list">
                                    <div class="page2_part">1、{{item.report.leftRightBrain[0].funcation_explain}}：<span
                                            class="rank">{{rank}}级</span></div>
                                    <!-- <div id="'main6_1'+index" style="width: 500px;height:300px;margin-bottom:30px"></div> -->
                                    <img :src="url+brainLeftName">
                                </div>
                                <div class="echart_list">
                                    <div class="page2_part">2、{{item.report.leftRightBrain[1].funcation_explain}}：<span
                                            class="rank">{{rank}}级</span></div>
                                    <!-- <div id="'main6_1'+index" style="width: 500px;height:300px;margin-bottom:30px"></div> -->
                                    <img :src="url+brainRightName">
                                </div>
                            </div>
                            <div class="echart_picture">
                                <div class="page2_part">3、脑部10个关联体区</div>
                                <v-chart
                                    style="width:100%;height:320px"
                                    :options="echartsList['脑血管'][index]"
                                    :auto-resize="true"
                                ></v-chart>
                                <p>
                                    风险临界值：第1-4以及15-18体区数值小于40,第9、第10体区数值小于60
                                </p>
                            </div>
                            <div class="brain_level">
                                <p>脑神经健康风险等级：<span>{{rank}}级</span></p>
                                <div>正常，暂无风险</div>
                            </div>
                            <tellNumber></tellNumber>
                        </div>
                    </div>
                </div>
                <bottmPage :page='{size: 3, all:4}'></bottmPage>
            </div>

            <!--第四页-->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <div class="img_small_title">
                                <img :src="url + 'one.png'" alt />
                                <p>{{item.report.zkzy[0].funcation_explain}}</p>
                            </div>
                            <slider level="偏低"></slider>
                            <p class="page_slider_content">
                                <span>◎</span>{{item.report.zkzy[0].changeC}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'two.png'" alt />
                                <p>{{item.report.zkzy[1].funcation_explain}}</p>
                            </div>
                            <slider level="高"></slider>
                            <p class="page_slider_content">
                                <span>◎</span>{{item.report.zkzy[1].changeC}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'three.png'" alt />
                                <p>{{item.report.zkzy[2].funcation_explain}}</p>
                            </div>
                            <slider level="偏低"></slider>
                            <p class="page_slider_content">
                                <span>◎</span>{{item.report.zkzy[2].changeC}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'four.png'" alt />
                                <p>{{item.report.zkzy[3].funcation_explain}}</p>
                            </div>
                            <slider level="中"></slider>
                            <p class="page_slider_content">
                                <span>◎</span>{{item.report.zkzy[3].changeC}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'five.png'" alt />
                                <p>{{item.report.zkzy[4].funcation_explain}}</p>
                            </div>
                            <slider level="低"></slider>
                            <p class="page_slider_content">
                                <span>◎</span>{{item.report.zkzy[4].changeC}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'six.png'" alt />
                                <p>{{item.report.zkzy[5].funcation_explain}}</p>
                            </div>
                            <slider level="偏高"></slider>
                            <p class="page_slider_content">
                                <span>◎</span>{{item.report.zkzy[5].changeC}}
                            </p>
                        </div>
                    </div>
                </div>
                <bottmPage :page='{size: 4, all:4}'></bottmPage>
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
import tellNumber from '../../../components/report/pages/tellNumber'
import slider from '../../../components/report/pages/sliderHighLow'
import api from '../../../../src/api/report/report'
import echartsOption from "../../../utils/echartsOption"

export default {
    name: "",
    data() {
        return {
            url:global.imgUrl,
            brainLeftName:'',
            brainRightName:'',
            userInfo:[
                {
                    name:'姓名',
                    value:'星辰'
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
            ],
            reportInfo:{
                logo: global.imgUrl + "cell_logo.png",
                name: '脑健康检测报告',
                smallName: '专项健康检测报告'
            },
            pageInfo:{
                title: '脑神经健康风险评估',
                list: [
                    {
                        name:'姓名',
                        value:'星辰'
                    },
                    {
                        name:'联系方式',
                        value:'12435641263'
                    },
                    {
                        name:'性别',
                        value:'男'
                    },
                    {
                        name:'检测时间',
                        value:'2019-08-12'
                    }
                ]
            },
            rank:1,
            reportData:[],
            echartsList:{
                "脑血管":[]
            }
        };
    },
    components: {
        bottmPage,
        pageOne,
        pageTwo,
        headerPage,
        tellNumber,
        slider
    },
    methods: {},
    created() {
        let obj = {
            examIds: '15662796761991803a20232da'
        }

        api.getBrainReport(obj).then(({data})=>{
            this.reportData = data;
            console.log(this.reportData)
            
            console.log(this.pageInfo.list[0].value)
            data.forEach((item, index)=>{
                console.log(item)

                //用户信息
                this.userInfo[0].value = item.examAndUserInfo.userName;
                this.userInfo[1].value = item.examAndUserInfo.userPhone;
                this.userInfo[2].value = 
                    item.examAndUserInfo.userSex == 1 ? "男" : "女";

                this.userInfo[3].value = this.$moment(
                    item.examAndUserInfo.createTime
                ).format("YYYY-MM-DD");


                //headerPage里面的横向用户信息
                this.pageInfo.list[0].value = item.examAndUserInfo.userName;
                this.pageInfo.list[1].value = item.examAndUserInfo.userPhone;
                this.pageInfo.list[2].value = 
                    item.examAndUserInfo.userSex == 1 ? "男" : "女";

                this.pageInfo.list[3].value = this.$moment(
                    item.examAndUserInfo.createTime
                ).format("YYYY-MM-DD");

                //级别
                this.rank = item.report.leftRightBrain[0].changeC;

                if (this.rank == 1) {
                    this.brainLeftName = 'brainLeft_1.png';
                    this.brainRightName = 'brainNerve_one.png';
                } else if (this.rank == 2) {
                    this.brainLeftName = 'brainLeft_2.png';
                    this.brainRightName = 'brainNerve_two.png';
                } else if (this.rank == 3) {
                    this.brainLeftName = 'brainLeft_3.png';
                    this.brainRightName = 'brainNerve_three.png';
                } else if (this.rank == 4) {
                    this.brainLeftName = 'brainLeft_4.png';
                    this.brainRightName = 'brainNerve_four.png';
                } else {
                    this.brainLeftName = 'brainLeft_5.png';
                    this.brainRightName = 'brainNerve_five.png';
                }

                //脑血管echart图
                this.echartsList["脑血管"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                for (let i = 0; i < 10; i++) {
                    this.echartsList["脑血管"][index].xAxis[0].data.push(
                        `第${item.report.brainRelationTagma[i].funcation_explain}体区`
                    );
                    this.echartsList["脑血管"][index].series[0].data.push(
                        item.report.brainRelationTagma[i].examTranstion
                    );
                }
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
}
.pagecontent_page .pagecontent_brain{
    display: flex;
}
.pagecontent_page .page2_part,.brain_level{
    color: #49b1ae;
}
.echart_picture{
    margin-top: 60px;
}
.echart_picture p{
    border: 1PX solid #DDD;
    color: #666;
    padding: 20px 20px;
    margin: 20px 0;
}
.brain_level{
    margin: 60px 0 100px 0;
}
.echart_picture p,.brain_level div{
    font-size: 18px;
}
.brain_level div{
    margin-top: 20px;
    color: #666;
}
.pagecontent_page{
    .img_small_title{
        display: flex;
        align-items: center;
        img{
            width: 28px;
            height: 28px;
        }
        p{
            padding-left: 10px;
            font-size: 28px;
            color: #49b1ae;
        }
    }
    .page_slider_content{
        font-size: 20px;
        color: #666;
        margin-bottom: 30px;
        span{
            font-size: 38px;
            position: relative;
            top: 8px;
        }
    }
}
</style>
