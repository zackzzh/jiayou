<template>
  <div class="applet_td">
    <div class="td_item" v-for="(item, index) in data" :key="index">
      <img :src="item.img" alt class="img">
      <div class="content">
        <div>{{item.title}}</div>
        <div class="small">{{item.subtitle}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>

<style lang="less">
//优点
.applet_td {
  .td_item {
    position: relative;
    margin-bottom: 30rpx;
    img {
      width: 100%;
      position: relative;
      z-index: 1;
      height: 174rpx;
    }
  }
  .content {
    color: #002787;
    position: absolute;
    font-size: 38rpx;
    z-index: 2;
    left: 30%;
    width: 70%;
    top: 50%;
    transform: translateY(-50%);

    .small {
      margin-top: 20rpx;
      font-size: 24rpx;
      padding-right: 10rpx;
    }
  }
}
</style>