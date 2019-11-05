<template>
  <div class="jy_cases_card">
    <image class="jy_cases_img" mode="widthFix" :src="data.picUrl"></image>
    <div class="jy_cases_title">{{data.title}}</div>
    <div class="jy_cases_subtitle">{{data.subtitle}}</div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped lang="less">
.jy_cases_card {
  width: 100%;
  border-radius: 0 0 10rpx 10rpx;
  background: #303030;
  box-shadow: 0 4rpx 20rpx 0 rgba(51, 51, 51, 0.43);
  border-radius: 12rpx;
  text-align: center;

  .jy_cases_img {
    width: 100%;
    border-radius: 12rpx 12rpx 0 0;
  }

  .jy_cases_title {
    overflow: hidden;
    padding: 14rpx 0 8rpx 0;
    color: #f6f6f6;
    font-size: 24rpx;
    font-weight: bold;
  }

  .jy_cases_subtitle {
    padding: 0 0 10rpx 0;
    color: #8a8a8a;
    font-size: 20rpx;
  }
}
</style>
