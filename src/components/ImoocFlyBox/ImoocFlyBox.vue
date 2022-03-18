<template>
    <div class="imooc-fly-box" :ref="refName">
        <svg :width="width" :height="height">
            <defs>
                <path 
                    :id="pathID"
                    :d="path" 
                    fill="none"
                    >
                </path>
                <radialGradient 
                    :id="radialGradientID" 
                    cx="50%"
                    cy="50%"
                    fx="100%"
                    fy="50%"
                    r="50%">
                    <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                    <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
                </radialGradient>
                <mask :id="maskID">
                    <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradientID})`">
                        <animateMotion
                            :path="path"
                            :dur="`${duration}s`"
                            rotate="auto"
                            repeatCount="indefinite"
                        />
                    </circle>
                </mask>
            </defs>
            <use 
                :href="`#${pathID}`"
                stroke-width="1"
                :stroke="lineColor"
            />
            <use 
                :href="`#${pathID}`"
                stroke-width="3"
                :stroke="starColor"
                :mask="`url(#${maskID})`"
            />
        </svg>
        <div class="imooc-fly-box-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import {computed, ref, onMounted, getCurrentInstance} from 'vue'
    import {v4 as uuidv4} from 'uuid'
    export default{
        name:'ImoocFlyBox',
        props:{
            //flybox边框颜色
            lineColor:{
                type:String,
                default:"#235fa7"
            },
            //flybox流星颜色
            starColor:{
                type:String,
                default:"#4fd2dd"
            },
            //flybox流星长度
            starLength:{
                type:[Number,String],
                default:50
            },
            duration:{
                type:[Number,String],
                default:3
            }

        },
        setup(ctx){
            const uuid = uuidv4()
            //定义响应式变量
            const width = ref(0)
            const height = ref(0)
            const refName = "imoocFlyBox"
            const pathID = `${refName}-path-${uuid}`
            const radialGradientID = `${refName}-gradient-${uuid}`
            const maskID = `${refName}-mask-${uuid}`

            //动态计算path属性
            const path = computed(()=>
                `M5 5 L${width.value-5} 5 L${width.value-5} ${height.value-5} L5 ${height.value-5} Z`
            )

            const init = ()=>{
                const instance = getCurrentInstance()
                const dom = instance.ctx.$refs[refName]
                //获取imooc-fly-box的宽高
                width.value = dom.clientWidth
                height.value = dom.clientHeight
            }
            onMounted(()=>{
                init()
            })
            return {
                width,
                height,
                refName,
                path,
                pathID,
                radialGradientID,
                maskID
            }
        }
    }
</script>
<style lang="scss" scoped>
    .imooc-fly-box {
        position:relative;
        width:100%;
        height:100%;
        svg {
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
        }
        .imooc-fly-box-content {
            width: 100%;
            height: 100%;
            padding: 5px;
            /* border-box 元素的宽度包含border和padding */
            box-sizing: border-box;
        }
    }
</style>
