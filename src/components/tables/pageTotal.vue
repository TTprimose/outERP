<template>
    <div class="page_total_box">
        <div class="page_size_box">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            currentPage: 1
        };
    },
    components: {},
    methods: {
        handleSizeChange(val) {
            this.$emit('returnPageList', val)
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.$emit('returnPageSize', val)
            console.log(`当前页: ${val}`);
        }
    },
    created() {},
    mounted() {},
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.page_total_box{
    border: 1px solid #e7eaec;
    border-top: none;
    height: 48px;
    .page_size_box{
        margin-top: 8px;
        float: right;
        margin-right: 30px
    }
}
</style>
