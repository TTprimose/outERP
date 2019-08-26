<template>
    <div class="tell_box">
        <ul>
            <li>
                <div style="border:1px solid #32acf3">1级</div>
                <p>有疾病发展趋势</p>
            </li>
            <li>
                <div style="border:1px solid #fdba2c">2级</div>
                <p>潜在疾病风险</p>
            </li>
            <li>
                <div style="border:1px solid #fd7e23">3级</div>
                <p>疾病正在形成</p>
            </li>
            <li>
                <div style="border:1px solid #fc361d">4级</div>
                <p>疾病已存在或发生概率高</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    components: {},
    methods: {},
    created() {},
    mounted() {},
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.tell_box {
    border: 0.5mm solid #e1e1e1;
    padding: 16px 20px 0;
    margin: 10px 0 15px;
    ul {
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        li{
            display: flex;
            width: 48%;
            color: #666;
            font-size: 18px;
            margin-bottom: 16px;
            div{
                padding: 1px 8px;
                border-radius: 8px;
                margin-right: 10px;
                line-height: 30px;
            }
            p{
                padding: 5px 0
            }
        }
        li:nth-child(5){
            width: 66%
        }
    }
}
</style>
