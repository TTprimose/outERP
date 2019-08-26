<template>
    <div id="search">
        <el-form :inline="true" :model="form" :rules="rules" ref="ruleForm"  class="demo-form-inline">
            <!-- rules:表单验证规则 -->
            <el-form-item :label="item.name" v-for="(item, index) in searchForm" :key="index" :prop="item.rules? item.parameter : ''">
                                                                           <!-- :prop里面是校验规则是否存在，存在就取item.parameter，不存在就不用校验 -->
                <el-input
                    :placeholder="'请输入' + item.name"
                    v-model="form[item.parameter]"
                    v-if="item.type == 'input'"
                    clearable
                ></el-input>

                <el-select
                    v-model="form[item.parameter]"
                    :placeholder="'请选择' + item.name"

                    v-if="item.type == 'select'"
                    clearable
                >
                    <el-option v-for='(data, i) in item.list' :label="data[item.nameParameter]" :value="data[item.valueParameter]" :key="i"></el-option>
                </el-select>

                <el-date-picker
                    style="width:240px"
                    v-if="item.type == 'time'"
                    v-model="form[item.parameter]"
                    :placeholder="'请选择' + item.name"
                    type="daterange"
                    unlink-panels
                    value-format="yyyy-MM-dd"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    :picker-options="pickerOption">
                </el-date-picker>
                <!-- <el-date-picker
                    class="timeInput"
                    v-model="form[item.parameter]"
                    type="date"
                    :placeholder="'请选择' + item.name"
                    value-format="yyyy-MM-dd"
                    v-if="item.type == 'time'"
                ></el-date-picker> -->

                <el-input
                    :placeholder="'请选择' + item.name"
                    v-model="form[item.parameter]"
                    v-if="item.type == 'pop'"
                    @focus="openPop"
                    clearable
                ></el-input>

            </el-form-item>

            <el-form-item style="margin-left:120px">
                <el-button type="primary" @click="search">查询</el-button>
                <el-button @click="clear">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- <div class="btn_box">
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="clear">重置</el-button>
        </div> -->
                                    <!-- :visible是否显示 Dialog，支持 .sync 修饰符 -->
        <el-dialog title="所属机构" :visible.sync="popState" width="40%">
            <div>
                <textarea name="" id="" cols="80" rows="20"></textarea>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="popState = false">取 消</el-button>
                <el-button type="primary" @click="popState = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "search",
    data() {
        return {
            form: {},
            popState: false,
            rules: {},
            timer: ''
        };
    },
    components: {},
    methods: {
        // 打开弹窗
        openPop() {
            this.popState = true;
        },
        search() {
            this.$refs['ruleForm'].validate((valid) => {
                // ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上，el-form的引用信息为ruleForm ，$refs 是所有注册过的ref的一个集合，
                // validate对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
                if (valid) {
                    this.$emit('returnForm', this.form)  // 返出数据
                    // $emit（）子组件向父组件传递数据
                }
            })
        },
        clear() {
            this.$refs['ruleForm'].resetFields();
            Object.keys(this.form).forEach(item => {
                this.form[item] = ''
            })
        },
        pickerOption() {

        },
        newRules() {
            Object.keys(this.rules).forEach(item => {
                this.searchForm.forEach(data => {
                    if (item == data.parameter){
                        switch (data.type){
                        case 'time':
                            this.rules[item] = [
                                { required: true, message: '请选择' + data.name, trigger: 'change' }
                            ]
                            break;
                        case 'input':
                            this.rules[item] = [
                                { required: true, message: '请输入' + data.name, trigger: 'blur' }
                            ]
                            break;
                        case 'select':
                            this.rules[item] = [
                                { required: true, message: '请选择活动区域', trigger: 'change' }
                            ]
                            break;
                        default:
                            break;
                        }
                    }
                })
            })
        }
    },
    created() {
        this.searchForm.forEach(item => {
            this.$set(this.form, item.parameter, "");
            this.$set(this.rules, item.parameter, "");
            if (item.type == 'select'){
                if (item.defaults){
                    this.form[item.parameter] = item.defaultsValue
                }
            }
        });

        this.newRules()

    },
    mounted() {},
    props: {
        searchForm: {
            // {
            //     name: "开始时间",  名字
            //     parameter: "begin",   字段
            //     type: 'time',   //input 输入框   select 选择框   pop 弹窗  time 时间选择器
            //     rules: true  是否校验。可不穿
            // },
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
.btn_box{
    display: flex;
    justify-content: flex-end;
    margin-right: 30px
}
#search{
    background: white;
    padding: 20px 0 2px;
    border: 1px solid #EBEEF5;
    margin-bottom: 20px
}
</style>
