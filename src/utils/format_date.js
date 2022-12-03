import dayjs from 'dayjs'
export function formatMonthDay(date,formaStr="MM月DD日"){
    return dayjs(date).format(formaStr)
}

export function getDiffDays(start,end){
    return dayjs(end).diff(start,"day")
}