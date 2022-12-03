<template>
    <div class="info">
        <div class="name">
            {{topInfo.houseName}}
        </div>
        <div class="tags">
            <template v-for="(item,index) in topInfo.houseTags" :key="index">
                <span class="item" v-if="item.tagText"
                    :style="{color:item.tagText.color,backgroundColor:item.tagText.background.color}">
                    {{item.tagText.text}}
                </span>
            </template>
        </div>
        <div class="comment">
            <div class="left">
                <span class="score">{{topInfo.commentBrief.overall}}</span>
                <span class="scoretitle">{{topInfo.commentBrief.scoreTitle}}</span>
                <span class="brief">{{topInfo.commentBrief.commentBrief}}</span>
            </div>
            <div class="right">
                <div class="count">{{topInfo.commentBrief.totalCount}}条评论 ></div>
            </div>
        </div>

        <div class="location">
            <div class="left">
                {{topInfo.nearByPosition.address}}
            </div>
            <div class="right">
                地图·周边
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    topInfo:{
        type:Object,
        default:()=>({})
    }
})

</script>
<style lang="less" scoped>
    .info{
        padding: 5px 15px;
        .name{
            font-size: 25px;
            font-weight: 700;
        }
        .tags{
            margin: 10px 0;
            display: flex;
            justify-content: start;
            flex-flow: row wrap;
            .item{
                padding: 2px;
                border-radius: 2px;
                margin-right: 5px;
                margin-bottom: 5px;
            }
        }
        .comment{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .score{
                margin-right: 5px;
                font-size: 22px;
                font-weight: 700;
            }
            .scoretitle{
                margin-right: 5px;
                font-size: 18px;
                font-weight: 700;
            }
            .count{
                color: #ff9645;
            }
        }
        .location{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                font-weight: 700;
            }
            .right{
                font-weight: 700;
                color: #ff9645;
            }
        }
    }
</style>