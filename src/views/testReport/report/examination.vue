<template>
    <div class="report_box">
        <div  v-for="(item, index) in reportData" :key="index">
            <div class="report_page">
                <div class="report_content">
                    <pageOne :reportInfo="reportInfo" :userInfo="userInfo[index]"></pageOne>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[1], all:allPages}'></bottmPage>
            </div>
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <pageTow :content="json.reportPageTwo()['无创全身']"></pageTow>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[2], all:allPages}'></bottmPage>
            </div>
            <!-- 第 3 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '健康画像'}"></wehchatCodeHead>
                        <div class="report_healthly">健康度：<span class="marks">{{marks}}</span></div>
                        <healthyPic :healthyPicInfo="bodyFuncInfo"></healthyPic>
                        <healthyPic :healthyPicInfo="bodyTranInfo"></healthyPic>
                        <div class="healthyNote">
                            <div>注：</div>
                            {{healthyNote}}
                        </div>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[3], all:allPages}'></bottmPage>
            </div>
            <!-- 第 4 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '重点关注疾病'}"></wehchatCodeHead>
                        <colorTable :tableTitle='jsonData["风险提醒"]["疾病风险"]' :tableData="item['疾病风险']"></colorTable>
                        <tellNumberTow></tellNumberTow>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page="{size: sizeList[4], all:allPages}"></bottmPage>
            </div>
            <!-- 第 5 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '快检知了专有'}"></wehchatCodeHead>
                        <kjzlList v-for="(zkzyitem,index) in item['知康专有']" :key="index" :index="index" :zkzyInfo="zkzyitem"  :rankList='jsonData["知康专有"][zkzyitem.funcation_explain]'></kjzlList>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[5], all:allPages}'></bottmPage>
            </div>
            <!-- 第 6 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <div class="pagecontent_page">
                            <p class="big_title">糖尿病并发症风险</p>
                            <v-chart
                                style="width:100%;height:320px"
                                :options="echartsList['糖尿病并发症风险'][index]"
                                :auto-resize="true"
                            ></v-chart>
                            <p class="big_title">糖尿病修复能力</p>
                            <v-chart
                                style="width:100%;height:320px"
                                :options="echartsList['糖尿病修复能力'][index]"
                                :auto-resize="true"
                            ></v-chart>

                            <p class="big_title new_title">脑血管评估</p>
                            <v-chart
                                style="width:100%;height:320px"
                                :options="echartsList['脑血管'][index]"
                                :auto-resize="true"
                            ></v-chart>
                        </div>
                        <div>
                            <div class="echart_explain">
                                <div class="ec_explain_title">糖尿病风险</div>
                                <div class="ec_explain_content">对于普通人群，若β细胞功能风险长期高于60，则并发症风险较高；应该引起注意， 定期进行检测，如有糖尿病家族史，更需要引起注意。修复能力说明细胞及器官的调节能力 ，长期大于+80或小于-80，不利于机体健康。</div>
                            </div>
                            <div class="echart_explain">
                                <div class="ec_explain_title">脑血管风险</div>
                                <div class="ec_explain_content">如果第1-4以及15-18体区生物电数值小于40，且第9、第10体区生物电数值小于60，则脑血管风险偏高。脑血管疾病风险偏高， 需预防动脉硬化、脑血栓、脑血管痉挛等疾病风险。</div>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[6], all:allPages}'></bottmPage>
            </div>
            <!-- 第 7 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——循环系统" stystemImg="system_circulatory.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["循环系统"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['循环系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[7], all:allPages}'></bottmPage>
            </div>
            <!-- 第 8 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——呼吸系统" stystemImg="system_respiratory.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["呼吸系统"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['呼吸系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[8], all:allPages}'></bottmPage>
            </div>
            <!-- 第 9 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——泌尿生殖系统" stystemImg="system_urogenital.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["泌尿生殖系统"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['泌尿生殖系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[9], all:allPages}'></bottmPage>
            </div>
            <!-- 第 10 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——消化系统" stystemImg="system_alimentary.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["消化系统"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['消化系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[10], all:allPages}'></bottmPage>
            </div>
            <!-- 第 11 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——内分泌系统" stystemImg="system_endocrine.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["内分泌系统"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['内分泌系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[11], all:allPages}'></bottmPage>
            </div>
            <!-- 第 12 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——免疫淋巴系统" stystemImg="system_Immune_lymphatic.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["免疫淋巴系统"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['免疫淋巴系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[12], all:allPages}'></bottmPage>
            </div>
            <!-- 第 13 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——神经系统1" stystemImg="system_nervous.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["神经系统1"]' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['神经系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[13], all:allPages}'></bottmPage>
            </div>
            <!-- 第 14 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——神经系统2" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["神经系统2"]'></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[14], all:allPages}'></bottmPage>
            </div>
            <!-- 第 15 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——运动系统1 (脊柱)" stystemImg="backbone.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["脊柱"].slice(0,15)' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['运动系统']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[15], all:allPages}'></bottmPage>
            </div>
            <!-- 第 16 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——运动系统1 (脊柱)"  :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["脊柱"].slice(15)' ></stystemPage>
                        <tableExplain v-if='reportName=="D"'></tableExplain>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[16], all:allPages}'></bottmPage>
            </div>
            <!-- 第 17 页 -->
            <div class="report_page" v-if='item["骨骼肌"]'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——运动系统2 (骨骼肌)"  :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["骨骼肌"]' ></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[17], all:allPages}'></bottmPage>
            </div>
            <!-- 第 18 页 -->
            <div class="report_page" v-if='item["骨"]&&item["骨连接"]'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——运动系统 (骨)"  :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["骨"]' ></stystemPage>
                        <div class="report_content_page_title">
                            <p>生理系统风险评估——运动系统 (骨连接)</p>
                        </div>
                        <colorTable :tableTitle='jsonData["生理系统"]["八大系统"]' :tableData="item['骨连接']"></colorTable>    
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[18], all:allPages}'></bottmPage>
            </div>
            <!-- 第 19 页 -->
            <div class="report_page" v-if='item["皮肤耳眼1"]'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——皮肤耳眼1" stystemImg="eyees.png" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["皮肤耳眼1"].slice(0,16)' :riskTitle='jsonData["生理系统"]["相关器官风险"]' :riskData="item['系统疾病器官关系']['皮肤耳眼']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[19], all:allPages}'></bottmPage>
            </div>
            <!-- 第 20 页 -->
            <div class="report_page" v-if='item["皮肤耳眼2"]'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——皮肤耳眼2" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["皮肤耳眼1"].slice(16).concat(item["皮肤耳眼2"])'></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[20], all:allPages}'></bottmPage>
            </div>
            <!-- 第 21 页 -->
            <div class="report_page" v-if='item["皮肤耳眼3"]'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <stystemPage stystemName="生理系统风险评估——皮肤耳眼3" :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["皮肤耳眼3"]'></stystemPage>
                        <tableExplain v-if='reportName=="B"||reportName=="C"'></tableExplain>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[21], all:allPages}'></bottmPage>
            </div>
            <!-- 第 22 页 -->
            <div class="report_page" v-if='item["十二正经"]&&reportName=="A"'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '生理系统风险评估——十二正经'}"></wehchatCodeHead>
                        <div class="jinluo">
                            <div class="jinluo_left">
                                <img class="jinluo_left_pic" :src="url+'xiangmufenlei.png'" alt="">
                                十二正经
                            </div>
                            <img  class="jinluo_right" :src="url+'shierzhengjing.png'" alt="">
                        </div>
                        <stystemPage :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData="item['十二正经']"></stystemPage>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[22], all:allPages}'></bottmPage>
            </div>
            <!-- 第 23 页 -->
            <div class="report_page" v-if='item["奇经八脉"]&&reportName=="A"'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '生理系统风险评估——奇经八脉'}"></wehchatCodeHead>
                        <div class="jinluo">
                            <div class="jinluo_left">
                                <img class="jinluo_left_pic" :src="url+'xiangmufenlei.png'" alt="">
                                奇经八脉
                            </div>
                            <img  class="jinluo_right" :src="url+'shierzhengjing.png'" alt="">
                        </div>
                        <stystemPage :stystemTitle='jsonData["生理系统"]["八大系统"]' :stystemData='item["奇经八脉"]'></stystemPage>
                        <tableExplain></tableExplain>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[23], all:allPages}'></bottmPage>
            </div>
            <!-- 第 24 页 -->
            <div class="report_page" v-if='item["间质生化评估"]&&(reportName=="A"||reportName=="B")'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '间质生化评估1'}"></wehchatCodeHead>
                        <div class="jzsh_title">
                            <p>1、间质生化</p>
                        </div>
                        <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData='item["间质生化评估"]["间质生化"]'></colorTable> 
                        <div class="jzsh_title">
                            <p>2、间质血气</p>
                        </div>
                        <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData='item["间质生化评估"]["间质血气"]'></colorTable>   
                        <div class="jzsh_title">
                            <p>3、间质神经递质</p>
                        </div>
                        <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData='item["间质生化评估"]["间质神经递质"]'></colorTable>       
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[24], all:allPages}'></bottmPage>
            </div>
            <!-- 第 25 页 -->
            <div class="report_page" v-if='item["间质生化评估"]&&(reportName=="A"||reportName=="B")'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '间质生化评估2'}"></wehchatCodeHead>
                        <div class="jzsh_title">
                            <p>4、间质自由基</p>
                        </div>
                        <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData='item["间质生化评估"]["间质自由基"]'></colorTable> 
                        <div class="jzsh_title">
                            <p>5、间质微量元素</p>
                        </div>
                        <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData='item["间质生化评估"]["间质微量元素"]'></colorTable>        
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[25], all:allPages}'></bottmPage>
            </div>
            <!-- 第 26 页 -->
            <div class="report_page" v-if='item["间质生化评估"]&&(reportName=="A"||reportName=="B")'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '间质生化评估3'}"></wehchatCodeHead>
                        <div class="jzsh_title">
                            <p>6、间质激素</p>
                        </div>
                        <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData='item["间质生化评估"]["间质激素"]'></colorTable>
                    </div>
                </div>
                <bottmPage v-if="sizeList&&sizeList.length>0" :page='{size: sizeList[26], all:allPages}'></bottmPage>
            </div>
        </div>
    </div>
