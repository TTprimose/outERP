<template>
    <div>
        <search :searchForm="search" @returnForm="searchForm"></search>

        <div class="content_background_other">
            <div class="btn_box">
                <el-button>批量打印</el-button>
                <el-button>批量打印</el-button>
            </div>
            <div ref="tableBox">
                <tables
                    :tableData="tableList"
                    :tableTitle="json.tableHead()['报告打印管理']['个人检测报告']"
                    :tableOption="option"
                    :tableHeight='tableHeight'
                    @returnClick="optionClick"
                ></tables>
            </div>
            <div ref='pageBox'>
                <pageTotal @returnPageSize="changePageSize" @returnPageList="changePageList"></pageTotal>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../api/report/report'
import search from "../../components/search/search";
import tables from "../../components/tables/tables";
import pageTotal from "../../components/tables/pageTotal";

export default {
    name: "report",
    data() {
        return {
            search: [
                {
                    name: "查询时段",
                    parameter: "timer",
                    type: "time",
                    rules: true
                },
                {
                    name: "所属机构",
                    parameter: "departmentId",
                    type: "pop"
                },
                {
                    name: "设备SN号",
                    parameter: "machineSerialNo",
                    type: "pop"
                },
                {
                    name: "手机号码",
                    parameter: "userPhone",
                    type: "input"
                },
                {
                    name: "身份证号",
                    parameter: "citizenIdNo",
                    type: "input"
                },
                {
                    name: "业务经理",
                    parameter: "projectName",
                    type: "input"
                },
                {
                    name: "邀请检测人",
                    parameter: "people",
                    type: "input"
                },
                {
                    name: "报告类型",
                    parameter: "reportType",
                    type: "select",
                    nameParameter: 'graduation',
                    valueParameter: 'id',
                    defaults: true,
                    defaultsValue: 0,
                    list: []
                }
            ],
            tableList: [
                {
                    citizenIdNo: null,
                    classId: null,
                    departmentId: null,
                    endTime: null,
                    examType: 10,
                    hzExamId: "15646272639031803a20232da",
                    inviter: "",
                    machineSerialNo: "1803A20232DA",
                    machineType: "小乐康",
                    manager: "",
                    managerCode: null,
                    organization: "康乐富",
                    projectName: "康乐富",
                    reportType: "免疫功能健康检测报告",
                    startTime: null,
                    testTime: "2019-08-01 10:42:25",
                    userBirthday: "1985-11-18",
                    userId: null,
                    userName: "胡国员",
                    userPhone: "15167159226",
                    userSex: "2"
                },
                {
                    citizenIdNo: null,
                    classId: null,
                    departmentId: null,
                    endTime: null,
                    examType: 10,
                    hzExamId: "15646272639031803a20232da",
                    inviter: "",
                    machineSerialNo: "1803A20232DA",
                    machineType: "小乐康",
                    manager: "",
                    managerCode: null,
                    organization: "康乐富",
                    projectName: "康乐富",
                    reportType: "免疫功能健康检测报告",
                    startTime: null,
                    testTime: "2019-08-01 10:42:25.934",
                    userBirthday: "1985-11-18",
                    userId: null,
                    userName: "胡国员",
                    userPhone: "15167159226",
                    userSex: "2"
                }
            ],
            option: {
                check: true,
                btn: [
                    {
                        type: "primary",
                        name: "查看"
                    },
                    {
                        type: "success",
                        name: "打印"
                    }
                ]
            },
            tableHeight: 0
        };
    },
    components: {
        search,
        tables,
        pageTotal
    },
    methods: {
        changePageSize(data) {
            console.log(data)
        },
        changePageList(data) {
            console.log(data)
        },

        searchForm(data) {
            let obj = data

            obj.startTime = data.timer[0]
            obj.endTime = data.timer[1]

            delete obj.timer

            console.log(obj)
            api.searchReportList(obj).then(res => {
                console.log(res)
            })
        },
        optionClick(data) {
            switch (data.name) {
            case "选择":
                console.log(data.event);
                break;
            case "查看":
                // console.log(data.event);
                let routeData = this.$router.resolve({
                    path: "/report/brainHealth"
                });

                window.open(routeData.href, "_blank");
                break;
            case "打印":
                console.log(data.event);
                break;
            default:
                break;
            }
        },
        getReportType() {
            api.reportTypeList().then(({data}) => {
                this.search.forEach(item => {
                    if (item.name == '报告类型'){
                        item.list = data
                        let obj = {
                            graduation: "全部",
                            id: 0
                        }

                        item.list.unshift(obj)
                    }
                });
            })
        }
    },
    created() {
        this.getReportType()
    },
    mounted() {
        this.tableHeight = this.$store.state.frame.device.winheight - this.$refs.tableBox.offsetTop - 56 - this.$refs.pageBox.offsetHeight;

        let that = this

        window.addEventListener('resize', function() {
            that.tableHeight = that.$store.state.frame.device.winheight - that.$refs.tableBox.offsetTop - 56 - that.$refs.pageBox.offsetHeight;
        })
    },
    props: {},
    computed: {},
    watch: {}
};

</script>

<style scoped lang="less">
.btn_box {
    border: 1px solid #ebeef5;
    padding: 10px;
    border-bottom: 0;
    padding-left: 10px;
}
</style>
