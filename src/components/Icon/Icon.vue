<template>
    <div class="icon-wrapper" :style="{...style}">
      <svg class="icon">
        <use :href="iconName"></use>
      </svg>
    </div>
</template>
<script>
    export default{
        name:'Icon',
        props:{
            name:String,
            prefix: {
                type: String,
                default: 'icon'
            },
            style:Object
        },
        setup(ctx){
            const iconName = `#${ctx.prefix}${ctx.name}`
            console.log(iconName)
            return iconName
        }
    }
</script>
<style type="text/css">
    .icon-wrapper {
      display: inline-block;
    }
    .icon {
      width: 100%;
      height: 100%;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
</style>