</template>

<script>
import global from "../../../utils/global"
import pageOne from '../../../components/report/reportOne'
import pageTow from '../../../components/report/reportTwo'
import bottmPage from '../../../components/report/bottomPageSize'
import healthyPic from '../../../components/report/healthyPic'
import colorTable from '../../../components/report/pages/colorTable'
import kjzlList from '../../../components/report/pages/zkzyList'
import wehchatCodeHead from "../../../components/report/pages/wehchatCodeHead"
import tellNumberTow from "../../../components/report/pages/tellNumberTow"
import tableExplain from "../../../components/report/pages/tableExplain"



import stystemPage from "../../../components/report/pages/stystemPage";

import echartsOption from "../../../utils/echartsOption";

import http from '../../../api/report/report'

export default {
    name: "",
    data() {
        return {
            url: global.imgUrl,
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
            reportInfo: {
                logo: global.imgUrl + "cell_logo.png",
                name: "全身健康检测报告",
                smallName: "全身健康检测报告"
            },
            pageInfo: {
                title: "全身健康检测结果"
            },
            marks: 0,
            bodyFuncInfo: {
                body: "",
                vtb: "",
                picTitle: "全身功能状态",
                tipTitle: "功能状态"
            },
            bodyTranInfo: {
                body: "",
                vtb: "",
                picTitle: "全身修复能力",
                tipTitle: "修复能力"
            },
            healthyNote: `
            1、全身功能状态、全身部位细胞及器官的活跃程度，全身修复状态、全身部位细胞及器官的自我调节和修复能力
            2、黄色处于过于活跃的亢奋状态，表示消耗过度，绿色处于正常的健康状态，蓝色处于疲惫的减退状态； 表示能力下降，功能状态和修复能力长期处于亢进或中度衰退状态，不利于机体健康。最佳：-20到20；轻度亢进：20到60；中度亢进：60到100；轻度衰退：-60到-20；中度衰退：-100到-60；
            3、该报告为功能评估结果，不作为临床诊断结论，可为健康医师及受检者提供辅助参考，动态检测，跟踪观察，帮助预防疾患，管理健康，报告可对养生、药效、疗效评估提供辅助参考`,
            jsonData: {
                '生理系统': {
                    '八大系统': {
                        '器官名称': {
                            name: "funcationExplain",
                            width: null
                        },
                        '功能数值': {
                            name: "functionStatus",
                            width: null
                        },
                        '功能状态': {
                            name: "diminished",
                            width: null
                        },
                        '恢复数值': {
                            name: "examTranstion",
                            width: null
                        },
                        '恢复能力': {
                            name: "hyperactivity",
                            width: null
                        },
                        '风险级别': {
                            name: "riskLevel",
                            width: null
                        }
                    },
                    '相关器官风险':{
                        '风险提示': {
                            name: "disName",
                            width: null,
                            children:{
                                '风险名称': {
                                    name: "disName",
                                    width: '175px'
                                },
                                '风险器官': {
                                    name: "organList",
                                    width: null
                                },
                                '风险级别': {
                                    name: "riskRank",
                                    width: '175px'
                                }
                            }
                        }

                    }
                },
                '间质生化评估':{
                    '间质生化':{
                        '名称':{
                            name:"funcationExplain",
                            width:null
                        },
                        '营养状态':{
                            name:"diminished",
                            width:null
                        },
                        '疾病风险':{
                            name:"hyperactivity",
                            width:600
                        }
                    }
                },
                '风险提醒': {
                    '疾病风险': {
                        '风险名称': {
                            name: "disName",
                            width: null
                        },
                        '级别': {
                            name: "riskRank",
                            width: null
                        },
                        '疾病描述': {
                            name: "disDesc",
                            width: 500
                        }
                    }
                },
                '知康专有':{
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
            },
            rankList:{
                funcation_explain:''
            },
            reportData:[],
            echartsList: {
                '糖尿病修复能力': [],
                '糖尿病并发症风险': [],
                '脑血管': []
            },
            reportName:'A',
            allPages:'25',
            sizeList:[]
        };
    },
    components: {
        pageOne,
        pageTow,
        bottmPage,
        healthyPic,
        colorTable,
        kjzlList,
        wehchatCodeHead,
        stystemPage,
        tellNumberTow,
        tableExplain
    },
    methods: {},
    created() {
        switch (this.reportName){
        case 'A':
            this.allPages = 26;
            this.sizeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
            break;
        case 'B':
            this.allPages = 24;
            this.sizeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, null, null, 22, 23, 24];
            break;
        case 'C':
            this.allPages = 21;
            this.sizeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, null, null, 24, 25, 26];
            break;
        case 'D':
            this.allPages = 16;
            this.sizeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, null, null, 24, 25, 26];
            break;
        default:
            break;
        }
        http.geReportList({'examIds': '15659592545631803a20232da', 'isCustom': '1', 'reportName': this.reportName, 'reportType': '诊断类'}).then(({data})=>{
            this.reportData = data
            data.forEach((item, index) => {
                this.userInfo[index][0].value = item["用户信息"].userName;
                this.userInfo[index][1].value = item["用户信息"].userPhone;
                this.userInfo[index][2].value =
                    item["用户信息"].userSex == 1 ? "男" : "女";
                this.userInfo[index][3].value = this.$moment(
                    item["用户信息"].createTime
                ).format("YYYY-MM-DD");
                //新增项用push 添加

                //健康度
                this.marks = item['体检结果'].marks
                //健康图像
                this.bodyFuncInfo.body = item['图片路径'].body_func;
                this.bodyFuncInfo.vtb = item['图片路径'].vtb_func;
                this.bodyTranInfo.body = item['图片路径'].body_tran;
                this.bodyTranInfo.vtb = item['图片路径'].vtb_tran;

                //echarts
                //糖尿病并发症风险
                this.echartsList["糖尿病并发症风险"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                item["糖尿病并发症早期风险"]["糖尿病并发症风险"].forEach(echartData => {
                    this.echartsList["糖尿病并发症风险"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["糖尿病并发症风险"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                });
                //糖尿病修复能力
                this.echartsList["糖尿病修复能力"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                item["糖尿病并发症早期风险"]["糖尿病修复能力"].forEach(echartData => {
                    this.echartsList["糖尿病修复能力"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["糖尿病修复能力"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                });

                //脑血管评估
                this.echartsList["脑血管"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                for (let i = 0; i < 10; i++) {
                    this.echartsList["脑血管"][index].xAxis[0].data.push(
                        `第${item["脑血管"][i].funcationExplain}体区`
                    );
                    this.echartsList["脑血管"][index].series[0].data.push(
                        item["脑血管"][i].functionStatus
                    );
                }

            });


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
.report_healthly {
    height: 40px;
    margin-bottom: 10px;
    font-size: 22px;
    color: #25a5a1;
    .marks {
        color: red;
        font-size: 30px;
    }
}
.healthyNote {
    font-size: 20px;
    color: #666;
}
.echart_explain{
    position: relative;
    margin-top: 20px;
    color: #666;
    .ec_explain_title{
        font-size: 16px;
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 40px;
        border: 3px solid green;
        border-radius: 20px;
    }
    .ec_explain_content{
        font-size: 22px;
        line-height: 34px;
        margin-left: 200px;
    }
}
.big_title {
    font-size: 28px;
    line-height: 28px;
    color: #25a5a1;
}
.jzsh_title{
    padding: 40px 0 30px;
    width: 100%;
    position: relative;
    font-size: 28px;
    line-height: 28px;
    color: #25a5a1;
}
.jinluo{
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    color: #25a5a1;
    margin-bottom: 30px;
    img{
        vertical-align: middle;
    }
    .jinluo_left{
        line-height: 100px;
    }
    .jinluo_left_pic{
        margin-right: 50px;
        width: 50px;
        height: 50px;
    }
    .jinluo_right{
        width: 50px;
        height: 100px;
    }
}

</style>
