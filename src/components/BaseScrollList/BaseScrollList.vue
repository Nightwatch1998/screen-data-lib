<template>
    <div class="base-scroll-list" :id="id">
        <div 
            class="base-scroll-list-header" 
            :style="{
                backgroundColor:actualConfig.headerBg,
                height:`${actualConfig.headerHeight}px`,
                fontSize: `${actualConfig.headerFontsize}px`,
                color:  actualConfig.headerColor
            }"
            >
            <div 
                class="header-item base-scroll-list-text" 
                v-for="(headerItem, i) in headerData"
                :key="headerItem + i"
                :style="{
                    width:`${columnWidths[i]}px`,
                    ...headerStyle[i]
                }"
                v-html="headerItem"
                :align = "aligns[i]"
            >
            </div>
        </div>
        <div 
            class="base-scroll-list-rows-wrapper"
            :style= "{
                height:`${height-actualConfig.headerHeight}px`
            }"
        >
            <div 
                class="base-scroll-list-rows"
                v-for="(rowData,index) in currentRowsData"
                :key="rowData.rowIndex"
                :style = "{
                    height:`${rowHeights[index]}px`,
                    lineHeight:`${rowHeights[index]}px`,
                    backgroundColor:rowData.rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
                    fontSize: `${actualConfig.rowFontsize}px`,
                    color:  actualConfig.rowColor
                }"
                >
                <div 
                    class="base-scroll-list-columns base-scroll-list-text"
                    v-for="(colData, colIndex) in rowData.data"
                    :key = "colData + colIndex"
                    :style = "{
                        width:`${columnWidths[colIndex]}px`,
                        ...rowStyle[colIndex]
                    }"
                    v-html = "colData"
                    :align = "aligns[colIndex]"
                >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {onMounted,ref, watch} from 'vue'
    import { v4 as uuidv4 } from 'uuid'
    import useScreen from '../../hooks/useScreen'
    import cloneDeep from 'lodash/cloneDeep'
    //解决两个对象merge问题
    import assign from 'lodash/assign'

    const defaultConfig = {
        //标题数据，格式['a','b','c']
        header:[],
        //标题样式,格式[{},{},{}]
        headerStyle:[],
        //行样式
        rowStyle:[],
        //行背景色
        rowBg:[],
        //标题背景色
        headerBg:'rgb(90,90,90)',
        //标题的高度
        headerHeight:35,
        //标题是否展示序号
        headerIndex:false,
        //序号列标题内容
        headerIndexContent:'#',
        //序号列标题样式
        headerIndexStyle:{
            width:'50px'
        },
        //序号列数据内容
        headerIndexData:[],
        //序号列内容样式
        rowIndexStyle:{
            width:'50px'
        },
        //数据项，二维数组
        data:[],
        //每页显示数据量
        rowNum:10,
        //居中方式
        aligns:[],
        headerFontsize: 28,
        rowFontsize: 28,
        headerColor: '#fff',
        rowColor: '#000',
        //动画每次移动的位置
        moveNum : 1,
        //动画间隔时间
        duration: 1000
    }

    export default{
        name: 'BaseScrollList',
        props:{
            config:{
                type:Object,
                default:()=>({})
            },
        },
        setup(props){
            const id = `base-scroll-list-${uuidv4()}`
            const {width, height} = useScreen(id)
            const actualConfig = ref({})
            //两个需要扩展的值
            const headerData = ref([])
            const headerStyle = ref([])
            const rowStyle = ref([])
            const columnWidths = ref([])
            const rowBg = ref([])
            //所有的数据
            const rowsData = ref([])
            //当前页面需要展示的数据
            const currentRowsData = ref([])
            //动画指针
            const currentIndex = ref(0)
            const rowHeights = ref([])
            const rowNum = ref(defaultConfig.rowNum)
            //对齐方式
            const aligns = ref([])
            //是否开启动画
            const isAnimationStart = ref(true)

            let avgHeight
            //处理header
            const handleHeader = (config)=>{
                //深拷贝                                    
                const _headerData = cloneDeep(config.headerData)
                const _headerStyle = cloneDeep(config.headerStyle)
                const _rowStyle = cloneDeep(config.rowStyle)
                const _rowsData = cloneDeep(config.data)
                const _algins = cloneDeep(config.aligns)
                if(_headerData.length == 0){
                    return
                }
                //如果显示索引
                if(config.headerIndex){
                    _headerData.unshift(config.headerIndexContent)
                    _headerStyle.unshift(config.headerIndexStyle)
                    _rowStyle.unshift(config.rowIndexStyle)
                    _rowsData.forEach((row,index)=>{
                        //处理序号列的数据
                        if(config.headerIndexData && config.headerIndexData.length > 0 
                        && config.headerIndexData[index]){
                            row.unshift(config.headerIndexData[index])
                        }else{
                            row.unshift(index+1)
                        }
                    })
                    _algins.unshift('center')
                }

                //动态计算header中每一列的宽度
                //已使用宽度
                let usedWidth = 0
                let usedColumnNum = 0
                _headerStyle.forEach(style=>{
                    if(style.width){
                        usedWidth += +style.width.replace('px','')
                        usedColumnNum ++
                    }
                })
                //分配剩余宽度,剩余宽度除以剩余列数
                const avgWidth = (width.value-usedWidth ) / (_headerData.length-usedColumnNum)
                const _columnWidth = new Array(_headerData.length).fill(avgWidth)
                
                _headerStyle.forEach((style,index)=>{
                    if(style.width){
                        const headerWidth = style.width.replace('px','')
                        _columnWidth[index] = headerWidth
                    }
                })
                columnWidths.value = _columnWidth
                headerData.value = _headerData
                headerStyle.value = _headerStyle
                rowStyle.value = _rowStyle

                //改变数据格式
                const {rowNum} = config
                if(_rowsData.length >= rowNum && _rowsData.length< rowNum*2){
                    const newRowData = [..._rowsData,..._rowsData]
                    rowsData.value = newRowData.map((item,index)=>({
                        data:item,
                        rowIndex:index
                    }))
                }else{
                    rowsData.value = _rowsData.map((item,index)=>({
                        data:item,
                        rowIndex:index
                    }))
                }
                aligns.value = _algins
                // console.log(_algins)
            }

            //处理行
            const handleRows = (config)=>{
                //动态计算行数据的高度
                const {headerHeight} = config
                //实际行数
                rowNum.value = config.rowNum
                //数据项总高度
                const unusedHeight = height.value - headerHeight
                //展示的行数超出数据条数，则以数据为主
                if(rowNum.value > rowsData.value.length){
                    rowNum.value = rowsData.value.length
                }
                avgHeight = unusedHeight / rowNum.value
                rowHeights.value = new Array(rowNum.value).fill(avgHeight)

                //获取行背景色
                if(config.rowBg){
                    rowBg.value = config.rowBg
                }
            }

            //实现滑动动画
            const startAnimation = async ()=>{
                if(!isAnimationStart) return
                //拿到config
                const config = actualConfig.value
                const {rowNum, moveNum, duration} = config
                const totalLength = rowsData.value.length
                if (totalLength < rowNum) return
                //拿到动画指针
                const index = currentIndex.value
                const _rowsData = cloneDeep(rowsData.value)
                //将数据重新头尾连接
                const rows = _rowsData.slice(index)
                rows.push(..._rowsData.slice(0,index))
                currentRowsData.value = rows
                //将所有行的高度还原
                rowHeights.value = new Array(totalLength).fill(avgHeight)
                //sleep操作
                const waitTime = 300
                if(!isAnimationStart) return
                await new Promise(resolve => setTimeout(resolve,waitTime))

                //将moveNum的行高度设为0
                rowHeights.value.splice(0,moveNum,new Array(moveNum).fill(0))

                currentIndex.value += moveNum
                currentIndex.value %= totalLength
                // console.log(currentIndex.value)
                //sleep操作
                if(!isAnimationStart) return
                await new Promise(resolve => setTimeout(resolve,duration-waitTime))
                await startAnimation()
            }
            //关闭动画
            const stopAnimation = ()=>{
                isAnimationStart.value = false
            }
            //将更新独立封装
            const update = ()=>{
                stopAnimation()
                //通过lolash的assign函数合并
                const _actualConfig = assign(defaultConfig,props.config)
                //赋值rowsData
                rowsData.value = _actualConfig.data || []
                // console.log(_actualConfig)
                handleHeader(_actualConfig)
                handleRows(_actualConfig)
                actualConfig.value = _actualConfig
                isAnimationStart.value = true
                //展示动画
                startAnimation()
            }

            watch(()=>props.config,()=>{
                update()
            })
            return {
                id,
                headerData,
                headerStyle,
                columnWidths,
                rowsData,
                currentRowsData,
                rowHeights,
                rowStyle,
                rowBg,
                aligns,
                actualConfig,
                height
            }
        }
    }
</script>
<style lang="scss" scoped>
   .base-scroll-list {
        width: 100%;
        height: 100%;
        .base-scroll-list-text {
            /*padding: 0 10px;*/
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            box-sizing: border-box;
        }
        .base-scroll-list-header {
            display:flex;
            align-items: center;

            .header-item {
                width: 150px;
            }
        }
        .base-scroll-list-rows-wrapper {
            overflow: hidden;

            .base-scroll-list-rows {
                display: flex;
                align-items: center;
                transition: all 0.3s linear;
                .base-scroll-list-columns {
                    height: 100%;  
                }
            }
        }
   }
</style>