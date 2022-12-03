import MyRequest from '../request';
export function getHouseInfo(houseId){
    return MyRequest.get({
        url:"detail/infos",
        params:{
            houseId
        }
    })
}