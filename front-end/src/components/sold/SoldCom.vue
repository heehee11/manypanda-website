<template>
  <div class="col-10">
    <div class="sold_back">
      <h4 id="sold_sale_logo">๐ My sales list ๐</h4>
      <div id="sold_fb">
        <table class="table table-borderless" id="wrote_table">
          <thead>
            <tr id="wrote_tr">
              <th scope="col">์นดํ๊ณ ๋ฆฌ</th>
              <th scope="col" colspan="2">์ ๋ชฉ</th>
              <th scope="col">๋ ์ง</th>
              <th scope="col">ํ๋งค์ํ</th>
            </tr>
          </thead>
          <tbody v-for="(data, index) in goods" :key="index" id="sold_tbody">
            <tr>
              <td>{{ data.category }}</td>
              <td colspan="2" id="cart_td">
              <router-link :to="'/dapanda/detail/' + data.goodsId"> {{ data.title }}
              </router-link></td>
              <td>{{ data.insertTime }}</td>
              <td>{{ data.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import UserDataService from "../../services/UserDataService";
import GoodsDataService from '@/services/GoodsDataService';

export default {
  props: ["soldProps"],
  data() {
    return {
      goods: [],
      currentUser: null,
      nick: this.soldProps,
    };
  },
  methods: {
    getsold() {
      UserDataService.findGoodsByUsername(this.nick) // spring ์์ฒญ
        //  ์ฑ๊ณต/์คํจ ๋ชจ๋ฅด๊ฒ ์ง๋ง/l
        //  ์ฑ๊ณตํ๋ฉด then์์ ์๋๊ฒ์ด ์คํ
        .then((response) => {
          this.goods = response.data;
          console.log(response.data);
        })
        //  ์คํจํ๋ฉด catch์์ ์๋๊ฒ์ด ์คํ
        .catch((e) => {
          console.log(e);
        });
    },

    // ์กฐํ
        retrieveGoods() {
      GoodsDataService.getAll(
        this.category,
        this.title, 
        this.page - 1, 
        this.pageSize)
        .then((response) => {
          const { goods, totalItems } = response.data; // springboot ์ ์ ์ก๋ ๋งต ์ ๋ณด
          this.goods = goods; // ์คํ๋ง๋ถํธ์์ ์ ์กํ ๋ฐ์ดํฐ
          this.count = totalItems; // ์คํ๋ง๋ถํธ์์ ์ ์กํ ํ์ด์ง์ ๋ณด(์ด ๊ฑด์)
          // ๋๋ฒ๊น ์ฝ์์ ์ ๋ณด ์ถ๋ ฅ
          console.log(response.data);
        })
        // ์คํจํ๋ฉด .catch() ์ ์๋ฌ๊ฐ ์ ์ก๋จ
        .catch((e) => {
          console.log(e);
        });
    },

  },

  mounted() {
    this.getsold();
    this.retrieveGoods();
    // this.getUser(this.$route.params.username);
  },
};
</script>

<style>
@import url(@/assets/css/style.css);
</style>
