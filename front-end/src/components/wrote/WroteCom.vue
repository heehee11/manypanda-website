<template>
  <div class="col-10">
    <div class="wrote_back">
      <h4 id="sold_sale_logo">π My post list π</h4>

      <!-- μμ κ²μν -->
      <div class="col-5" id="wrote_fb">
        <p id="wrote_title">μμ κ²μν</p>

        <table class="table table-borderless" id="wrote_table">
          <thead>
            <tr id="wrote_tr">
              <th scope="col">NO</th>
              <th scope="col" colspan="2">μ λͺ©</th>
              <th scope="col">λ μ§</th>
            </tr>
          </thead>

          <tbody v-for="(data, index) in users" :key="index" id="sold_tbody">
            <tr>
              <td>{{ data.fno }}</td>
              <td colspan="2" id="cart_td">
                <router-link :to="'/fb/' + data.fno">
                  {{ data.fbTitle }}
                </router-link>
              </td>
              <td>{{ data.insertTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- μΆμ²κ²μν -->
      <div class="col-5" id="wrote_fb">
        <p id="wrote_title">μΆμ²κ²μν</p>
        <table class="table table-borderless" id="wrote_table">
          <thead>
            <tr id="wrote_tr">
              <th scope="col">NO</th>
              <th scope="col" colspan="2">μ λͺ©</th>
              <th scope="col">λ μ§</th>
            </tr>
          </thead>
          <tbody v-for="(data, index) in bb" :key="index" id="sold_tbody">
            <tr>
              <td>{{ data.bno }}</td>
              <td colspan="2" id="cart_td">
              <router-link :to="'/bb/' + data.bno">                 
              {{ data.bbTitle }}
              </router-link></td>
              <td>{{ data.insertTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- λͺ¨μκ²μν -->
      <div class="col-5" id="wrote_fb">
        <p id="wrote_title">λͺ¨μκ²μν</p>
        <table class="table table-borderless" id="wrote_table">
          <thead>
            <tr id="wrote_tr">
              <th scope="col">NO</th>
              <th scope="col" colspan="2" id="cart_td">μ λͺ©</th>
              <th scope="col">λ μ§</th>
            </tr>
          </thead>
          <tbody v-for="(data, index) in mb" :key="index" id="sold_tbody">
            <tr>
              <td>{{ data.mno }}</td>
              <td colspan="2" id="cart_td">
              <router-link :to="'/mb/' + data.mno">                 
                {{ data.mbTitle }}
              </router-link></td>
              <td>{{ data.insertTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- λΆμ€κ²μν -->
      <div class="col-5" id="wrote_fb">
        <p id="wrote_title">λΆμ€/μ κ³  κ²μν</p>
        <table class="table table-borderless" id="wrote_table">
          <thead>
            <tr id="wrote_tr">
              <th scope="col" colspan="2" id="cart_td">μ λͺ©</th>
              <th scope="col">λ μ§</th>
            </tr>
          </thead>
          <tbody v-for="(data, index) in lb" :key="index" id="sold_tbody">
            <tr>
              <td colspan="2" id="cart_td">
              <router-link :to="'/lb/' + data.lno">                 
              {{ data.lbTitle }}
              </router-link></td>
              <td>{{ data.insertTime }}</td>
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
import FbService from "../../services/FbService";
import BbService from "../../services/BbService";
import MbService from "../../services/MbService";
import LbService from "../../services/LbService";

export default {
  props: ["wroteProps"],
  data() {
    return {
      users: [],
      mb: [],
      bb: [],
      lb: [],
      nick: this.wroteProps,
    };
  },
  methods: {
    getWrite() {
      UserDataService.getWrote(this.nick)
        //  μ±κ³΅/μ€ν¨ λͺ¨λ₯΄κ² μ§λ§
        //  μ±κ³΅νλ©΄ thenμμ μλκ²μ΄ μ€ν
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
          // console.log(this.nick + "μμ μ±κ³΅");
        })
        //  μ€ν¨νλ©΄ catchμμ μλκ²μ΄ μ€ν
        .catch((e) => {
          console.log(e);
        });

      UserDataService.getLbWrote(this.nick) // spring μμ²­
        //  μ±κ³΅/μ€ν¨ λͺ¨λ₯΄κ² μ§λ§
        //  μ±κ³΅νλ©΄ thenμμ μλκ²μ΄ μ€ν
        .then((response3) => {
          this.lb = response3.data;
          console.log(response3.data);
          // console.log(this.nick + "λΆμ€μ±κ³΅");
        })
        //  μ€ν¨νλ©΄ catchμμ μλκ²μ΄ μ€ν
        .catch((e) => {
          console.log(e);
        });

      UserDataService.getBbWrote(this.nick) // spring μμ²­
        //  μ±κ³΅/μ€ν¨ λͺ¨λ₯΄κ² μ§λ§
        //  μ±κ³΅νλ©΄ thenμμ μλκ²μ΄ μ€ν
        .then((response1) => {
          this.bb = response1.data;
          console.log(response1.data);
          // console.log(this.nick + "μΆμ²μ±κ³΅");
        })
        //  μ€ν¨νλ©΄ catchμμ μλκ²μ΄ μ€ν
        .catch((e) => {
          console.log(e);
        });

      UserDataService.getMbWrote(this.nick) // spring μμ²­
        //  μ±κ³΅/μ€ν¨ λͺ¨λ₯΄κ² μ§λ§
        //  μ±κ³΅νλ©΄ thenμμ μλκ²μ΄ μ€ν
        .then((response2) => {
          this.mb = response2.data;
          console.log(response2.data);
          // console.log(this.nick + "λͺ¨μμ±κ³΅");
        })
        //  μ€ν¨νλ©΄ catchμμ μλκ²μ΄ μ€ν
        .catch((e) => {
          console.log(e);
        });
    },

    //  μ‘°ν
    retrieveFb() {
      FbService.getAll(
        // console.log("λ΄κ°μ΄κΈ λ§ν¬"),
        this.fb_ctitle, // select box μ νλ κ°
        this.fb_title, // μ λͺ© κ²μ
        this.page - 1,
        this.pageSize
      )
        // μ±κ³΅νλ©΄ .then() κ²°κ³Όκ° μ μ‘λ¨
        .then((response) => {
          console.log("λ΄κ°μ΄κΈ fb λ§ν¬ μ±κ³΅");
          const { users, totalItems } = response.data; // springboot μ μ μ‘λ λ§΅ μ λ³΄
          this.users = users; // μ€νλ§λΆνΈμμ μ μ‘ν λ°μ΄ν°
          this.count = totalItems; // μ€νλ§λΆνΈμμ μ μ‘ν νμ΄μ§μ λ³΄(μ΄ κ±΄μ)

          // λλ²κΉ μ½μμ μ λ³΄ μΆλ ₯
          console.log(response.data);
        })
        // μ€ν¨νλ©΄ .catch() μ μλ¬κ° μ μ‘λ¨
        .catch((e) => {
          console.log(e);
          console.log("λ΄κ°μ΄κΈ fbλ§ν¬ μ€ν¨");
        });
    },
    retrieveBb() {
      BbService.getAll(
        this.bb_ctitle, // select box μ νλ κ°
        this.bb_title, // μ λͺ© κ²μ
        this.page - 1,
        this.pageSize
      )
        // μ±κ³΅νλ©΄ .then() κ²°κ³Όκ° μ μ‘λ¨
        .then((response) => {
          console.log("λ΄κ°μ΄κΈ bb λ§ν¬ μ±κ³΅");
          const { bb, totalItems } = response.data; // springboot μ μ μ‘λ λ§΅ μ λ³΄
          this.bb = bb; // μ€νλ§λΆνΈμμ μ μ‘ν λ°μ΄ν°
          this.count = totalItems; // μ€νλ§λΆνΈμμ μ μ‘ν νμ΄μ§μ λ³΄(μ΄ κ±΄μ)

          // λλ²κΉ μ½μμ μ λ³΄ μΆλ ₯
          console.log(response.data);
        })
        // μ€ν¨νλ©΄ .catch() μ μλ¬κ° μ μ‘λ¨
        .catch((e) => {
          console.log(e);
          console.log("λ΄κ°μ΄κΈ bbλ§ν¬ μ€ν¨");
        });
    },
    retrieveMb() {
      MbService.getAll(
        // console.log("λ΄κ°μ΄κΈ λ§ν¬"),
        this.mb_ctitle, // select box μ νλ κ°
        this.mb_title, // μ λͺ© κ²μ
        this.page - 1,
        this.pageSize
      )
        // μ±κ³΅νλ©΄ .then() κ²°κ³Όκ° μ μ‘λ¨
        .then((response) => {
          console.log("λ΄κ°μ΄κΈ mbλ§ν¬ μ±κ³΅");
          const { mb, totalItems } = response.data; // springboot μ μ μ‘λ λ§΅ μ λ³΄
          this.mb = mb; // μ€νλ§λΆνΈμμ μ μ‘ν λ°μ΄ν°
          this.count = totalItems; // μ€νλ§λΆνΈμμ μ μ‘ν νμ΄μ§μ λ³΄(μ΄ κ±΄μ)

          // λλ²κΉ μ½μμ μ λ³΄ μΆλ ₯
          console.log(response.data);
        })
        // μ€ν¨νλ©΄ .catch() μ μλ¬κ° μ μ‘λ¨
        .catch((e) => {
          console.log(e);
          console.log("λ΄κ°μ΄κΈ mbλ§ν¬ μ€ν¨");
        });
    },
    retrieveLb() {
      LbService.getAll(
        // console.log("λ΄κ°μ΄κΈ λ§ν¬"),
        this.lb_ctitle, // select box μ νλ κ°
        this.lb_title, // μ λͺ© κ²μ
        this.page - 1,
        this.pageSize
      )
        // μ±κ³΅νλ©΄ .then() κ²°κ³Όκ° μ μ‘λ¨
        .then((response) => {
          console.log("λ΄κ°μ΄κΈ lbλ§ν¬ μ±κ³΅");
          const { lb, totalItems } = response.data; // springboot μ μ μ‘λ λ§΅ μ λ³΄
          this.lb = lb; // μ€νλ§λΆνΈμμ μ μ‘ν λ°μ΄ν°
          this.count = totalItems; // μ€νλ§λΆνΈμμ μ μ‘ν νμ΄μ§μ λ³΄(μ΄ κ±΄μ)

          // λλ²κΉ μ½μμ μ λ³΄ μΆλ ₯
          console.log(response.data);
        })
        // μ€ν¨νλ©΄ .catch() μ μλ¬κ° μ μ‘λ¨
        .catch((e) => {
          console.log(e);
          console.log("λ΄κ°μ΄κΈ lbλ§ν¬ μ€ν¨");
        });
    },
  },
  mounted() {
    this.getWrite();
    // this.retrieveFb();
    // this.retrieveMb();
    // this.retrieveBb();
    // this.retrieveLb();

    // console.log(this.nick + "λ΄κ°μ΄κΈμ‘°ν");
  },
};
</script>

<style>
@import url(@/assets/css/style.css);
</style>
