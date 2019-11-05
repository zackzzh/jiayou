<template>
  <div>
    <jy-header></jy-header>
    <div class="applet">
      <jy-banner bannerUrl="/static/images/applet/banner.png"></jy-banner>
      <jy-data></jy-data>
      <jy-title title="小程序优势特" subtitle="无需安装，扫码即用的小程序商城"></jy-title>
      <!-- <jy-ad :data="appletData.adNavs"></jy-ad> -->
      <div class="applet_td">
        <div class="td_item" v-for="(item, index) in appletData.adNavs" :key="index">
          <img :src="item.img" alt class="img">
          <div class="content">
            <div>{{item.title}}</div>
            <div class="small">{{item.subtitle}}</div>
          </div>
        </div>
      </div>
      <jy-title title="微信小程序方案适用行业" subtitle="为消费者提供优质的用户体验"></jy-title>
      <!-- <jy-navs :data="appletData.navs" number="4"></jy-navs> -->
      <div class="jy_navs">
        <div
          class="item"
          v-for="(item, index) in appletData.navs"
          :key="index"
          :style="{ 'width': (100/4) + '%' }"
          @click.stop="toNext(item)"
        >
          <img
            :src="item.img"
            :style="{ 'width':item.width + 'rpx', 'height': item.height + 'rpx' }"
          >
          <div class="small">{{item.label}}</div>
        </div>
      </div>
      <div class="applet_more">
        <button @click="goBottom">获取行业方案</button>
      </div>
      <jy-title title="小程序50+流量入口" subtitle="SMALL PROGRAM 50+ FLOW ENTRY"></jy-title>

      <jy-banner bannerUrl="/static/images/applet/rk.png"></jy-banner>
      <jy-title title="为什么选择我们？" subtitle="WHY CHOOSE US?"></jy-title>
      <div class="applet_xz">
        <div
          class="item"
          v-for="(item, index) in appletData.chooseUs"
          :key="index"
          :style="{'background':item.bg}"
        >{{item.label}}</div>
      </div>
      <jy-title title="经典案例" subtitle="CLASSIC CASE"></jy-title>
      <!-- <jy-cases :data="appletData.casesList" v-if="appletData.casesList.length>0"></jy-cases> -->
      <div class="jy_cases_div">
        <div v-if="casesList && casesList.length > 0">
          <div
            class="jy_case_card_div"
            v-for="(item, index) in casesList"
            :key="index"
            @click="toDetail(item)"
          >
            <div class="jy_cases_card">
              <image class="jy_cases_img" mode="widthFix" :src="item.picUrl"></image>
              <div class="jy_cases_title">{{item.title}}</div>
              <div class="jy_cases_subtitle">{{item.subtitle}}</div>
            </div>
          </div>
        </div>
      </div>
      <jy-form :index="3"></jy-form>
    </div>
    <jy-footer></jy-footer>
  </div>
</template>

<script>
import jyBanner from "@/components/jy_banner.vue";
import jyData from "@/components/jy_data.vue";
import jyTitle from "@/components/jy_title.vue";
import jyNavs from "@/components/jy_navs.vue";
import jyAd from "@/components/jy_ad.vue";
import jyForm from "@/components/jy_form.vue";
import jyCases from "@/components/jy_cases.vue";
import jyHeader from "@/components/jy_header.vue";
import jyFooter from "@/components/jy_footer.vue";
import utils from "@/utils/index";
import appletData from "./applet";
export default {
  data() {
    return {
      appletData,
      casesList:[]
    };
  },
  computed: {},
  created() {
    this.$api.cases({ typeId: 12 }).then(res => {
      if (res.code === 200) {
        this.casesList = res.page.list;
      }
    });
  },
  components: {
    jyBanner,
    jyData,
    jyTitle,
    jyNavs,
    jyAd,
    jyCases,
    jyForm,
    jyHeader,
    jyFooter
  },
  methods: {
    goBottom() {
      utils.toBottom();
      //
    },
    toDetail(val) {
      if (mpvuePlatform === "wx") {
        wx.navigateTo({
          url: "/pages/cases_detail/main?id=" + val.id
        });
      } else if (mpvuePlatform === "swan") {
        swan.navigateTo({
          url: "/pages/cases_detail/main?id=" + val.id
        });
      }
    }
  }
};
</script>

<style lang="less">
.applet {
 padding:105rpx 20rpx;
  // 按钮
  .applet_more {
    width: 100%;
    margin-bottom: 76rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 224rpx;
      height: 64rpx;
      line-height: 64rpx;
      text-align: center;
      background: #99c4e9;
      border: none;
      box-shadow: 0px 6px 13px 0px rgba(42, 75, 198, 0.6);
      border-radius: 32rpx;
      font-size: 22rpx;
      a {
        color: #333333;
      }
    }
  }
  .applet_xz {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      color: rgba(255, 255, 255, 1);
      padding: 0px 34rpx;
      font-size: 22rpx;
      height: 54rpx;
      line-height: 54rpx;
      border-radius: 10rpx;
      box-shadow: 0px 8px 10px 0px rgba(0, 20, 54, 0.24);
      text-align: center;
      margin-bottom: 24rpx;
    }
  }
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
  .jy_navs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      color: #515151;
      text-align: center;
      margin-bottom: 40rpx;
      img {
        margin-bottom: 15rpx;
      }
      .small {
        font-size: 24rpx;
      }
    }
  }
  .jy_cases_div {
    margin: 10rpx 0;
    white-space: nowrap;
    overflow-x: auto;
    .jy_case_card_div {
      width: 42%;
      display: inline-block;
      margin: 18rpx 10rpx;
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
    }
  }
}
</style>