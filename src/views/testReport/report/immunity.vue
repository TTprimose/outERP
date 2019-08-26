<template>
    <div class="report_box">
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
                    <pageTwo :content="json.reportPageTwo()['免疫报告']"></pageTwo>
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
                            总体风险评级：
                            <span>2级</span>
                        </p>
                        <div>
                            <div class="img_small_title">
                                <img :src="url + 'one.png'" alt />
                                <p>胸腺</p>
                            </div>
                            <slider :num="35"></slider>
                            <p class="small_content margin_content">
                                <span class="color_span">改善建议：</span>细胞及器官的功能数值或修复数值长期处于（大于80）或中度衰退（小于-80）状态，不利于机体健康，需要引起关注。
                            </p>
                        </div>
                        <div>
                            <div class="img_small_title">
                                <img :src="url + 'two.png'" alt />
                                <p>脾</p>
                            </div>
                            <slider :num="27"></slider>
                            <p class="small_content margin_content">
                                <span class="color_span">改善建议：</span>1、宜食食物：具有补脾益气、醒脾开胃消食的食品，如粳米、籼米、锅巴（焦锅）、薏米、熟藕、粟子、山药、扁豆、豇豆、葡萄、红枣、胡萝卜、马铃薯、香菇等。
                                2、忌食食物：性质寒凉，易损伤脾气的食品，如苦瓜、黄瓜、冬瓜、茄子、空心菜、芹菜、苋莱、茭白、莴笋、柿子、香蕉、枇杷、梨、西瓜、绿豆、豆腐、莜麦等。味厚滋腻，容易阻碍脾气运化功能的食品，如鸭肉、猪肉、甲鱼肉、牡蛎肉、牛奶、芝麻等。利气消积，容易耗伤脾气的食品，如荞麦；山楂、萝卜、香菜等。
                            </p>
                        </div>
                        <div>
                            <div class="img_small_title">
                                <img :src="url + 'three.png'" alt />
                                <p>左扁桃体</p>
                            </div>
                            <slider :num="37"></slider>
                            <p class="small_content margin_content">
                                <span class="color_span">改善建议：</span>1、大量喝水（蕃楸草茶代替水），避免饮用酒精、咖啡与食用辛辣酸冷食物，不要吸烟及去烟味大的地方。
                                2、不要过度用嗓。嗓子发干或者说话嘶哑，应停止讲话。讲话的声音要保持正常，不要过高或过低。
                                3、不要过多地清嗓，防止损伤声带。喉咙不适时，小口饮水或是吞咽。如果一直清嗓，需要注意是否存在反流性疾病、过敏症等疾病。
                            </p>
                        </div>
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
                        <div>
                            <div class="img_small_title">
                                <img :src="url + 'four.png'" alt />
                                <p>右扁桃体</p>
                            </div>
                            <slider :num="41"></slider>
                            <p class="small_content margin_content">
                                <span class="color_span">改善建议：</span> 1、大量喝水（蕃楸草茶代替水），避免饮用酒精、咖啡与食用辛辣酸冷食物，不要吸烟及去烟味大的地方。
                                2、不要过度用嗓。嗓子发干或者说话嘶哑，应停止讲话。讲话的声音要保持正常，不要过高或过低。
                                3、不要过多地清嗓，防止损伤声带。喉咙不适时，小口饮水或是吞咽。如果一直清嗓，需要注意是否存在反流性疾病、过敏症等疾病。
                            </p>
                        </div>
                        <div>
                            <div class="img_small_title">
                                <img :src="url + 'five.png'" alt />
                                <p>鼻炎</p>
                            </div>
                            <slider :num="27"></slider>
                            <p class="small_content margin_content">
                                <span class="color_span">改善建议：</span>1、日常注意鼻腔卫生。
                                2、少烟少酒，减少对鼻窦的刺激。
                                3、雾霾天戴口罩，室内及时通风换气。
                                4、多饮水，积极抗炎，必要时需到医院进行物理治疗。
                            </p>
                        </div>
                        <div>
                            <div class="img_small_title">
                                <img :src="url + 'six.png'" alt />
                                <p>左扁桃体</p>
                            </div>
                            <slider :num="20"></slider>
                            <p class="small_content margin_content">
                                <span class="color_span">改善建议：</span>1、忌生冷，忌烟酒。
                                2、少食多餐，食物尽量细软易消化。
                                3、清淡饮食，多蔬果，豆类，大枣，核桃，海鲜，香菇，木耳，鱼类（提升抗氧化能力，增加肝细胞代谢能力），增加微量元素和维生素的摄入。
                            </p>
                        </div>
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
                        <div class="img_small_title">
                            <img :src="url + 'seven.png'" alt />
                            <p>关节风险</p>
                        </div>
                        <colorTable :tableTitle='jsonData["关节风险"]' :tableData="joins"></colorTable>
                        <div class="small_content margin_content">
                            <span class="color_span">改善建议：</span>
                            <ul>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                            </ul>
                        </div>
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
                        <div class="img_small_title">
                            <img :src="url + 'eight.png'" alt />
                            <p>呼吸道风险</p>
                        </div>
                        <colorTable :tableTitle='jsonData["呼吸道风险"]' :tableData="respiratoryTracts"></colorTable>
                        <div class="small_content margin_content">
                            <span class="color_span">改善建议：</span>
                            <ul>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <bottmPage :page="{size: 5, all:10}"></bottmPage>
        </div>
        <!-- 第 7 页 -->
        <div class="report_page">
            <div class="report_content">
                <div class="report_content_padding">
                    <headerPage :pageInfo="pageInfo"></headerPage>
                    <div class="pagecontent_page">
                        <div class="img_small_title">
                            <img :src="url + 'eight.png'" alt />
                            <p>肠胃道风险</p>
                        </div>
                        <colorTable :tableTitle='jsonData["肠胃道风险"]' :tableData="gastrointestinalTracts"></colorTable>
                        <div class="small_content margin_content">
                            <span class="color_span">改善建议：</span>
                            <ul>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                                <li>1、保暖，防止寒邪入侵。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <bottmPage :page="{size: 5, all:10}"></bottmPage>
        </div>
        <!-- 第 8 页 -->
        <div class="report_page">
            <div class="report_content">
                <div class="report_content_padding">
                    <headerPage :pageInfo="pageInfo"></headerPage>
                    <div class="pagecontent_page">
                        <colorTable :tableTitle='jsonData["风险说明"]' :tableData="rankData"></colorTable>
                    </div>
                </div>
            </div>
            <bottmPage :page="{size: 5, all:10}"></bottmPage>
        </div>
    </div>
