<template>
    <div class="login_box" v-if='isReload'>
        <img src="../../assets/img/login_logo.png" alt />
        <div class="login">
            <h1>登 录</h1>
            <div class="login_input">
                <div class="input_box" style="margin-bottom:40px">
                    <i class="el-icon-mobile-phone"></i>
                    <input
                        type="text"
                        v-model="user.mobile"
                        autocomplete="off"
                        placeholder="请输入手机号"
                        maxlength="11"
                        minlength="11"
                        class="input_send"
                        @input="mobileChange"
                    />
                    <div class="error_box" v-if="errorText.mobile != ''">{{errorText.mobile}}</div>
                </div>
                <div class="input_box">
                    <i class="el-icon-lock"></i>
                    <input
                        :type="passwordType ? 'password' : 'text'"
                        v-model="user.password"
                        autocomplete="off"
                        maxlength="12"
                        minlength="8"
                        placeholder="请输入密码"
                        class="input_send"
                        @input="passwordChange"
                    />
                    <i
                        class="el-icon-view show_password"
                        v-if="passwordType"
                        @click="passwordType = !passwordType"
                    ></i>
                    <i
                        class="el-icon-sunrise hide_password"
                        v-else
                        @click="passwordType = !passwordType"
                    ></i>
                    <div class="error_box" v-if="errorText.password != ''">{{errorText.password}}</div>
                </div>
            </div>
            <div class="remeber_box">
                <div>
                    <el-checkbox v-model="checked" @change="remeberUser">记住密码</el-checkbox>
                </div>
                <div>忘记密码？</div>
            </div>
            <div class="submit_box">
                <div class="submit" @click="login">登 录</div>
            </div>
        </div>
        <p class="login_bottom">Copyright © 2018 Kuaijianzhiliao. All rights reserved</p>
    </div>
</template>

<script>
// import api from "../../api/login/login";

