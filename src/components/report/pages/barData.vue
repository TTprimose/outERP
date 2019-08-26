<template>
    <div>
        <ul class="echart_title" v-if='ulData.length'>
            <li v-for="item in ulData" :key="item.value">
                <p>
                    <span :style="{background: item.color}"></span>
                    <span>{{item.value}}</span>
                </p>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <v-chart
            :style="{width: '100%', height: height + 'px'}"
            :options="echartData"
            :auto-resize="true"
        ></v-chart>
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
    props: {
        echartData: {
            type: Object,
            default() {
                return {}
            }
        },
        ulData: {
            type: Array,
            default() {
                return []
            }
        },
        height: {
            type: String,
            default: ''
        }
    },
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.echart_title {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
    li {
        position: relative;
        p:nth-child(1){
            span:nth-child(1){
                display: inline-block;
                position: absolute;
                left: -15px;
                width: 10px;
                height: 16px;
            }
        }
    }
}
</style>
