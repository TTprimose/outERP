<template>
    <div>
        <div>
            <div class="report6_wrong_box">
                <ul class="report6_wrong bornone">
                    <li> 指标提示说明</li>
                    <li class="report6_wrong_list">
                        ■ 表示功能状态或修复能力消耗过度
                        ● 表示功能状态或修复能力基本健康
                        ▼ 表示功能状态或修复能力处于减退
                    </li>
                </ul>
                <ul class="report6_wrong">
                    <li> 解读提示说明</li>
                    <li class="report6_wrong_list">
                        ● + ▼ 器官无明显疾病趋势，但应提高免疫能力
                    </li>
                    <li class="report6_wrong_list">
                        ▼ + ● 暂时性功能下降，机体疲劳，可自我修复
                    </li>
                    <li class="report6_wrong_list">
                        ■ + ● 器官无明显疾病趋势，可自我修复
                    </li>
                    <li class="report6_wrong_list">
                        ● + ■ 器官疲劳，注意休息
                    </li>
                    <li class="report6_wrong_list">
                        ▼ + ■ 长期问题，有复发趋势，注意观察
                    </li>
                    <li class="report6_wrong_list">
                        ● + ● 无疾病发展趋势
                    </li>
                    <li class="report6_wrong_list">
                        ■ + ▼ 器官疲劳，恢复能力下降，易形成疾病，提高免疫能力
                    </li>
                    <li class="report6_wrong_list">
                        ▼ + ▼ 已形成慢性疾病，健康隐患埋藏时间较长，就医就诊或康复治疗
                    </li>
                    <li class="report6_wrong_list">
                        ■ + ■ 有急性疾病趋势，或因检测时间服用了药物、保健产品、注意观察就诊或干预预防
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .report6_wrong_box{
        padding:20px;
        border:2px solid green;
        margin-top:20px;
    }
    .report_bottom_box{
        width:100%;
        margin-top:20px;
    }    
    .bornone{
        margin-top: 0;
    }
    .report6_wrong_list {
        text-indent:2em;
        line-height:28px;
    }

</style>