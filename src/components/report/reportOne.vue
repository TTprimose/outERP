<template>
    <div class="page_content">
        <div class="pageOne_logo_box">
            <img :src='reportInfo.logo' alt class="pageOne_logo" />
        </div>
        <div class="pageOne_name_box">
            <img :src="url + 'nameIcon.png'" alt class="name_left_icon" />
            <div class="pageOne_name">
                <p>{{reportInfo.name}}</p>
                <p>—— {{reportInfo.smallName}} ——</p>
            </div>
            <img :src="url + 'nameIcon.png'" alt class="name_right_icon" />
        </div>
        <div class="pageOne_icon_box">
            <img :src="url + 'check_icon.png'" alt />
            <p>A - 1 阶段评测</p>
        </div>
        <ul class="pageOne_user_box">
            <li v-for="item in userInfo" :key="item.name">
                <p>{{item.name + '：'}}</p>
                <p>{{item.value}}</p>
            </li>
        </ul>
        <div class="pageOne_bottom_box">
            <img :src="url + 'quick_check_report.png'" alt />
            <div class="pageOne_bottom_phone">
                <p>全国统一服务热线</p>
                <p>400-656-0285</p>
            </div>
        </div>
    </div>
</template>

<script>
import global from "../../utils/global";

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
        userInfo: {
            type: Array,
            default() {
                return []
            }
        },
        reportInfo: {
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
