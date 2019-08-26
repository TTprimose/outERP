<template>
    <el-table
        :data="tableData"
        border
        :cell-style="cellStyle"
        :header-cell-style="rowClass"
    >
        <el-table-column v-for="(val, key, index) in tableTitle" :key="index" :label="key" :width="val['width'] ? val['width'] : ''">
            <template slot-scope="scope" >
                <p v-if="scope.row[val['name']]" :style="{color: scope.row[val['name']].color ? scope.row[val['name']].color : '#666'}">{{ scope.row[val['name']].name ? scope.row[val['name']].name :scope.row[val['name']] }}</p>
                <p v-else>无</p>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    components: {},
    methods: {
        cellStyle({ row, colum, rowIndex, columIndex }) {
            let style = {
                "text-align": "center",
                "font-size": "20px",
                'color': "#666"
            };

            return style;
        },
        rowClass({ row, rowIndex }) {
            let style = {
                "text-align": "center",
                "font-size": "20px",
                'color': "#333"
            };

            return style;
        }
    },
    created() {},
    mounted() {},
    props: {
        tableTitle: {
            type: Object,
            default() {
                return {};
            }
        },
        tableData: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
</style>
