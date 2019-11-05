<template>
  <div>
    <jy-header></jy-header>
    <div id="casesDetail" class="cases_detail">
      <div class="detail_content" v-if="item && item.id">
        <div id="title" class="detail_title">{{item.title}}</div>
        <div class="detail_mid">
          <div style="width:50%" class="detail_mid_left">
            <div style="width:25%">
              <img :src="item.picUrl" id="picUrl">
            </div>
            <div style="width:75%">
              <div class="subtitle" id="subtitle">{{item.subtitle}}</div>
            </div>
          </div>
          <div style="width:50%">
            <div class="time" id="createtime">{{item.createtime}}</div>
          </div>
        </div>
        <div class="detail_remark" id="remark">{{item.remark}}</div>
        <div class="content" id="insturctions" v-html="item.insturctions"></div>
      </div>
      <jy-form :index="3"></jy-form>
    </div>
    <jy-footer></jy-footer>
  </div>
</template>

<script>
import jyForm from "@/components/jy_form.vue";
import jyHeader from "@/components/jy_header.vue";
import jyFooter from "@/components/jy_footer.vue";
export default {
  data() {
    return {
      item: {}
    };
  },
  components: {
    jyForm,
    jyHeader,
    jyFooter
  },
  onLoad(options) {
    this.$api.getCasesInfo({ id: options.id }).then(res => {
      if (res.code === 200) {
        this.item = res.tCase;
      }
    });
  }
};
</script>

<style lang="less">
.cases_detail {
  padding: 105rpx 20rpx;
  position: relative;
  z-index: 2;
  .detail_content {
    .detail_title {
      color: #333333;
      font-size: 28rpx;
      margin-bottom: 30rpx;
      text-align: center;
    }
    .detail_mid {
      width: 100%;
      font-size: 0.293333rem;
      color: rgb(67, 67, 67);
      margin-bottom: 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 22rpx;
      .detail_mid_left {
        display: flex;
        align-items: center;
      }
      img {
        width: 100%;
        border-radius: 50px;
        width: 68rpx;
        height: 68rpx;
      }
      .time {
        text-align: right;
      }
    }
    .detail_remark {
      font-size: 22rpx;
      color: rgb(67, 67, 67);
      line-height: 40rpx;
      margin-bottom: 32rpx;
    }
    .content {
      img {
        width: 100%;
      }
    }
  }
}
</style>