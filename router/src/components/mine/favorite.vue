<template>
  <div class="favorite">
    <div class="mainPic">
      <img src="static/img/mine/left.png" @click="getBack()">
    </div>
    <div class="mainName">收藏夹</div>
    <div class="main">
      <div class="mainList" v-for="(item,index) in pic">
        <router-link :to="item.route">
          <img :src="item.src">
          <p>{{item.name}}</p>
          <span>{{item.num}}</span>
        </router-link>
      </div>
    </div>
    <div class="inspiration">
      <div class="insName">
        <h2>灵感集</h2>
        <p>创建</p>
      </div>
      <div class="mainList">
        <a href="">
          <img src="static/img/mine/icon-scj-ypsi.png">
          <p>贝贝的文章</p>
          <span>10张</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      pic: [
        {
          name: "贝贝的文章",
          src: "static/img/mine/icon-scj-ypyi.png",
          num: 11,
          route: "/mine/favorite/article"
        },
        {
          name: "贝贝的商品",
          src: "static/img/mine/icon-scj-ypsan.png",
          num: 12,
          route: "/mine/favorite/goods"
        }
      ]
    };
  },
  methods: {
    getBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.favorite {
  width: 100%;
  height: 100%;
}
.favorite .mainPic,
.mainName,
.main,
.inspiration {
  width: 90%;
  margin: 0 auto;
  font-family: "PingFang-SC-Regular";
  font-weight: 400;
}
.favorite .mainPic {
  height: 1.52rem;
  padding-top: 0.55rem;
}
.favorite .mainName {
  font-size: 0.58rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
}
.favorite .main {
  height: 4.2rem;
  margin: 0 auto;
  border-top: 0.01rem solid #cacaca;
  border-bottom: 0.01rem solid #cacaca;
  padding-top: 0.4rem;
}
.favorite .mainList {
  width: 100%;
  height: 1.43rem;
  margin-bottom: 0.5rem;
}
.favorite .mainList > a {
  display: flex;  
  width: 50%;
  height: 100%;
  position: relative;
}
.favorite .mainList > a > img {
  width: 1.43rem;
  height: 1.42rem;
  margin-right: 0.32rem;
}
.favorite .mainList > a > p {
  font-size: 0.32rem;
}
.favorite .mainList > a > span {
  font-size: 0.24rem;
  color: #a1a0a0;
  position: absolute;
  bottom: 0;
  left: 1.75rem;
}
.favorite .inspiration .insName {
  font-weight: bold;
  height: 0.36rem;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
}
.favorite .inspiration .insName h2 {
  font-size: 0.36rem;
  float: left;
}
.favorite .inspiration .insName p {
  font-size: 0.34rem;
  color: #7fd0a3;
  padding-left: 0.4rem;
  float: right;
  background: url("../../../static/img/mine/scjj.png") no-repeat 0 center;
}
</style>