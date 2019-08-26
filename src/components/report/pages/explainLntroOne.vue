<template>
    <div class="explainIntro">
        <div class="explainIntro_title">解读说明：</div>
        <div class="explainIntro_content">
            <p>检测数值【0~20】，风险等级低</p>
            <p>检测数值【21~40】，风险等级偏低</p>
            <p>检测数值【41~60】，风险等级中</p>
            <p>检测数值【61~80】，风险等级偏高</p>
            <p>检测数值【81~100】，风险等级高</p>
        </div>
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
.explainIntro_title{
    margin:20px 0;
    font-size: 22px;
    font-family: "Microsoft YaHei";
    color: #2dbdb6;
}
.explainIntro_content p{
    // line-height:45px;
    color:#666;
    font-size: 20px;
    padding: 5px 0;
}
</style>

