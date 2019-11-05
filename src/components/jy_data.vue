<template>
  <div>
    <div class="applet_data">
      <div class="data_item">
        <div>
          <span>6</span>年
        </div>
        <div class="samll">专注互联网服务</div>
      </div>
      <div class="data_item">
        <div>
          <span>12</span>+
        </div>
        <div class="samll">主营产品</div>
      </div>
      <div class="data_item">
        <div>
          <span>3000</span>+
        </div>
        <div class="samll">客户长期服务</div>
      </div>
      <div class="data_item none">
        <div>
          <span>100</span>%
        </div>
        <div class="samll">项目完美交付率</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
// 数据
.applet_data {
  margin-top: 32rpx;
  width: 100%;
  height: 85rpx;
  padding:20rpx 0;
  border-radius: 10rpx;
  background: -webkit-linear-gradient(left, #54b1ed, #a1c4fd);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #54b1ed, #a1c4fd);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #54b1ed, #a1c4fd);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #54b1ed, #a1c4fd);
  box-shadow: 0px 8px 10px 0px rgba(93, 173, 218, 0.58);
  display: flex;
  align-items: center;
  width: 100%;
  /* 标准的语法 */
  /* 标准的语法 */
  .data_item {
    text-align: center;
    border-right: 1px solid #3560c2;
    font-size: 20rpx;
    height: 100%;
    width: 25%;
    span {
      margin-top: 10rpx;
      display: inline-block;
      font-size: 28rpx;
      font-weight: bold;
    }

    .small {
      font-weight: bold;
      font-size: 16rpx;
    }
  }

  .none {
    border-right: none;
  }
}
</style>