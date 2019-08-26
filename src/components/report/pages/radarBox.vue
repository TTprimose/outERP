<template>
    <div>
        <p class="big_title" v-if="pramaer == 'functionStatus'">功能状态</p>
        <p class="big_title" v-else>修复能力</p>
        <div class="radar_box">
            <div>
                <v-chart style="width:100%;height:450px" :options="options" :auto-resize="true"></v-chart>
            </div>
            <ul>
                <li>
                    <p>(60到100)</p>
                    <p>中度亢进</p>
                </li>
                <li>
                    <p>(20到60)</p>
                    <p>轻度亢进</p>
                </li>
                <li>
                    <p>(-20到20)</p>
                    <p>最佳状态</p>
                </li>
                <li>
                    <p>(-60到-20)</p>
                    <p>轻度衰退</p>
                </li>
                <li>
                    <p>(-100到-60)</p>
                    <p>中度衰退</p>
                </li>
            </ul>
        </div>
        <p class="small_content" v-if="pramaer == 'functionStatus'">功能状态说明细胞及器官的活跃程度。 长期处于中度亢进（大于+80）或中度减退（小于-80）状态，不利于机体健康。 -20到20，最佳；20到60，轻度亢进；60到100，中度亢进；-60到-20，轻度减退；-100到-60，中度减退。</p>
        <p class="small_content" v-else>修复能力说明细胞及器官的调节能力。 长期处于中度亢进（大于+80）或中度减退（小于-80）状态，不利于机体健康。 -20到20，最佳；20到60，轻度亢进；60到100，中度亢进；-60到-20，轻度减退；-100到-60，中度减退。</p>
    </div>
</template>

<script>
import echartsOption from "../../../utils/echartsOption";

export default {
    name: "",
    data() {
        return {
            options: null
        };
    },
    components: {},
    methods: {},
    created() {
        this.options = this.utils.deepCopy(echartsOption.radar);

        this.radarInfo.forEach(item => {
            let obj = {
                name: `${item.funcationExplain}(${item[this.pramaer]})`,
                max: 100,
                min: -140
            };

            this.options.radar[0].indicator.push(obj);
            this.options.series[0].data[0].value.push(item[this.pramaer]);
        });
    },
    mounted() {},
    props: {
        radarInfo: {
            type: Array,
            default() {
                return [];
            }
        },
        pramaer: {
            type: String,
            default: ""
        }
    },
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.radar_box {
    display: flex;
    width: 100%;
    div {
        width: 88%;
    }
    ul {
        width: 12%;
        text-align: center;
        font-size: 16px;
        li {
            margin-bottom: 10px;
            position: relative;
        }
        li::after {
            content: "";
            width: 15px;
            height: 30px;
            position: absolute;
            right: -10px;
            top: 8px;
        }
        li:nth-child(1)::after {
            background: #f55f24;
        }
        li:nth-child(2)::after {
            background: #f5c210;
        }
        li:nth-child(3)::after {
            background: #14d578;
        }
        li:nth-child(4)::after {
            background: #26a3f5;
        }
        li:nth-child(5)::after {
            background: #4169c4;
        }
    }

}
.big_title {
    font-size: 28px;
    line-height: 28px;
    color: #25a5a1;
}
.small_content{
    font-size: 22px;
    line-height: 34px;
    color: #666;
    margin-bottom: 30px;
}
</style>
