<template>
    <el-table
        :data="tableData"
        tooltip-effect="dark"
        border
        :height="tablesHeight"
        @selection-change="handleSelectionChange"
    >
        <el-table-column type="selection" v-if="tableOption.check"></el-table-column>

        <el-table-column
            v-for="(val, key, index) in tableTitle"
            :key="index"
            :label="key"
            show-overflow-tooltip
        >
            <template slot-scope="scope">{{ scope.row[val] }}</template>
        </el-table-column>

        <el-table-column label="操作" :width="tableOption.btn.length * 70 + 5">
            <template slot-scope="scope">
                <div class="btn_box">
                    <el-button
                        size="mini"
                        v-for="item in tableOption.btn"
                        :key="item.name"
                        :type="item.type"
                        @click="handleEdit(scope.$index, scope.row, item.name)"
                    >{{item.name}}</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            tablesHeight: null
        };
    },
    components: {},
    methods: {
        handleSelectionChange(val) {
            // 选中数据
            let obj = {
                name: "选择",
                event: val
            };

            this.$emit("returnClick", obj);  //子组件向父组件reportList传递数据
        },
        handleEdit(index, row, name) {
            // 操作按钮
            let obj = {
                name,
                event: row
            };

            this.$emit("returnClick", obj);
        }
    },
    created() {},
    mounted() {},
    props: {
        tableData: {
            type: Array,
            default() {
                return [];
            }
        },
        tableTitle: {
            type: Object,
            default() {
                return {};
            }
        },
        tableHeight: {
            type: Number,
            default: 0
        },
        //  option: {
        //         check: true,  是否带选择框
        //         btn: [       按钮列表
        //             {
        //                 type: 'primary',  样式
        //                 name: '查看'      名字
        //             },
        //             {
        //                 type: 'success',
        //                 name: '打印'
        //             }
        //         ]
        //     }
        tableOption: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    computed: {},
    watch: {
        tableHeight(val) {
            this.tablesHeight = val
        }
    }
};
</script>

<style scoped lang="less">
.btn_box {
    display: flex;
}
</style>
