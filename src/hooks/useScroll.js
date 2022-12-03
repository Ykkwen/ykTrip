import {onUnmounted,onMounted, onActivated, onDeactivated, ref } from "vue"
import {throttle} from 'underscore';
export default function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)
    //节流操作
    const ScrollerListenerHandler = throttle(() => {
        if(el===window){
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
            clientHeight.value = document.documentElement.clientHeight
        }else{
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
            clientHeight.value = el.clientHeight
        }
        if (scrollTop.value + clientHeight.value >= scrollHeight.value - 1) {
            console.log("到达底部")
            isReachBottom.value = true
        }else{
            isReachBottom.value = false
        }
        // console.log("正在滚动...")
    },100)

    onMounted(() => {
        if(elRef){
            el = elRef.value
        }
        el.addEventListener("scroll", ScrollerListenerHandler)
    })
    onUnmounted(() => {
        el.removeEventListener("scroll",ScrollerListenerHandler)
    })
    //处理keep alive的情况
    onActivated(()=>{
        el.addEventListener("scroll", ScrollerListenerHandler)
    })
    onDeactivated(()=>{
        el.removeEventListener("scroll",ScrollerListenerHandler)
    })

    return {isReachBottom,scrollTop,scrollHeight,clientHeight}
}


