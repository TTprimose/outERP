<template>
    <div>
        <div class="report_box" v-for="(item, index) in reportData" :key="index">
            <!-- 默认D类 -->
            <!-- 第 1 页 -->
            <div class="report_page">
                <div class="report_content">
                    <pageOne :userInfo="userInfo[index]" :reportInfo="reportInfo"></pageOne>
                </div>
                <bottmPage :page="{size: pageList[0], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 2 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <pageTwo :content="json.reportPageTwo()['无创全身']"></pageTwo>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[1], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 3 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '健康画像'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <div class="report_healthly">
                                健康度：
                                <span class="marks">{{item['体检结果'].marks}}</span>
                            </div>
                            <healthyPic :healthyPicInfo="bodyFuncInfo"></healthyPic>
                            <healthyPic :healthyPicInfo="bodyTranInfo"></healthyPic>
                            <div class="healthyNote">
                                <div>注：</div>
                                <p>
                                    1、全身功能状态、全身部位细胞及器官的活跃程度，全身修复状态、全身部位细胞及器官的自我调节和修复能力
                                    2、黄色处于过于活跃的亢奋状态，表示消耗过度，绿色处于正常的健康状态，蓝色处于疲惫的减退状态； 表示能力下降，功能状态和修复能力长期处于亢进或中度衰退状态，不利于机体健康。最佳：-20到20；轻度亢进：20到60；中度亢进：60到100；轻度衰退：-60到-20；中度衰退：-100到-60；
                                    3、该报告为功能评估结果，不作为临床诊断结论，可为健康医师及受检者提供辅助参考，动态检测，跟踪观察，帮助预防疾患，管理健康，报告可对养生、药效、疗效评估提供辅助参考
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[2], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 4 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '风险评估'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <p class="big_title">生理系统风险</p>
                            <barEcharts :echartData="echartsList['生理系统风险'][index]" :ulData="echartUl['生理系统风险']" height='320'></barEcharts>
                            <p class="small_content"
                            >注：该指标是对个生理系统以及总体健康风险的评估；数值越小，等级越低，风险越小；数值越大，等级越高，风险越大。一级最低，九级最高。</p>
                            <p class="big_title new_title">脑血管评估</p>
                            <barEcharts :echartData="echartsList['脑血管'][index]" :ulData="[]" height='320'></barEcharts>
                            <p class="small_content">
                                注：如果第1-4以及15-18体区生物电数值小于40，且第9、第10体区生物电数值小于60，则脑血管风险偏高。脑血管疾病风险偏高，
                                需预防动脉硬化、脑血栓、脑血管痉挛等疾病风险。
                            </p>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[3], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 5 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '健康总评'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <ul class="echarts_ul">
                                <li v-for="(data, ind) in item['知康专有']" :key="ind">
                                    <p
                                        class="echarts_li_title"
                                    >{{ind + 1 + '、' + data.funcation_explain}}</p>
                                    <v-chart
                                        style="width:100%;height:280px"
                                        :options="echartsList['知康专有'][index][ind]"
                                        :auto-resize="true"
                                    ></v-chart>
                                    <p class="echarts_li_bottom">{{data.changeC}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[4], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 6 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '健康总评'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <p
                                class="small_content"
                            >注：综合各器官的功能状态、修复能力，得出以下健康风险提示。 一级最低，五级最高，风险等级越高，健康度越差。</p>

                            <ul class="echarts_ul">
                                <li v-for="(data, key, ind) in item['健康风险提示']" :key="ind">
                                    <p
                                        class="echarts_li_title margin_title"
                                    >{{key}}</p>
                                    <div class="echarts_li_legend">
                                        <p>
                                            <span class="echarts_li_radio"></span>
                                            <span>{{key + '预防器官'}}</span>
                                        </p>
                                        <p>
                                            <span class="echarts_li_radio radio_color"></span>
                                            <span>{{key + '预防脊柱'}}</span>
                                        </p>
                                    </div>
                                    <div class="echarts_li_box">
                                        <div class="echarts_li_box_chart">
                                            <p class="axix_title">修复能力</p>
                                            <v-chart
                                                style="width:100%;height:260px"
                                                :options="echartsList['健康风险提示'][index][ind]"
                                                :auto-resize="true"
                                            ></v-chart>
                                        </div>
                                        <div class="echarts_li_box_other axix_title">功能状态</div>
                                    </div>
                                    <div class="echarts_msg">
                                        <p>器官：</p>
                                        <ul v-if='data["器官"].length'>
                                            <li v-for="(organ, y) in data['器官']" :key='y'>{{organ.organName + '(' + organ.examTranstion + ',' + organ.functionStatus + ')'}}</li>
                                        </ul>
                                        <p v-else>无</p>
                                    </div>
                                    <div class="echarts_msg">
                                        <p>脊柱：</p>
                                        <ul v-if='data["脊柱"].length'>
                                            <li v-for="(organ, y) in data['脊柱']" :key='y'>{{organ.organName + '(' + organ.examTranstion + ',' + organ.functionStatus + ')'}}</li>
                                        </ul>
                                        <p v-else>无</p>
                                    </div>
                                    <!-- <p class="echarts_li_bottom">{{data}}</p> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[5], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 7 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '各系统改善建议'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <div class="seven_page_content" v-for='(sevenData, i) in item["报告解读"]' :key="i">
                                <div class="seven_box">
                                    <img :src="sevenPageImg[i]" alt="">
                                    <!-- <img src="../../../assets/img/icon_huxi.png" alt=""> -->
                                    <p class="big_title">{{sevenData.funcationExplain}}</p>
                                </div>
                                <p class="small_content">{{sevenData.examTranstion}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[6], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 8 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '健康管理建议'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <p class="small_content">
                                注：坚持正确的运动方式、营养方案以及生活习惯，对健康大有裨益，该建议为相对普适的方案，适合多数人群，可结合健康咨询专家的建议实现个性化、定制化、高效的健康管理。
                            </p>
                            <el-table
                                :data="item['健康管理建议']"
                                border
                                :cell-style="cellStyle"
                                :header-cell-style="rowClass"
                                style="width: 100%">
                                <el-table-column
                                    type="index"
                                    label="序号"
                                    width="70">
                                </el-table-column>
                                <el-table-column
                                    prop="disName"
                                    label="疾病"
                                    width="150">
                                </el-table-column>
                                <el-table-column
                                    prop="improveAdvice"
                                    label="改善建议">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[7], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 9 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '循环系统'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["循环系统"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["循环系统"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[8], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 10 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '呼吸系统'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["呼吸系统"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["呼吸系统"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[9], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 11 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '泌尿生殖系统'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["泌尿生殖系统"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["泌尿生殖系统"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[10], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 12 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '消化系统'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["消化系统"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["消化系统"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[11], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 13 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '内分泌系统和免疫淋巴系统'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["内分泌系统和免疫淋巴系统"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["内分泌系统和免疫淋巴系统"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[12], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 14 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '神经系统'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["神经系统"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["神经系统"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[13], all:pageList.length}"></bottmPage>
            </div>
            <!-- 第 15 页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '脊柱'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["脊柱"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["脊柱"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[14], all:pageList.length}"></bottmPage>
            </div>
            <!-- A B C类 第 16 页 -->
            <div class="report_page" v-if='pageType != "D"'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '骨骼肌'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["骨骼肌"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["骨骼肌"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[15], all:pageList.length}"></bottmPage>
            </div>
            <!-- A B C类 第 17 页 -->
            <div class="report_page" v-if='pageType != "D"'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '骨和骨连接'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["骨和骨连接"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["骨和骨连接"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[16], all:pageList.length}"></bottmPage>
            </div>
            <!-- A B C类 第 18 页 -->
            <div class="report_page" v-if='pageType != "D"'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '皮肤/耳眼'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["皮肤耳眼1"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["皮肤耳眼1"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[17], all:pageList.length}"></bottmPage>
            </div>
            <!-- A B C类 第 19 页 -->
            <div class="report_page" v-if='pageType != "D"'>
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '皮肤/耳眼'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["皮肤耳眼2"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["皮肤耳眼2"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[18], all:pageList.length}"></bottmPage>
            </div>
            <!-- A 类 第 20 页 -->
            <div class="report_page" v-if="pageType == 'A'">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '十二正经和奇经八脉'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <radarBox :radarInfo='item["十二正经和奇经八脉"]' pramaer='functionStatus'></radarBox>
                            <radarBox :radarInfo='item["十二正经和奇经八脉"]' pramaer='examTranstion'></radarBox>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageList[19], all:pageList.length}"></bottmPage>
            </div>
            <!-- A 类 第 21 页, B 类 第 20 页-->
            <div class="report_page" v-if="pageType == 'A' || pageType == 'B'">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '糖尿病及早期风险'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <div>
                                <p class="big_title">并发症评估</p>
                                <barEcharts :echartData="echartsList['糖尿病并发症风险'][index]" :ulData="echartUl['并发症评估']" height='320'></barEcharts>
                                <p class="small_content"
                                >对于普通人群，当β细胞功能风险长期高于60.应特别引起注意，定期进行检测，并进行诊断检查及预防。如有糖尿病家族史， 更需引起注意。并发症风险的其余各项指标不仅针对糖尿病而言，只要风险高就需引起注意。</p>
                            </div>
                            <div>
                                <p class="big_title" style="margin-top:50px">修复能力</p>
                                <barEcharts :echartData="echartsList['糖尿病修复能力'][index]" :ulData="echartUl['修复能力']" height='320'></barEcharts>
                                <p class="small_content"
                                >修复能力说明细胞及器官的调节能力。 长期处于中度亢进大于+80或小于-80状态，不利于机体健康。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageType == 'A'? pageList[20] : pageList[19], all:pageList.length}"></bottmPage>
            </div>
            <!-- A 类 第 22 页, B 类 第 21 页 -->
            <div class="report_page" v-if="pageType == 'A' || pageType == 'B'">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '间质生化评估'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <p class="small_content"
                            >注：间质生化评估的各项数据为动态检测结果，不同于临床抽血化验的检测结果， 各项参数与人体的总体健康状态、各器官的健康状态相关。</p>
                            <div class="shenghua_flex">
                                <div class="flex_box">
                                    <p class="big_title">1、间质生化</p>
                                    <barEcharts :echartData="echartsList['间质生化'][index]" :ulData="echartUl['间质生化']" height='220'></barEcharts>
                                </div>
                                <div class="flex_box">
                                    <p class="big_title">2、间质血气</p>
                                    <barEcharts :echartData="echartsList['间质血气'][index]" :ulData="echartUl['间质血气']" height='220'></barEcharts>
                                    <p class="echart_position_text">PH值：7.45（7.35-7.45） 氢离子：44.7（43-45） 碳酸氢根离子：22.3（21-23）</p>
                                </div>
                                <div class="flex_box">
                                    <p class="big_title">3、间质神经递质</p>
                                    <barEcharts :echartData="echartsList['间质神经递质'][index]" :ulData="echartUl['间质神经递质']" height='220'></barEcharts>
                                </div>
                                <div class="flex_box">
                                    <p class="big_title">4、间质自由基</p>
                                    <barEcharts :echartData="echartsList['间质自由基'][index]" :ulData="echartUl['间质自由基']" height='220'></barEcharts>
                                </div>
                            </div>
                            <div>
                                <p class="big_title">5、间质微量元素</p>
                                <barEcharts :echartData="echartsList['间质微量元素'][index]" :ulData="echartUl['间质微量元素']" height='220'></barEcharts>
                            </div>
                            <div>
                                <p class="big_title">6、间质激素</p>
                                <barEcharts :echartData="echartsList['间质激素'][index]" :ulData="echartUl['间质激素']" height='220'></barEcharts>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: pageType == 'A'? pageList[21] : pageList[20], all:pageList.length}"></bottmPage>
            </div>

            <!-- 最后页 -->
            <div class="report_page">
                <div class="report_content">
                    <div class="report_content_padding">
                        <wehchatCodeHead :title="{name: '健康生活方式'}"></wehchatCodeHead>
                        <div class="pagecontent_page">
                            <div class="lastpage_title">
                                <span></span>
                                <span>健康的生活的方式从我们每天的衣食住行开始</span>
                                <span></span>
                            </div>
                            <div class="img_small_title">
                                <img :src="url + 'one.png'" alt />
                                <p>衣服</p>
                            </div>
                            <p class="lastpage_content">① 衣物要宽松、保暖、透气、吸汗，以棉质为主，丝绸和纱类也不错。</p>
                            <p class="lastpage_content">② 腰带不要太紧，特别是年长者最好以无腰带松紧带裤为主。注意脚底温暖，鞋子要舒适。</p>
                            <p class="lastpage_content">③ 内衣裤以纯棉无色为主，阳光暴晒或沸水煮15分钟最好，更替期为二个月， 这样预防妇科疾病、男性疾病和皮肤病等。</p>
                            <div class="img_small_title">
                                <img :src="url + 'two.png'" alt />
                                <p>饮食</p>
                            </div>
                            <p class="lastpage_content">① 早餐一定要吃，而且要丰盛。肉、蛋、奶、蔬菜、汤、米饭、面食都要有，不吃早餐易得肠胃病、肝胆病、糖尿病等。</p>
                            <p class="lastpage_content">② 中餐要吃好，肉、肉、蛋、奶、蔬菜为主，可以为下午学习工作提供充沛的能量。</p>
                            <p class="lastpage_content">③ 晚饭要吃少，以面食和汤粥为主，5分饱最为合适，晚饭少吃可以减轻肠胃负担，减少脂肪堆积，以流食和易消化食物为主。</p>
                            <p class="lastpage_content">④ 早起时，一定要喝一杯温开水，起到清理肠道和排毒的作用。</p>
                            <p class="lastpage_content">⑤ 根据不同的体质和身体状况，我们搭配无色饮食。</p>
                            <div class="lastpage_center">
                                <div>
                                    <p class="lastpage_content">◆ 红色食物：入心化为气血，气血亏虚者宜多食。例如：西红柿、胡萝卜、大枣、枸杞等等。</p>
                                    <p class="lastpage_content">◆ 白色食物：入肺，呼吸系统不好的患者宜多食。例如：银耳、白梨、白菜、白萝卜、百合等等。</p>
                                    <p class="lastpage_content">◆ 黄色食物：入脾胃，肠胃不好的患者宜多食。例如：香蕉、小米粥、橙子、橘子等等。</p>
                                </div>
                                <div>
                                    <p class="lastpage_content">◆ 青色食物：入胆肝，压力大、易怒的患者宜多食。例如：大叶绿色蔬菜为主，绿豆等等。</p>
                                    <p class="lastpage_content">◆ 黑色食物：入肾，腰酸背疼或肾虚的患者宜多食。例如：木耳、黑豆、何首乌、熟地等等。</p>
                                </div>
                            </div>
                            <div class="img_small_title">
                                <img :src="url + 'three.png'" alt />
                                <p>为维持人体的营养平衡，我们搭配五味饮食</p>
                            </div>
                            <p class="lastpage_content">① 甜味：是人体热量的主要来源，具有解除肌肉疲劳调和脾胃止痛的作用，过量饮用会使血糖升高，胆固醇增加 ，容易发脾气、缺钙、诱发心脑血管疾病，因此要低糖饮食。</p>
                            <p class="lastpage_content">② 酸味：它具有促进食欲、理皮开胃之功效，还可以促进钙磷的吸收，过量食用会使消化功能紊乱，胃肠会痉挛， 所以脾胃有疾病者少吃。</p>
                            <p class="lastpage_content">③ 苦味：主要有清热解毒、泻火通便、燥湿利尿、健脾的作用，过食的话会引起腹泻消化不良。</p>
                            <p class="lastpage_content">④ 辣味：能刺激胃肠蠕动，消化液的分泌促进血液循环、祛风散寒、解表止痛的功效，过食会耗气伤阴。</p>
                            <p class="lastpage_content">⑤ 咸味：有凉血补血的作用，调节人体细胞、水钠钾代谢作用，过食会使皮肤变黑、粗糙、伤肾、头晕、耳鸣、高血压。</p>
                            <div class="lastpage_bottom">
                                <div>
                                    <div class="img_small_title">
                                        <img :src="url + 'four.png'" alt />
                                        <p>运动</p>
                                    </div>
                                    <p class="lastpage_content">① 早晚饭后半小时步行30到40分钟为宜。</p>
                                    <p class="lastpage_content">② 脑供血不足可以倒立或倒行。</p>
                                    <p class="lastpage_content">③ 肥胖患者宜暴走。</p>
                                    <div class="img_small_title">
                                        <img :src="url + 'five.png'" alt />
                                        <p>精神</p>
                                    </div>
                                    <p class="lastpage_content">① 保持心情舒畅，以轻音乐为主。</p>
                                    <p class="lastpage_content">② 情绪比较低沉者以激昂音乐为主。</p>
                                    <p class="lastpage_content">③ 注意劳逸结合，释放压力自我调节</p>
                                    <p class="lastpage_content">④ 经常组织旅游、唱歌、瑜伽、爬山、羽毛球、游泳等活动。</p>
                                </div>
                                <div>
                                    <img :src="url + 'health.png'" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <bottmPage :page="{size: lastPage, all:pageList.length}"></bottmPage>
            </div>

        </div>
    </div>
</template>

<script>
import global from "../../../utils/global";
import echartsOption from "../../../utils/echartsOption";
import bottmPage from "../../../components/report/bottomPageSize";
import pageOne from "../../../components/report/reportOne";
import pageTwo from "../../../components/report/reportTwo";
import wehchatCodeHead from "../../../components/report/pages/wehchatCodeHead";
import radarBox from "../../../components/report/pages/radarBox";
import barEcharts from '../../../components/report/pages/barData'
import healthyPic from "../../../components/report/healthyPic";
import api from "../../../api/report/report";

export default {
    name: "wholeBodyEcharts",
    data() {
        return {
            url: global.imgUrl,
            reportInfo: {
                logo: global.imgUrl + "cell_logo.png",
                name: "全身健康检测报告",
                smallName: "全身健康检测报告"
            },
            userInfo: [
                [
                    {
                        name: "姓名",
                        value: ""
                    },
                    {
                        name: "联系方式",
                        value: ""
                    },
                    {
                        name: "性别",
                        value: ""
                    },
                    {
                        name: "检测时间",
                        value: ""
                    }
                ]
            ],
            pageList: [],
            pageType: 'A',
            lastPage: '',

            reportData: [],
            echartsList: {
                '生理系统风险': [],
                '脑血管': [],
                '知康专有': [],
                '健康风险提示': [],
                '糖尿病并发症风险': [],
                '糖尿病修复能力': [],
                '间质生化': [],
                '间质血气': [],
                '间质神经递质': [],
                '间质自由基': [],
                '间质微量元素': [],
                '间质激素': []
            },
            echartUl: {
                '生理系统风险': [
                    {
                        name: '一级',
                        value: '(0到19.9)',
                        color: '#15d376'
                    },
                    {
                        name: '二级',
                        value: '(20到29.9)',
                        color: '#15d376'
                    },
                    {
                        name: '三级',
                        value: '(30到39.9)',
                        color: '#15d376'
                    },
                    {
                        name: '四级',
                        value: '(40到49.9)',
                        color: '#f5c412'
                    },
                    {
                        name: '五级',
                        value: '(50到59.9)',
                        color: '#f5c412'
                    },
                    {
                        name: '六级',
                        value: '(60到69.9)',
                        color: '#f5c412'
                    },
                    {
                        name: '七级',
                        value: '(70到79.9)',
                        color: '#f16221'
                    },
                    {
                        name: '八级',
                        value: '(80到89.9)',
                        color: '#f16221'
                    },
                    {
                        name: '九级',
                        value: '(90到100)',
                        color: '#f16221'
                    }
                ],
                '并发症评估': [
                    {
                        name: '一级',
                        value: '(0到20)',
                        color: '#15d376'
                    },
                    {
                        name: '二级',
                        value: '(20到40)',
                        color: '#15d376'
                    },
                    {
                        name: '三级',
                        value: '(40到60)',
                        color: '#f5c412'
                    },
                    {
                        name: '四级',
                        value: '(60到80)',
                        color: '#f5c412'
                    },
                    {
                        name: '五级',
                        value: '(80到100)',
                        color: '#f16221'
                    }
                ],
                '修复能力': [
                    {
                        name: '中度减退',
                        value: '(-100到-60)',
                        color: '#4169c4'
                    },
                    {
                        name: '轻度减退',
                        value: '(-60到-20)',
                        color: '#26a3f5'
                    },
                    {
                        name: '最佳状态',
                        value: ' (-20到20)',
                        color: '#14d578'
                    },
                    {
                        name: '轻度亢进',
                        value: '(20到60)',
                        color: '#f5c210'
                    },
                    {
                        name: '中度亢进',
                        value: '(60到100)',
                        color: '#f55f24'
                    }
                ],
                '间质生化': [
                    {
                        name: '较低',
                        value: '(-10到-6)',
                        color: '#4169c4'
                    },
                    {
                        name: '偏低',
                        value: '(-6到-2)',
                        color: '#26a3f5'
                    },
                    {
                        name: '正常',
                        value: ' (-2到+2)',
                        color: '#14d578'
                    },
                    {
                        name: '偏高',
                        value: '(+2到+6)',
                        color: '#f5c210'
                    },
                    {
                        name: '较高',
                        value: '(+6到+10)',
                        color: '#f55f24'
                    }
                ],
                '间质血气': [
                    {
                        name: '较低',
                        value: '(-10到-6)',
                        color: '#4169c4'
                    },
                    {
                        name: '偏低',
                        value: '(-6到-2)',
                        color: '#26a3f5'
                    },
                    {
                        name: '正常',
                        value: ' (-2到+2)',
                        color: '#14d578'
                    },
                    {
                        name: '偏高',
                        value: '(+2到+6)',
                        color: '#f5c210'
                    },
                    {
                        name: '较高',
                        value: '(+6到+10)',
                        color: '#f55f24'
                    }
                ],
                '间质神经递质': [
                    {
                        name: '低',
                        value: '(-20到-12)',
                        color: '#4169c4'
                    },
                    {
                        name: '偏低',
                        value: '(-12到-4)',
                        color: '#26a3f5'
                    },
                    {
                        name: '正常',
                        value: ' (-4到+4)',
                        color: '#14d578'
                    },
                    {
                        name: '偏高',
                        value: '(+4到+12)',
                        color: '#f5c210'
                    },
                    {
                        name: '高',
                        value: '(+12到+20)',
                        color: '#f55f24'
                    }
                ],
                '间质自由基': [
                    {
                        name: '正常',
                        value: ' (0到10)',
                        color: '#14d578'
                    },
                    {
                        name: '偏高',
                        value: '(10到20)',
                        color: '#f5c210'
                    },
                    {
                        name: '高',
                        value: '(20到25)',
                        color: '#f55f24'
                    }
                ],
                '间质微量元素': [
                    {
                        name: '低',
                        value: '(-10到-6)',
                        color: '#4169c4'
                    },
                    {
                        name: '偏低',
                        value: '(-6到-2)',
                        color: '#26a3f5'
                    },
                    {
                        name: '正常',
                        value: ' (-2到+2)',
                        color: '#14d578'
                    },
                    {
                        name: '偏高',
                        value: '(+2到+6)',
                        color: '#f5c210'
                    },
                    {
                        name: '高',
                        value: '(+6到+10)',
                        color: '#f55f24'
                    }
                ],
                '间质激素': [
                    {
                        name: '低',
                        value: '(-10到-6)',
                        color: '#4169c4'
                    },
                    {
                        name: '偏低',
                        value: '(-6到-2)',
                        color: '#26a3f5'
                    },
                    {
                        name: '正常',
                        value: ' (-2到+2)',
                        color: '#14d578'
                    },
                    {
                        name: '偏高',
                        value: '(+2到+6)',
                        color: '#f5c210'
                    },
                    {
                        name: '高',
                        value: '(+6到+10)',
                        color: '#f55f24'
                    }
                ]
            },
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
            sevenPageImg:[
                'https://web.kuaijianzhiliao.com/public/images/img/icon_mianyi.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_xiaohua.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_shenjing.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_xunhuan.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_huxi.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_neifenmi.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_sport.png',
                'https://web.kuaijianzhiliao.com/public/images/img/icon_miniao.png']
        };
    },
    components: {
        bottmPage,
        pageOne,
        pageTwo,
        wehchatCodeHead,
        radarBox,
        healthyPic,
        barEcharts
    },
    methods: {
        cellStyle({ row, colum, rowIndex, columIndex }) {
            let style = {
                "text-align": "center",
                "font-size": "20px",
                'color': "#666"
            };

            return style;
        },
        rowClass({ row, rowIndex }) {
            let style = {
                "text-align": "center",
                "font-size": "20px",
                'color': "#333"
            };

            return style;
        }
    },
    created() {
        // let that = this;
        switch (this.pageType){
        case 'A':
            this.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            this.lastPage = 23
            break;
        case 'B':
            this.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
            this.lastPage = 22
            break;
        case 'C':
            this.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            this.lastPage = 20
            break;
        case 'D':
            this.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            this.lastPage = 16
            break;
        default:
            break;
        }

        document.title = "全身健康检测报告";

        let obj = {
            examIds: "15659592545631803a20232da",
            isCustom: "1",
            reportName: "A",
            reportType: "数据类"
        };

        api.getReportData(obj).then(({ data }) => {
            this.reportData = data;
            data.forEach((item, index) => {
                this.userInfo[index][0].value = item["用户信息"].userName;
                this.userInfo[index][1].value = item["用户信息"].userPhone;
                this.userInfo[index][2].value =
                    item["用户信息"].userSex == 1 ? "男" : "女";
                this.userInfo[index][3].value = this.$moment(
                    item["用户信息"].createTime
                ).format("YYYY-MM-DD");
                //新增项用push 添加

                // 健康画像
                this.bodyFuncInfo.body = item['图片路径'].body_func
                this.bodyFuncInfo.vtb = item['图片路径'].vtb_func
                this.bodyTranInfo.body = item['图片路径'].body_tran
                this.bodyTranInfo.vtb = item['图片路径'].vtb_tran

                //echarts
                //生理系统风险
                this.echartsList["生理系统风险"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                item["生理系统风险"].forEach(echartData => {
                    this.echartsList["生理系统风险"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["生理系统风险"][index].series[0].data.push(
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

                //知康专有
                this.echartsList["知康专有"].push([]);
                item["知康专有"].forEach((echartData, ind) => {
                    this.echartsList["知康专有"][index].push(
                        this.utils.deepCopy(echartsOption.gauge)
                    );
                    this.echartsList['知康专有'][index][ind].series[0].data[0].value = echartData.functionStatus
                });

                //健康风险提示
                this.echartsList["健康风险提示"].push([]);
                Object.keys(item['健康风险提示']).forEach((echartData, ind) => {
                    this.echartsList["健康风险提示"][index].push(
                        this.utils.deepCopy(echartsOption.scatter)
                    );
                    item['健康风险提示'][echartData]['器官'].forEach(scatterData => {
                        this.echartsList["健康风险提示"][index][ind].series[0].data.push([scatterData.examTranstion, scatterData.functionStatus])
                    })
                    item['健康风险提示'][echartData]['脊柱'].forEach(scatterData => {
                        this.echartsList["健康风险提示"][index][ind].series[1].data.push([scatterData.examTranstion, scatterData.functionStatus])
                    })
                    let moren = {
                        symbolSize: 12,
                        data: [0, 0],
                        type: 'scatter',
                        color: '#ccc'
                    }

                    if (item['健康风险提示'][echartData]['器官'].length == 0){
                        this.echartsList["健康风险提示"][index][ind].series.push(moren)
                    }
                    if (item['健康风险提示'][echartData]['脊柱'].length == 0){
                        this.echartsList["健康风险提示"][index][ind].series.push(moren)
                    }

                })

                // 糖尿病并发症风险
                this.echartsList["糖尿病并发症风险"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                item['糖尿病并发症早期风险']['糖尿病并发症风险'].forEach(echartData => {
                    this.echartsList["糖尿病并发症风险"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["糖尿病并发症风险"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 糖尿病修复能力
                this.echartsList["糖尿病修复能力"].push(
                    this.utils.deepCopy(echartsOption.bar)
                );
                item['糖尿病并发症早期风险']['糖尿病修复能力'].forEach(echartData => {
                    this.echartsList["糖尿病修复能力"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["糖尿病修复能力"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 间质生化
                this.echartsList["间质生化"].push(
                    this.utils.deepCopy(echartsOption.smallbar)
                );
                item['间质生化评估']['间质生化'].forEach(echartData => {
                    this.echartsList["间质生化"][index].series[0].barWidth = '20'
                    this.echartsList["间质生化"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["间质生化"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 间质血气
                this.echartsList["间质血气"].push(
                    this.utils.deepCopy(echartsOption.smallbar)
                );
                item['间质生化评估']['间质血气'].forEach(echartData => {
                    this.echartsList["间质血气"][index].series[0].barWidth = '20'
                    this.echartsList["间质血气"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["间质血气"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 间质神经递质
                this.echartsList["间质神经递质"].push(
                    this.utils.deepCopy(echartsOption.smallbar)
                );
                item['间质生化评估']['间质神经递质'].forEach(echartData => {
                    this.echartsList["间质神经递质"][index].series[0].barWidth = '20'
                    this.echartsList["间质神经递质"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["间质神经递质"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 间质自由基
                this.echartsList["间质自由基"].push(
                    this.utils.deepCopy(echartsOption.smallbar)
                );
                item['间质生化评估']['间质自由基'].forEach(echartData => {
                    this.echartsList["间质自由基"][index].series[0].barWidth = '20'
                    this.echartsList["间质自由基"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["间质自由基"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 间质微量元素
                this.echartsList["间质微量元素"].push(
                    this.utils.deepCopy(echartsOption.smallbar)
                );
                item['间质生化评估']['间质微量元素'].forEach(echartData => {
                    this.echartsList["间质微量元素"][index].series[0].barWidth = '20'
                    this.echartsList["间质微量元素"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["间质微量元素"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })

                // 间质激素
                this.echartsList["间质激素"].push(
                    this.utils.deepCopy(echartsOption.smallbar)
                );
                item['间质生化评估']['间质激素'].forEach(echartData => {
                    this.echartsList["间质激素"][index].series[0].barWidth = '20'
                    this.echartsList["间质激素"][index].xAxis[0].data.push(
                        echartData.funcationExplain
                    );
                    this.echartsList["间质激素"][index].series[0].data.push(
                        echartData.functionStatus
                    );
                })


            });
        });
    },
    mounted() {},
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.big_title {
    font-size: 28px;
    line-height: 28px;
    color: #25a5a1;
}
.small_content {
    font-size: 22px;
    line-height: 34px;
    color: #666;
    margin-bottom: 20px;
}
.new_title {
    margin-top: 50px;
}
.echarts_ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    li {
        width: 49%;
        position: relative;
        .echarts_li_title {
            font-size: 22px;
            line-height: 22px;
            color: #25a5a1;
            margin:20px 0 0;
        }
        .echarts_li_bottom {
            font-size: 18px;
            line-height: 20px;
            color: #666;
        }
        .echarts_li_legend{
            display: flex;
            justify-content: space-around;
            width: 60%;
            left: 20%;
            position: absolute;
            top: 60px;
            font-size: 14px;
            color: #666;
            .echarts_li_radio{
                width: 14px;
                height: 14px;
                display: inline-block;
                background: #31c3cb;
                border-radius: 50%;
                position: relative;
                top: 2px;
                right: 5px;
            }
            .radio_color{
                background: #b4a1e3
            }
        }
        .echarts_li_box{
            display: flex;
            .echarts_li_box_chart{
                width: 85%;
                position: relative;
                .axix_title{
                    position: absolute;
                    top:30px;
                    font-size: 12px;
                    color: #666;
                    left: 44%
                }
            }
            .echarts_li_box_other{
                width: 15%;
                line-height: 260px;
                font-size: 12px;
                color: #666
            }
        }
        .echarts_msg{
            display: flex;
            font-size: 16px;
            line-height: 25px;
            color: #666;
            margin-bottom: 10px;
            p{
                width: 15%;
            }
            ul{
                width: 85%;
                display: flex;
                flex-wrap: wrap;

            }
        }
        .margin_title{
            margin-bottom: 20px
        }
    }
}
.seven_page_content{
    .seven_box{
        display: flex;
        .big_title{
            line-height: 40px
        }
        img{
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
    }
}
.lastpage_title{
    text-align: center;
    display: flex;
    font-size: 20px;
    color: #25a5a1;
    justify-content: space-between;
    margin-top: -20px;
    span{
        display: inline-block;
        height: 20px;
        line-height: 20px;
    }
    span:nth-child(1), span:nth-child(3){
        width: 25%;
        margin-top:-9px;
        border-bottom: 1px solid #25a5a1
    }
}
.img_small_title {
    font-size: 28px;
    color: #25a5a1;
    display: flex;
    line-height: 28px;
    margin: 10px 0;
    img {
        width: 28px;
        height: 28px;
        margin-right: 5px;
    }
}
.lastpage_content{
    font-size: 20px;
    line-height: 30px;
    color: #666
}
.lastpage_center{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0;
    div {
        width: 49%;
    }
    div:nth-child(1){
        border-right: 6px dotted #666
    }
}
.lastpage_bottom{
    display: flex;
    justify-content: space-between;
    width: 100%;
    div:nth-child(1){
        width: 60%
    }
    div:nth-child(2){
        width: 40%;
        img{
            width: 300px;
            height: 265px
        }
    }
}
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
    color: #666
}
.shenghua_flex{
    display: flex;
    flex-wrap: wrap;
    .flex_box{
        width: 50%;
        position: relative;
        .echart_position_text{
            position: absolute;
            color: #666;
            top: 30%;
            width: 65%;
            left: 15%;
        }
    }
}
</style>
