<template>
    <ul class="slider_ul">
        <li
            class="slider_li"
            v-for="item in sliderList"
            :key="item.text"
            :style="{color:item.color}"
        >
            <div :style="{background:item.color}"></div>
            <p>{{item.text}}</p>
        </li>
        <li class="slider_box" :style="{left:num/((list[5]-list[0])/100) + '%'}">
            <p :style="{color: sliderList[index].color}">{{num}}</p>
            <div class="triangle"></div>
            <div class="radio"></div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            sliderList: [
                {
                    color: "#28c7c2",
                    text: "低"
                },
                {
                    color: "#27abf6",
                    text: "偏低"
                },
                {
                    color: "#ffbb00",
                    text: "中"
                },
                {
                    color: "#ff7e00",
                    text: "偏高"
                },
                {
                    color: "#ff3300",
                    text: "高"
                }
            ],
            list: [0, 20, 40, 60, 80, 100],
            index: 0
        };
    },
    components: {},
    methods: {},
    created() {
        switch (true) {
        case this.num >= this.list[0] && this.num <= this.list[1]:
            this.index = 0;
            break;
        case this.num > this.list[1] && this.num <= this.list[2]:
            this.index = 1;
            break;
        case this.num > this.list[2] && this.num <= this.list[3]:
            this.index = 2;
            break;
        case this.num > this.list[3] && this.num <= this.list[4]:
            this.index = 3;
            break;
        case this.num > this.list[4] && this.num <= this.list[5]:
            this.index = 4;
            break;
        default:
            break;
        }
    },
    mounted() {},
    props: {
        num: {
            type: Number,
            default: 0
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
    position: relative;
    text-align: center;
    margin: 90px 0 30px 0;
    .slider_li {
        width: 20%;
        font-size: 24px;
    }
    .slider_li div {
        height: 16px;
        width: 100%;
        margin-bottom: 30px;
    }
    .slider_box {
        position: absolute;
        width: 32px;
        height: 32px;
        margin-left: -16px;
        top: -66px;
        p {
            font-size: 28px;
            // margin-bottom: 10px;
        }
        .triangle {
            width: 0;
            height: 0;
            border-width: 15px 10px 0;
            border-style: solid;
            border-color: #888 transparent transparent;
            margin: auto;
            margin-bottom: 5px;
        }
        .radio {
            width: 32px;
            height: 32px;
            background: white;
            border-radius: 50%;
            box-shadow: darkgrey 0px 0px 10px 1px;
            margin: auto;
        }
    }
}
</style>
