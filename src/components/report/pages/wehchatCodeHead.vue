<template>
    <div class="report_content_page_title" style="margin-bottom:30px">
        <p>{{title.name}}</p>
        <div class="report_content_page_title_wechat">
            <img :src="url + 'quick_check_twoDimensionalCode.png'" alt />
            <p>赚健康</p>
        </div>
    </div>
</template>

<script>
import global from "../../../utils/global"

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
        title: {
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
