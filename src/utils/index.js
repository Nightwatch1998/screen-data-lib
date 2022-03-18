export function debounce(delay,callback){
    let task
    return function(){
        //阻止setTimeOut方法
        //delay是延迟的毫秒数
        clearTimeout(task)
        task = setTimeout(()=>{
            callback().apply(this,arguments)
        },delay)
    }
}