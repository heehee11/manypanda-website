<template>
  <div class="col-10">
    <div class="sold_back">
      <h4 id="sold_sale_logo">๐ค My cart list ๐ค</h4>

      <div id="sold_fb">
        <table class="table table-borderless" id="cart_table">
          <thead>
            <tr id="cart_tr">
              <th scope="col" id="cart_td">์นดํ๊ณ ๋ฆฌ</th>
              <th scope="col" colspan="3" id="cart_td">์ ๋ชฉ</th>
              <th scope="col" id="cart_td">๋ ์ง</th>
              <th scope="col" id="cart_td">ํ๋งค์ํ</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-for="(data, index) in goods" :key="index" id="sold_tbody">
            <tr id="cart_tr">
              <td id="cart_td">{{ data.category }}</td>
              <td colspan="3" id="cart_td">
                <router-link :to="'/dapanda/detail/' + data.goodsId">
                  {{ data.title }}
                </router-link>
              </td>
              <td id="cart_td">{{ data.insertTime }}</td>
              <td id="cart_td">{{ data.status }}</td>
              <button style="border: none; width: 16px;" @click="deleteCart(goods[index].goodsId)" id="cart_delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
                  viewBox="0 0 16 16">
                  <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </button>
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
import GoodCartService from "@/services/GoodCartService";


export default {
  props: ["idProps"],
  data() {
    return {
      goods: [],
      currentUser: null,
      id: this.idProps,
      deleteid: null
    };
  },
  methods: {
    deleteCart(num) {
      GoodCartService.getCart(num, this.$store.state.auth.user.id)
        .then((response) => {
          this.deleteid = response.data.cartId;
          console.log(response.data.cartId);
          GoodCartService.delete(this.deleteid)
            .then((response) => {
              console.log(response.data);
              alert("์ฐ๋ชฉ๋ก์์ ์ญ์ ๋์์ต๋๋ค.")
              location.href=`/myPage`
            })
            .catch((e) => {
              console.log(e);
            })

        })
        .catch((e) => {
          console.log(e);
        });
      
      this.getWish();
      this.retrieveGoods(); // ํ๋ฉด ์คํ์ ์กฐํ
    },
    getWish() {
      UserDataService.getWishList(this.id) // spring ์์ฒญ
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
    this.getWish();
    this.retrieveGoods(); // ํ๋ฉด ์คํ์ ์กฐํ

    // this.getUser(this.$route.params.username);
  },
};
</script>

<style>
@import url(@/assets/css/style.css);
</style>
