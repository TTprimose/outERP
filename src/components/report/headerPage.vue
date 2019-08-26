<template>
    <div class="report_content_page_title">
        <p>{{pageTitle.title}}</p>
        <div class="report_content_page_title_wechat">
            <img :src="url + 'quick_check_twoDimensionalCode.png'" alt="">
            <p>赚健康</p>
        </div>
        <ul v-if="pageInfo.list">
            <li v-for="(item, index) in pageInfo.list" :key="index">
                <p>{{item.name + '：'}}</p>
                <p>{{item.value}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import global from "../../utils/global"

export default {
    name: "",
    data() {
        return {
            url: global.imgUrl
        };
    },
    components: {},
    methods: {},
    created() {},
    mounted() {},
    props: {
        pageTitle: {
            type: Object,
            defult() {
                return {}
            }
        },
        pageInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
</style>
