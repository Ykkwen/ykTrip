import {onUnmounted,onMounted, onActivated, onDeactivated, ref } from "vue"

export default function useScroll() {
    const isReachBottom = ref(false)
    const ScrollerListenerHandler = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            console.log("到达底部")
            isReachBottom.value = true
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", ScrollerListenerHandler)
    })
    onUnmounted(() => {
        window.removeEventListener("scroll",ScrollerListenerHandler)
    })
    //处理keep alive的情况
    onActivated(()=>{
        window.addEventListener("scroll", ScrollerListenerHandler)
    })
    onDeactivated(()=>{
        window.removeEventListener("scroll",ScrollerListenerHandler)
    })

    return {isReachBottom}
}


