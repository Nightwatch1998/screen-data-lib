<template>
    <div id="imooc-container" :ref="refName">
      <template v-if="ready">
        <slot></slot>
      </template>
    </div>
</template>
<script>
  import {ref , getCurrentInstance ,onMounted , onUnmounted ,nextTick} from 'vue'
  import {debounce} from '../../utils'

  export default{
      name:'ImoocContainer',
      props:{
        options:Object
      },
      setup(props){
        //ctx类似于vue2中的this
        const refName = 'imoocContainer'
        //dom预定义宽高
        const width = ref(0)
        const height = ref(0)
        //画布区域
        const originalWidth = ref(0)
        const originalHeight = ref(0)
        const ready = ref(false)
        let context,dom,observer
        //初始化，获取dom元素的宽高
        const initSize = ()=>{
          return new Promise((resolve)=>{
            nextTick(()=>{
              //$符号代表全局
              dom = context.$refs[refName]
              //获取大屏的真实尺寸
              if(props.options && props.options.width && props.options.height){
                width.value = props.options.width
                height.value = props.options.height
              }else{
                width.value = dom.clientWidth
                height.value = dom.clientHeight
              }
              //获取画布的尺寸,这个是不变的
              if(!originalWidth.value || !originalHeight.value){
                originalWidth.value = window.screen.width
                originalHeight.value = window.screen.height
              }
              // console.log("大屏的真实尺寸:",width.value,height.value)
              // console.log("画布尺寸:",originalWidth.value,originalHeight.value)

              resolve()
            })
          })
        }
        //更新dom元素的宽高
        const updateSize = ()=>{
          if(width.value && height.value){
            dom.style.width = `${width.value}px`
            dom.style.height = `${height.value}px`
          }else{
            dom.style.width = `${originalWidth.value}px`
            dom.style.height = `${originalHeight.height}px`
          }
        }
        //设置宽高比
        const updateScale = ()=>{
          //获取真实视口尺寸，这个是会变的
          const currentWidth = document.body.clientWidth
          const currentHeight = document.body.clientHeight
          // console.log("真实视口尺寸:",currentWidth,currentHeight)
          //获取大屏最终的宽高
          const realWidth = width.value || originalWidth.value
          const realHeight = height.value || originalHeight.value
          // console.log("大屏最终的宽高:",realWidth,realHeight)

          const widthScale = currentWidth / realWidth
          const heightScale = currentHeight / realHeight

          //实现了浏览器窗口缩放，dom元素尺寸不变
          dom && (dom.style.transform = `scale(${widthScale},${heightScale})`)
        }

        const onResize = async (e)=>{
          console.log("onresize",e)
          await initSize()
          updateScale()
        }
        
        //创建一个DOM监听器
        const initMutationObserver = () =>{
          //浏览器兼容
          const MutationObserver = window.MutationObserver
          //监听DOM发生变化时调用回调函数
          observer = new MutationObserver(onResize)
          observer.observe(dom,{
            attributes:true,
            attributeFilter:['style'],
            attributeOldValue:true
          })
        }
        //移除DOM监听器
        const removeMutationObserver = () =>{
          if(observer){
            //停止观察变动
            observer.disconnect()
            //获取所有未处理的更改记录
            observer.takeRecords()
            //内存回收
            observer = null
          }
        }

        onMounted( async ()=>{
          ready.value = false
          //获取dom元素，只适用于开发阶段
          context = getCurrentInstance().ctx

          await initSize()

          updateSize()
          updateScale()
          //锁定宽高比
          window.addEventListener('resize',debounce(100,onResize))
          initMutationObserver()
          ready.value = true

        })
        onUnmounted(()=>{
          window.removeEventListener('resize',onResize)
          removeMutationObserver()
        })
        return {
          refName,
          ready
        }
      }
  }
</script>
<style type="scss">
  #imooc-container{
    position:fixed;
    top:0;
    left: 0;
    overflow: hidden;
    transform-origin: left top;
    z-index: 999;
  }
</style>