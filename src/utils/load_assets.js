export const getAssetsUrl=(image)=>{
    //参数一,相对路径
    return new URL(`../assets/images/${image}`,import.meta.url).href
  }