export default {
    name: "login",
    data() {
        return {
            isReload: false,
            user: {
                mobile: "15825577066",
                password: "15825577066"
            },
            passwordType: true,
            checked: false,
            errorText: {
                mobile: "",
                password: ""
            },
            tree: []
        };
    },
    components: {},
    methods: {
        mobileChange() {
            this.errorText.mobile = "";
            let reg = new RegExp('^[0-9]*$')

            if (!reg.test(this.user.mobile)){
                this.errorText.mobile = '请输入正确的手机号'
            }
        },
        passwordChange() {
            this.errorText.password = "";
        },
        remeberUser() {
            if (this.checked){
                localStorage.setItem('loginUser', JSON.stringify(this.user))
            } else {
                localStorage.removeItem('loginUser')
            }
        },
        findOpen(data) {
            let list = data

            list.forEach(item => {
                item.open = false
                if (!item.children){
                    item.children = []
                }
                if (item.children.length){
                    this.findOpen(item.children)
                }
            });

            return list
        },
        // login() {
        //     switch (true) {
        //     case this.user.mobile == "":
        //         this.errorText.mobile = "请输入手机号码";
        //         break;
        //     case this.user.password == "":
        //         this.errorText.password = "请输入密码";
        //         break;
        //     default:
        //         api.userLogin({
        //             mobile: this.user.mobile,
        //             password: this.$md5(this.user.password)
        //         }).then(({ data }) => {
        //             this.tree = this.findOpen(data.newModuleTree)
        //             this.$store.dispatch("frame/initUser", data.user);
        //             this.tree.forEach(item => {
        //                 if (item.name == '主页'){
        //                     item.open = true
        //                     this.$store.dispatch("frame/closeAll", item.children[0]); //页面跳转并设置初始树打开和导航标识
        //                 }
        //             })

        //             this.$store.dispatch("frame/initTree", this.tree);

        //             this.$router.push({
        //                 path: "/"
        //             });
        //             this.$message({
        //                 message: '登录成功',
        //                 type: 'success'
        //             });
        //             // this.user.mobile = ''
        //             // this.user.password = ''
        //         });
        //         break;
        //     }
        // }
        login() {
            let list = [
                {
                    name: "主页",
                    id: "1",
                    path: "/gen",
                    open: false,
                    type: 1, //是否目录
                    resourceType: 1, //第几层节点
                    children: [
                        {
                            name: "首页",
                            id: "2",
                            path: "/main",
                            open: false,
                            type: 0,
                            resourceType: 2,
                            children: []
                        }
                    ]
                },
                {
                    name: "报告打印管理",
                    id: "3",
                    path: "/gen",
                    open: false,
                    type: 1,
                    resourceType: 1,
                    children: [
                        {
                            name: "个人检测报告",
                            id: "4",
                            path: "/reportList",
                            open: false,
                            type: 1,
                            resourceType: 2,
                            children: [
                                {
                                    name: "个人检测报告",
                                    id: "5",
                                    path: "/reportList",
                                    open: false,
                                    type: 0,
                                    resourceType: 3,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "新的",
                    id: "6",
                    path: "/gen",
                    open: false,
                    type: 1, //是否目录
                    resourceType: 1,
                    children:[
                        {
                            name: "新页面",
                            id: "7",
                            path: "/asd",
                            open: false,
                            type: 0,
                            resourceType: 2,
                            children: []
                        },
                        {
                            name: "第二个页面",
                            id: "8",
                            path: "/qwe",
                            open: false,
                            type: 0,
                            resourceType: 2,
                            children: []
                        }
                    ]
                }
            ];

            let userInfo = {
                name: "猪八戒"
            };

            list[0].open = true;
            this.$store.dispatch("frame/closeAll", list[0].children[0]); //页面跳转并设置初始树打开和导航标识

            this.$store.dispatch("frame/initTree", list);
            this.$store.dispatch("frame/initUser", userInfo);

            this.$router.push({
                path: "/"
            });
        }

    },
    created() {
        if (sessionStorage.getItem('userInfo')){
            sessionStorage.clear()
            return window.location.reload()
        }
        this.isReload = true
        if (localStorage.getItem('loginUser')){
            this.user = JSON.parse(localStorage.getItem('loginUser'))
            this.checked = true
        }
    },
    mounted() {},
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.login_box {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url("https://web.kuaijianzhiliao.com/public/images/img/login_Bg.png") center center no-repeat;
    img {
        margin: 30px 0 0 50px;
    }
    .login {
        width: 425px;
        height: 500px;
        border-radius: 8px;
        box-shadow: 0px 6px 24px 6px rgba(64, 158, 255, 0.7);
        position: absolute;
        right: 15%;
        top: 50%;
        background: white;
        margin-top: -270px;
        h1 {
            font-size: 30px;
            line-height: 30px;
            text-align: center;
            color: #333;
            margin: 48px 0 72px;
        }
        .login_input {
            .input_box {
                position: relative;
                border-bottom: 1px solid #dfdfdf;
                margin: 0 32px;
                margin-bottom: 32px;
                i {
                    font-size: 22px;
                    position: absolute;
                    color: #999;
                }
                i:nth-child(1) {
                    left: 10px;
                    top: 9px;
                }
                .show_password {
                    right: 10px;
                    top: 9px;
                    cursor: pointer;
                }
                .hide_password {
                    right: 10px;
                    top: 9px;
                    cursor: pointer;
                    transform: rotate(180deg);
                }
                .input_send {
                    width: 280px;
                    height: 40px;
                    font-size: 16px;
                    color: #666;
                    margin: 0 40px;
                }
                .error_box {
                    position: absolute;
                    width: 100%;
                    text-indent: 10px;
                    background: #fdeeee;
                    border-top: 1px solid #e16d68;
                    color: #e1504a;
                    height: 24px;
                    line-height: 24px;
                    font-size: 12px;
                }
            }
        }
        .remeber_box {
            display: flex;
            color: #666;
            padding: 0 30px;
            justify-content: space-between;
            div {
                text-align: center;
                font-size: 14px;
                color: #409eff;
                cursor: pointer;
            }
        }
        .submit_box {
            padding: 0 30px;
            .submit {
                width: 100%;
                background: #409eff;
                height: 48px;
                line-height: 48px;
                color: white;
                border-radius: 24px;
                font-size: 18px;
                text-align: center;
                margin-top: 58px;
                cursor: pointer;
                box-shadow: 0 2px 10px 2px rgba(64, 158, 255, 0.4);
            }
            .submit:hover {
                opacity: 0.9;
            }
        }
    }
    .login_bottom {
        font-size: 16px;
        position: absolute;
        width: 100%;
        text-align: center;
        color: white;
        bottom: 20px;
    }
}
input::-webkit-input-placeholder {
    color: #999;
}
input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999;
}
input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999;
}
input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #999;
}
input:-webkit-autofill { box-shadow: 0 0 0px 1000px white inset !important;}
</style>
