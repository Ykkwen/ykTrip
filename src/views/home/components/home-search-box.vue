<template>
  <div class="home">
    <div class="banner">
      <img src="@/assets/images/home/banner1.png" alt="" />
    </div>
    <!--选择城市-->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="mycity" @click="myCityClick">
        <span class="text">我的位置</span>
        <img src="@/assets/images/home/icon_location.png" alt="" />
      </div>
    </div>
    <!--选择日期-->
    <div class="data-range section" @click="showCalendar = true">
      <div class="start">
        <span class="tip">入住</span>
        <span class="time"> {{ startDateStr }} </span>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time"> {{ endDateStr }} </span>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" color="#ff9854" type="range" @confirm="onConfirm" />
    <!--价格人数设置-->
    <div class="price-people">
      <div class="price">价格不限</div>
      <div class="people">人数不限</div>
    </div>
    <!--关键字查找-->
    <van-field placeholder="关键字/位置/民宿" />

    <!--热门建议-->
    <div class="hot-message">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}</div>
      </template>
    </div>

    <!--搜索按钮-->
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>


  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import useHomeStore from '@/stores/modules/home'
import useMainStore from '@/stores/modules/main';
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDays } from "@/utils/format_date.js";
import { ref,computed } from "vue";
import { Toast } from 'vant';
import 'vant/es/toast/style';

const router = useRouter();
const cityClick = () => {
  router.push("/city");
};

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

//获取位置
const myCityClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功", res);
      axios
        .get("api/reverse_geocoding/v3/", {
          params: {
            output: "json",
            location: res.coords.latitude + "," + res.coords.longitude,
            coordtype: "wgs84ll",
            ak: "isRdorT6RbCeFYKncS1BSx06E9fxudeD",
          },
        })
        .then((res) => {
          console.log(res.data.result.addressComponent.city);
          Toast.success('获取当前位置成功');
          cityStore.currentCity.cityName = res.data.result.addressComponent.city.slice(0,2)
        });
    },
    (err) => {
      console.log("获取位置失败", err);
      Toast.fail('获取当前位置失败');
    }
  );
};

//从store中获取热门建议数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

//选择日期
const mainStore = useMainStore()
const {startDate,endDate} = storeToRefs(mainStore) 

const startDateStr = computed(()=>formatMonthDay(startDate.value));
const endDateStr = computed(()=>formatMonthDay(endDate.value));
const stayCount = ref(getDiffDays(startDate.value, endDate.value));

const showCalendar = ref(false);
const onConfirm = (value) => {
  const selectStartDate = value[0];
  const selectEndDate = value[1];

  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);

  console.log(startDateStr.value,endDateStr.value);
//隐藏日历
  showCalendar.value = false;

};


//搜索页面跳转
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}

</script>

<style lang="less" scoped>
.banner {
  img {
    height: 130px;
    width: 100%;
  }
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }

  .mycity {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 77px;

    .text {
      position: relative;
      top: 1px;
      font-size: 12px;
    }

    img {
      margin-left: 3px;
      width: 18px;
      height: 18px;
    }
  }
}

.section,
.price-people {
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start,
  .end {
    height: 44px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;

    .time {
      color: #333;
      font-size: 16px;
    }
  }

  .stay {
    flex: 2;
    margin: 0 20px;
    text-align: center;
  }

  .price,
  .people {
    height: 44px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: left;
  }
}

.hot-message {
  display: flex;
  flex-wrap: wrap;

  .item {
    padding: 4px 8px;
    border-radius: 14px;
    margin: 4px;
    font-size: 14px;
  }
}

.search-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    width: 342px;
    height: 34px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--tjc-theme-linear-gradient,
        linear-gradient(90deg, #fa8c1d, #fcaf3f));
  }
}

</style>