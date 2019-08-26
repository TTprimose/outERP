<template>
    <div>
        <div class="report_box" v-for="(item,index) in reportData" :key="index">
            <!-- 第 1 页 -->
            <div class="report_page">
                <div class="report_content">
                    <pageOne :userInfo="userInfo" :reportInfo="reportInfo"></pageOne>
                </div>
                <bottmPage :page="{size: 1, all:10}"></bottmPage>
            </div>
            <!-- 第 2 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <pageTwo :content="json.reportPageTwo()['秀域报告']"></pageTwo>
                    </div>
                </div>
                <bottmPage :page="{size: 2, all:10}"></bottmPage>
            </div>
            <!-- 第 3 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <p class="page_all_title">
                                健康度得分：
                                <span>{{mark}}分</span>
                            </p>
                            <p class="big_title">一、生理系统风险评估</p>
                            <div class="img_small_title">
                                <img :src="url + 'one.png'" alt />
                                <p>{{item.report.bodySystems[0].itemName}}</p>
                            </div>
                            <slider :num="parseInt(item.report.bodySystems[0].functionStatus)"></slider>
                            <p class="page_slider_content">
                                {{item.report.bodySystems[0].itemExplain}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'two.png'" alt />
                                <p>{{item.report.bodySystems[1].itemName}}</p>
                            </div>
                            <slider :num="parseInt(item.report.bodySystems[1].functionStatus)"></slider>
                            <p class="page_slider_content">
                                {{item.report.bodySystems[1].itemExplain}}
                            </p>

                            <div class="img_small_title">
                                <img :src="url + 'three.png'" alt />
                                <p>{{item.report.bodySystems[2].itemName}}</p>
                            </div>
                            <slider :num="parseInt(item.report.bodySystems[2].functionStatus)"></slider>
                            <p class="page_slider_content">
                                {{item.report.bodySystems[2].itemExplain}}
                            </p>

                            <p class="small_title litte_margin">解读说明</p>

                            <colorTable :tableTitle='jsonData["风险说明"]' :tableData="rankData"></colorTable>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: 3, all:10}"></bottmPage>
            </div>
            <!-- 第 4 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <p class="big_title">二、间质生化评估</p>
                            <p class="small_title litte_margin">1、间质生化</p>
                            <colorTable :tableTitle='jsonData["间质生化评估"]["间质生化"]' :tableData="shenghua1"></colorTable>
                            <p class="small_title litte_margin">2、间质微量元素</p>
                            <colorTable :tableTitle='jsonData["间质生化评估"]["间质微量元素"]' :tableData="shenghua2"></colorTable>
                            <p class="small_title litte_margin">解读说明</p>
                            <colorTable :tableTitle='jsonData["检测结果"]' :tableData="checkData"></colorTable>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: 4, all:10}"></bottmPage>
            </div>
            <!-- 第 5 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <p class="big_title">三、经络</p>
                            <p class="small_title">1、十二正经</p>
                            <colorTable :tableTitle='jsonData["经络"]["十二正经"]' :tableData="tableData"></colorTable>
                            <p class="small_title">解读说明</p>
                            <p class="small_content">功能数值说明细胞的活跃程度,修复数值说明细胞及器官的调节能力</p>
                            <colorTable :tableTitle='jsonData["解读说明"]' :tableData="tellData"></colorTable>
                            <p class="small_content margin_content">
                                <span class="color_span">【温馨提示】</span>细胞及器官的功能数值或修复数值长期处于（大于80）或中度衰退（小于-80）状态，不利于机体健康，需要引起关注。
                            </p>
                            <tellNumber></tellNumber>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: 5, all:10}"></bottmPage>
            </div>
            <!-- 第 6 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <p class="small_title margin_none">2、奇经八脉</p>
                            <colorTable :tableTitle='jsonData["经络"]["奇经八脉"]' :tableData="tableData"></colorTable>
                            <p class="small_title">解读说明</p>
                            <p class="small_content">功能数值说明细胞的活跃程度,修复数值说明细胞及器官的调节能力</p>
                            <colorTable :tableTitle='jsonData["解读说明"]' :tableData="tellData"></colorTable>
                            <p class="small_content margin_content">
                                <span class="color_span">【温馨提示】</span>细胞及器官的功能数值或修复数值长期处于（大于80）或中度衰退（小于-80）状态，不利于机体健康，需要引起关注。
                            </p>
                            <tellNumber></tellNumber>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: 6, all:10}"></bottmPage>
            </div>
            <!-- 第 7 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <p class="big_title">三、风险提醒</p>
                            <p class="small_title">1、疾病风险</p>
                            <colorTable :tableTitle='jsonData["风险提醒"]["疾病风险"]' :tableData="jibing"></colorTable>
                            <p class="small_content margin_content">注：1级、2级风险的疾病不作显示。</p>
                            <tellNumber></tellNumber>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: 7, all:10}"></bottmPage>
            </div>
            <!-- 第 8 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <headerPage :pageInfo="pageInfo"></headerPage>
                        <div class="pagecontent_page">
                            <p class="small_title margin_none">2、器官风险</p>
                            <colorTable :tableTitle='jsonData["风险提醒"]["器官风险"]' :tableData="qiguan"></colorTable>
                            <p class="small_content margin_content">注：1级、2级风险的器官不作显示。</p>
                            <tellNumber></tellNumber>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: 8, all:10}"></bottmPage>
            </div>
        </div>
    </div>  