</template>

<script>
import global from "../../../utils/global";
import bottmPage from "../../../components/report/bottomPageSize";
import pageOne from "../../../components/report/reportOne";
import pageTwo from "../../../components/report/reportTwo";
import headerPage from "../../../components/report/headerPage";
import slider from "../../../components/report/pages/sliderbox0-100";
import colorTable from "../../../components/report/pages/colorTable";

export default {
    name: "",
    data() {
        return {
            url: global.imgUrl,
            reportInfo: {
                logo: global.imgUrl + "cell_logo.png",
                name: "免疫功能健康检测报告",
                smallName: "专项健康检测报告"
            },
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
                title: "免疫功能检测结果",
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

            jsonData: {
                '关节风险': {
                    '序号': {
                        name: "ind",
                        width: 100
                    },
                    '名称': {
                        name: "itemName",
                        width: null
                    },
                    '风险数值': {
                        name: "mark",
                        width: null
                    },
                    '风险等级': {
                        name: "rank",
                        width: null
                    }
                },
                '呼吸道风险': {
                    '序号': {
                        name: "ind",
                        width: 100
                    },
                    '名称': {
                        name: "itemName",
                        width: null
                    },
                    '风险数值': {
                        name: "mark",
                        width: null
                    },
                    '风险等级': {
                        name: "rank",
                        width: null
                    }
                },
                '肠胃道风险': {
                    '序号': {
                        name: "ind",
                        width: 100
                    },
                    '名称': {
                        name: "itemName",
                        width: null
                    },
                    '风险数值': {
                        name: "mark",
                        width: null
                    },
                    '风险等级': {
                        name: "rank",
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
                }
            },

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

            joins: [
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 1
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 2
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 3
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 4
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 5
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 6
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 7
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 8
                }
            ],
            respiratoryTracts: [
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 1
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 2
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 3
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 4
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 5
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 6
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 7
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 8
                }
            ],
            gastrointestinalTracts: [
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 1
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 2
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 3
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 4
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 5
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 6
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 7
                },
                {
                    itemAdvice: "1、保暖，防止寒邪入侵。↵2、遇到外伤情况，前24小时冷敷，之后热敷，湿敷，如有关节红肿症状停止，以此改善血液循环。↵3、避免关节负重，不宜久坐久站，减少上下台阶。↵4、适度减肥，增加蛋白质，维生素，矿物质的摄入。↵5、可佩带护膝带，增加关节稳定性。↵6、下肢疼痛的三个常见原因：静脉曲张，动脉粥样硬化，腰间盘突出压迫神经。↵7、避免过度疲劳和膳食不均导致酸性体质，软骨会降解，滑液的润滑效果变差，钙大量流失。",
                    itemClass: null,
                    itemExplain: "左肩关节，位于肩关节左侧，连接上肢与躯干部分，包括臂上部、腋窝、胸前区及肩胛骨所在的背部区域等身体很大的一部分。",
                    itemId: 31,
                    itemImgurl: "https://web.kuaijianzhiliao.com/public/images/wx/imm/specialList/joint_risk.png",
                    itemLevel: 2,
                    itemName: "左肩关节",
                    itemOrder: 11,
                    mark: {
                        name: "29",
                        color: "#27abf6"
                    },
                    rank: {
                        name: "偏低",
                        color: "#27abf6"
                    },
                    ind: 8
                }
            ]
        };
    },
    components: {
        bottmPage,
        pageOne,
        pageTwo,
        headerPage,
        slider,
        colorTable
    },
    methods: {},
    created() {
        document.title = "免疫报告";

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
        margin-bottom: 30px;
        font-size: 28px;
        text-align: center;
        line-height: 28px;
        span {
            color: #25a5a1;
        }
    }
    .big_title {
        font-size: 28px;
        line-height: 28px;
        color: #25a5a1;
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
    .small_content {
        font-size: 22px;
        line-height: 22px;
        color: #666;
        margin-bottom: 30px;
        .color_span {
            color: #25a5a1;
        }
        ul{
            li{
                line-height: 40px;
            }
        }
    }
    .margin_content {
        margin-top: 20px;
        line-height: 32px;
    }
}
</style>
