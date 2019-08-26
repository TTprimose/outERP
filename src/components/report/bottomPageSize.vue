<template>
    <div class="report_pageNumber">
        <p>
            <span>{{page.size}}</span>
            <span class="center_icon">/</span>
            <span>{{page.all}}</span>
        </p>
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
        page: {
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
