import myRequest from '../request'
export function getHotSuggests(){
    return myRequest.get({url:'home/hotSuggests'})
}
export function getCategories(){
    return myRequest.get({url:'home/categories'})
}
export function getHouselist(){
    return myRequest.get({url:'home/houselist'})
}