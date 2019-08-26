<template>
    <div class="page_content">
        <div class="pageTwo_title_box">
            <img :src="url + 'assessIntroduction.png'" alt />
            <div>{{content.title}}</div>
            <div>
                <p>简介</p>
                <p>Introduction</p>
            </div>
        </div>
        <div class="pageTwo_content_box">
            <p v-for="(item, index) in content.content" :key="index">{{item}}</p>
        </div>
        <ul class="pageTwo_list_box">
            <li v-for="(item, index) in content.list" :key="index">
                <div>
                    <div>
                        <img :src="url + 'numIcon.png'" alt />
                        <span>{{index + 1}}</span>
                    </div>
                    <p>{{item.title}}</p>
                </div>
                <div>
                    <p>◎</p>
                    <p>{{item.text}}</p>
                </div>
            </li>
        </ul>
        <div class="pageTwo_other_box">{{content.other}}</div>
        <div class="pageTwo_bottom_box">
            <div>
                <img :src="url + 'quick_check_report.png'" alt />
                <img :src="url + 'left.png'" alt />
            </div>
            <img :src="url + 'wechartcode.png'" alt />
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
    created() {
        // console.log(this.content);
    },
    mounted() {},
    props: {
        content: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
</style>
