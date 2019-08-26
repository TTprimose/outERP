<template>
    <div class="tell_box">
        <ul>
            <li>
                <div style="background: #35c7c1">1级</div>
                <p>无疾病形成</p>
            </li>
            <li>
                <div style="background: #32acf3">2级</div>
                <p>有疾病发展趋势</p>
            </li>
            <li>
                <div style="background: #fdba2c">3级</div>
                <p>潜在疾病风险</p>
            </li>
            <li>
                <div style="background: #fd7e23">4级</div>
                <p>疾病正在形成</p>
            </li>
            <li>
                <div style="background: #fc361d">5级</div>
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
    ul {
        margin: 16px;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        li{
            display: flex;
            width: 33%;
            color: #666;
            font-size: 22px;
            margin-bottom: 16px;
            div{
                color: white;
                padding: 5px 20px;
                margin-right: 10px;
                border-radius: 10px
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