</template>

<script>
import global from "../../../utils/global";
import bottmPage from "../../../components/report/bottomPageSize";
import pageOne from "../../../components/report/reportOne";
import pageTwo from "../../../components/report/reportTwo";
import headerPage from "../../../components/report/headerPage";
import colorTable from "../../../components/report/pages/colorTable";
import tellNumber from "../../../components/report/pages/tellNumber";
import slider from "../../../components/report/pages/sliderbox0-100";
import api from '../../../../src/api/report/report';
export default {
    name: "",
    data() {
        return {
            url: global.imgUrl,
            reportData:[],
            //第一页数据
            userInfo: [
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
            ],
            pageInfo: {
                title: "秀域专项检测结果",
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
                name: "秀域定制健康检测报告",
                smallName: "专项健康检测报告"
            },
            mark:90,
            //经络数据

            //间质生化，经络，疾病风险数据
            jsonData: {
                '经络': {
                    '十二正经': {
                        // 需要的数据格式
                        '名称': {
                            name: "itemName",
                            width: null
                        },
                        '功能数值': {
                            name: "functionStatus",
                            width: null
                        },
                        '功能状态': {
                            name: "functionType",
                            width: null
                        },
                        '修复数值': {
                            name: "examTranstion",
                            width: null
                        },
                        '修复状态': {
                            name: "examaBility",
                            width: null
                        },
                        '风险级别': {
                            name: "rank",
                            width: null
                        }
                    },
                    '奇经八脉': {
                        '名称': {
                            name: "itemName",
                            width: null
                        },
                        '功能数值': {
                            name: "functionStatus",
                            width: null
                        },
                        '功能状态': {
                            name: "functionType",
                            width: null
                        },
                        '修复数值': {
                            name: "examTranstion",
                            width: null
                        },
                        '修复状态': {
                            name: "examaBility",
                            width: null
                        },
                        '风险级别': {
                            name: "rank",
                            width: null
                        }
                    }
                },
                '间质生化评估': {
                    '间质生化': {
                        '名称': {
                            name: 'itemName',
                            width: null
                        },
                        '检测数值': {
                            name: 'functionStatus',
                            width: null
                        },
                        '检测结果' : {
                            name: 'level',
                            width: null
                        },
                        '疾病风险': {
                            name: 'upperRisk',
                            width: 500
                        }
                    },
                    '间质微量元素': {
                        '名称': {
                            name: 'itemName',
                            width: null
                        },
                        '检测数值': {
                            name: 'functionStatus',
                            width: null
                        },
                        '检测结果' : {
                            name: 'level',
                            width: null
                        },
                        '疾病风险': {
                            name: 'upperRisk',
                            width: 500
                        }
                    }
                },
                '风险提醒': {
                    '疾病风险': {
                        '名称': {
                            name: "itemName",
                            width: null
                        },
                        '风险级别': {
                            name: "rank",
                            width: null
                        },
                        '风险描述': {
                            name: "itemExplain",
                            width: 500
                        }
                    },
                    '器官风险': {
                        '名称': {
                            name: "itemName",
                            width: null
                        },
                        '风险级别': {
                            name: "rank",
                            width: null
                        }
                    }
                },
                '解读说明': {
                    "功能数值/修复数值": {
                        name: "name",
                        width: null
                    },
                    "功能状态/修复能力": {
                        name: "value",
                        width: null
                    }
                },
                '风险说明': {
                    '风险数值': {
                        name: 'name',
                        width: null
                    },
                    '风险级别': {
                        name: 'value',
                        width: null
                    },
                    '风险说明': {
                        name: 'detail',
                        width: 300
                    }
                },
                '检测结果': {
                    '检测数值': {
                        name: 'name',
                        width: null
                    },
                    '检测结果': {
                        name: 'value',
                        width: null
                    }
                }
            },

            //解读说明
            tellData: [
                {
                    name: "-100 ~ -61",
                    value: {
                        name: "中度衰退",
                        color: "#468dc9"
                    }
                },
                {
                    name: "-60 ~ -21",
                    value: {
                        name: "轻度衰退",
                        color: "#8ccaf7"
                    }
                },
                {
                    name: "-20 ~ 20",
                    value: {
                        name: "正常",
                        color: "#7ed7d3"
                    }
                },
                {
                    name: "21 ~ 60",
                    value: {
                        name: "轻度亢进",
                        color: "#fd7e23"
                    }
                },
                {
                    name: "61 ~ 100",
                    value: {
                        name: "中度亢进",
                        color: "#fc361d"
                    }
                }
            ],

            //风险说明
            rankData: [
                {
                    name: "0 ~ 20",
                    value: {
                        name: "低",
                        color: "#28c7c2"
                    },
                    detail: {
                        name: "无疾病风险",
                        color: "#28c7c2"
                    }
                },
                {
                    name: "21 ~ 40",
                    value: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    detail: {
                        name: "有疾病发展趋势",
                        color: "#27abf6"
                    }
                },
                {
                    name: "41 ~ 60",
                    value: {
                        name: "中",
                        color: "#ffbb00"
                    },
                    detail: {
                        name: "潜在疾病风险",
                        color: "#ffbb00"
                    }
                },
                {
                    name: "61 ~ 80",
                    value: {
                        name: "偏高",
                        color: "#ff7e00"
                    },
                    detail: {
                        name: "疾病正在形成",
                        color: "#ff7e00"
                    }
                },
                {
                    name: "81 ~ 100",
                    value: {
                        name: "高",
                        color: "#ff3300"
                    },
                    detail: {
                        name: "疾病已存在或发生概率很高",
                        color: "#ff3300"
                    }
                }
            ],

            //检测结果说明
            checkData: [
                {
                    name: "-10.0 ~ -6.1",
                    value: {
                        name: "低",
                        color: "#28c7c2"
                    }
                },
                {
                    name: "-6.0 ~ -2.1",
                    value: {
                        name: "偏低",
                        color: "#27abf6"
                    }
                },
                {
                    name: "-2.0 ~ 2.0",
                    value: {
                        name: "正常",
                        color: "#ffbb00"
                    }
                },
                {
                    name: "2.1 ~ 6.0",
                    value: {
                        name: "偏高",
                        color: "#ff7e00"
                    }
                },
                {
                    name: "6.1 ~ 10.0",
                    value: {
                        name: "高",
                        color: "#ff3300"
                    }
                }
            ],

            tableData: [
                //需要颜色的参数需要变成 {name: , color: }
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "12",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#7ed7d3"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#8ccaf7"
                    },
                    rank: {
                        name: "1",
                        color: "#468dc9"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                },
                {
                    itemId: 274,
                    itemName: "手太阴肺经",
                    itemExplain:
                        "十二经脉之一，手三阴经之一，与手阳明大肠经相表里，上接足厥阴肝经于肺内，下接手阳明大肠经于食指。经脉分布于胸前、上肢内侧前、拇指桡侧。其络脉、经别分别与之内外相连，经筋分布于外部。本经首穴是中府，末穴是少商，左右各11穴。",
                    upperRisk: null,
                    diseaseSymptoms: null,
                    improveAdvice: null,
                    itemLevel: null,
                    itemClass: "十二正经",
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/xy/twelve_serious.png",
                    itemOrder: null,
                    lowerRisk: null,
                    functionStatus: "68",
                    examTranstion: "1",
                    functionType: {
                        name: "正常",
                        color: "#fd7e23"
                    },
                    examaBility: {
                        name: "正常",
                        color: "#fc361d"
                    },
                    rank: {
                        name: "1",
                        color: "#7ed7d3"
                    },
                    level: "低",
                    riskDescription:
                        "肺部胀闷，膨膨而咳喘，咽喉肿痛，严重时交捧双手，心胸闷乱，视物模糊，还可发生前臂部的气血阻逆如厥冷、麻木、疼痛等症。",
                    resultList: [
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        },
                        {
                            createTime: "08-02",
                            functionStatus: "1级"
                        }
                    ]
                }
            ],

            jibing: [
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: null,
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "疾病风险",
                    itemExplain:
                        "腰椎间盘突出症是较为常见的疾患之一，主要是因为腰椎间盘各部分的纤维环破裂。",
                    itemId: 2,
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/yjptc.png",
                    itemLevel: null,
                    itemName: "腰椎间盘突出",
                    itemOrder: null,
                    level: "中",
                    lowerRisk: null,
                    rank: {
                        name: "3",
                        color: "#fd7e23"
                    }
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: null,
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "疾病风险",
                    itemExplain:
                        "腰椎间盘突出症是较为常见的疾患之一，主要是因为腰椎间盘各部分的纤维环破裂。",
                    itemId: 2,
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/yjptc.png",
                    itemLevel: null,
                    itemName: "腰椎间盘突出",
                    itemOrder: null,
                    level: "中",
                    lowerRisk: null,
                    rank: {
                        name: "3",
                        color: "#fd7e23"
                    }
                }
            ],

            qiguan: [
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: null,
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "疾病风险",
                    itemExplain:
                        "腰椎间盘突出症是较为常见的疾患之一，主要是因为腰椎间盘各部分的纤维环破裂。",
                    itemId: 2,
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/yjptc.png",
                    itemLevel: null,
                    itemName: "下肢神经",
                    itemOrder: null,
                    level: "中",
                    lowerRisk: null,
                    rank: {
                        name: "3",
                        color: "#fd7e23"
                    }
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: null,
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "疾病风险",
                    itemExplain:
                        "腰椎间盘突出症是较为常见的疾患之一，主要是因为腰椎间盘各部分的纤维环破裂。",
                    itemId: 2,
                    itemImgurl:
                        "https://web.kuaijianzhiliao.com/public/images/wx/yjptc.png",
                    itemLevel: null,
                    itemName: "下肢神经",
                    itemOrder: null,
                    level: "中",
                    lowerRisk: null,
                    rank: {
                        name: "3",
                        color: "#fd7e23"
                    }
                }
            ],

            shenghua1: null,

            shenghua2: [
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                },
                {
                    diseaseSymptoms: null,
                    examTranstion: null,
                    examaBility: null,
                    functionStatus: "-0.7",
                    functionType: null,
                    improveAdvice: null,
                    itemClass: "间质生化",
                    itemExplain: "胆固醇是一种环戊烷多氢菲的衍生物，是动物组织细胞所不可缺少的重要物质，它不仅参与形成细胞膜，而且是合成胆汁酸，维生素D以及甾体激素的原料。",
                    itemId: 238,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/xy/interstitial_biochemistry.png",
                    itemLevel: null,
                    itemName: "胆固醇",
                    level: "正常",
                    lowerRisk: null,
                    rank: null,
                    upperRisk: '无'
                }
            ]
        };
    },
    components: {
        bottmPage,
        pageOne,
        pageTwo,
        headerPage,
        colorTable,
        tellNumber,
        slider
    },
    methods: {},
    created() {
        document.title = "秀域报告";
        let obj = {
            examIds: '15663701814151803a20232da'
        }

        api.getBeautyDomain(obj).then(({data}) => {
            console.log(data);
            this.reportData = data;

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

                this.mark = item.report.mark;

                this.shenghua1 = item.report.interstitialInfo[0].childList;
                console.log(this.shenghua1)
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
.pagecontent_page {
    .page_all_title {
        margin-bottom: 20px;
        font-size: 28px;
        text-align: center;
        line-height: 28px;
        color: #666;
        span {
            color: #25a5a1;
        }
    }
    .img_small_title {
        font-size: 28px;
        color: #25a5a1;
        display: flex;
        line-height: 28px;
        margin: 20px 0;
        img {
            width: 28px;
            height: 28px;
            margin-right: 5px;
        }
    }
    .page_slider_content {
        color: #666;
        font-size: 18px;
        line-height: 28px;
    }
    .big_title {
        font-size: 28px;
        line-height: 28px;
        color: #25a5a1;
    }
    .small_title {
        font-size: 22px;
        line-height: 22px;
        color: #25a5a1;
        margin: 30px 0 20px;
    }
    .small_content {
        font-size: 22px;
        line-height: 22px;
        color: #666;
        margin-bottom: 20px;
    }
    .margin_content {
        margin-top: 20px;
        line-height: 32px;
    }
    .color_span {
        color: #25a5a1;
    }
    .margin_none {
        margin-top: 0;
    }
    .litte_margin{
        margin-top: 20px;
        margin-bottom: 15px;
    }
}
</style>
