<template>
    <ul class="slider_ul">
        <li
            class="slider_li"
            v-for="item in sliderList"
            :key="item.text"
            :style="{color:item.color,background:item.background}"
        >
            <p>{{item.text}}</p>
        </li>
        <!-- <li
            class="slider_li"
            v-for="item in sliderListOther"

            :key="item.text"
            :style="{color:item.color,background:item.background}"
        >
            <p>{{item.text}}</p>
        </li> -->
    </ul>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            sliderList: [
                {
                    color: "#333",
                    background: '#ecf0f3',
                    text: "低"
                },
                {
                    color: "#27abf6",
                    background: '#ecf0f3',
                    text: "偏低"
                },
                {
                    color: "#ffbb00",
                    background: '#ecf0f3',
                    text: "中"
                },
                {
                    color: "#ff7e00",
                    background: '#ecf0f3',
                    text: "偏高"
                },
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "高"
                }
            ],
            sliderListOther:[
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "副交感神经中度兴奋"
                },
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "副交感神经轻度兴奋"
                },
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "自主神经系统兴奋性正常"
                },
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "交感神经轻度兴奋"
                },
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "交感神经中度兴奋"
                },
                {
                    color: "#ff3300",
                    background: '#ecf0f3',
                    text: "自主神经系统兴奋性失调"
                }
            ],
            index:0
        };
    },
    components: {},
    methods: {},
    created() {
        console.log(this.level)
        this.sliderList.forEach(item=> {
            if (this.level == item.text) {
                item.background = '#25a5a1'
                item.color = '#fff'
            } else {
                item.background = '#ecf0f3'
            }
        })
    },
    mounted() {},
    props: {
        level: {
            type: String,
            default: '偏低'
        }
    },
    watch: {}
};
</script>

<style scoped lang="less">
/* 组件 */
.slider_ul {
    display: flex;
    width: 100%;
    height: 40px;
    position: relative;
    text-align: center;
    background-color: #ecf0f3;
    margin: 25px 0 0px 0;
    .slider_li {
        width: 20%;
        line-height: 40px;
        font-size: 18px;
    }
}
</style>
