<template>
  <div>
    <div class="community">
      <section class="secondSection ">
        <div class="container " data-aos="fade-left" data-aos-delay="200">
          <div class="row">



            <table class="table" data-v-224097a6="" style="width: 45%; margin-left: 30px;">
              <thead data-v-224097a6="">
              <tr data-v-224097a6="" style="font-size: 22px;">
                <th scope="col" data-v-224097a6="">
                  <a href="/community-free-Board"><img src="../../assets/image/board/fb.jpg" alt="">
                  </a>
                </th>
              </tr>
            </thead>

            <tbody class="table-group-divider" data-v-224097a6="" style="text-align: center;">
              <tr v-for="(data, index) in fbBoardDesc" :key="index" data-v-224097a6="" style="font-size: 18px; background-color: rgb(255, 255, 255);">
                  <td data-v-224097a6="">
                    <a :href="`/fb/${data.fno}`" style="text-decoration: none;" ><font color="black" size="2px" >{{ data.fbTitle }}</font></a>
                  </td>
              </tr>
              </tbody>
            </table>

            <table class="table" data-v-224097a6="" style="width: 45%; margin-left: 30px;">
              <thead data-v-224097a6="">
              <tr data-v-224097a6="" style="font-size: 22px;">
                <th scope="col" data-v-224097a6="">
                  <a href="/community-best-board"><img src="../../assets/image/board/bb.jpg" alt="">
                  </a>
                </th>
              </tr>
            </thead>

            <tbody class="table-group-divider" data-v-224097a6="" style="text-align: center;">
              <tr v-for="(data, index) in bbBoardDesc" :key="index" data-v-224097a6="" style="font-size: 18px; background-color: rgb(255, 255, 255);">
                  <td data-v-224097a6="">
                    <a :href="`/bb/${data.bno}`" style="text-decoration: none;" ><font color="black" size="2px" >{{ data.bbTitle }}</font></a>
                  </td>
              </tr>
              </tbody>
            </table>

            <table class="table" data-v-224097a6="" style="width: 45%; margin-left: 30px;">
              <thead data-v-224097a6="">
              <tr data-v-224097a6="" style="font-size: 22px;">
                <th scope="col" data-v-224097a6="">
                  <a href="/community-moim-board" size="2px"><img src="../../assets/image/board/mb.jpg" alt="">
                  </a>
                </th>
              </tr>
            </thead>

            <tbody class="table-group-divider" data-v-224097a6="" style="text-align: center;">
              <tr v-for="(data, index) in mbBoardDesc" :key="index" data-v-224097a6="" style="font-size: 18px; background-color: rgb(255, 255, 255);">
                  <td data-v-224097a6="">
                    <a :href="`/mb/${data.mno}`" style="text-decoration: none;" ><font color="black" size="2px" >{{ data.mbTitle }}</font></a>
                  </td>
              </tr>
              </tbody>
            </table>

            <table class="table" data-v-224097a6="" style="width: 45%; margin-left: 30px;">
              <thead data-v-224097a6="">
              <tr data-v-224097a6="" style="font-size: 22px;">
                <th scope="col" data-v-224097a6="">
                  <a href="/community-lost-board"><img src="../../assets/image/board/lb.jpg" alt="">
                  </a>
                </th>
              </tr>
            </thead>

            <tbody class="table-group-divider" data-v-224097a6="" style="text-align: center;">
              <tr v-for="(data, index) in lbBoardDesc" :key="index" data-v-224097a6="" style="font-size: 18px; background-color: rgb(255, 255, 255);">
                  <td data-v-224097a6="">
                    <a :href="`/lb/${data.lno}`" style="text-decoration: none;" ><font color="black" size="2px" >{{ data.lbTitle }}</font></a>
                  </td>
              </tr>
              </tbody>
            </table>


            
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import FbService from "../../services/FbService";
import BbService from "../../services/BbService";
import MbService from "../../services/MbService";
import LbService from "../../services/LbService";

export default {
  data() {
    return {
     fbBoardDesc:[],
     bbBoardDesc:[],
     mbBoardDesc:[],
     lbBoardDesc:[],
     fbTitle: "",
     bbTitle: "",
     mbTitle: "",
     lbTitle: "",
   };
  },
  methods: {

    // ??????????????? ????????? ??????
    retrieveFbBoardDesc() {
      FbService.getFbDesc()
         // ???????????? .then() ????????? ?????????
        .then((response2) => {
          this.fbBoardDesc = response2.data;
          // ????????? ????????? ?????? ??????
          console.log(response2.data);
        })
        // ???????????? .catch() ??? ????????? ?????????
        .catch((e) => {
          console.log(e);
        });
      },

    // ??????????????? ????????? ??????
    retrieveBbBoardDesc() {
      BbService.getBbDesc()
         // ???????????? .then() ????????? ?????????
        .then((response2) => {
          this.bbBoardDesc = response2.data;
          // ????????? ????????? ?????? ??????
          console.log(response2.data);
        })
        // ???????????? .catch() ??? ????????? ?????????
        .catch((e) => {
          console.log(e);
        });
      },

    // ??????????????? ????????? ??????
    retrieveMbBoardDesc() {
      MbService.getMbDesc()
         // ???????????? .then() ????????? ?????????
        .then((response2) => {
          this.mbBoardDesc = response2.data;
          // ????????? ????????? ?????? ??????
          console.log(response2.data);
        })
        // ???????????? .catch() ??? ????????? ?????????
        .catch((e) => {
          console.log(e);
        });
      },

    // ??????????????? ????????? ??????
    retrieveLbBoardDesc() {
      LbService.getLbDesc()
         // ???????????? .then() ????????? ?????????
        .then((response2) => {
          this.lbBoardDesc = response2.data;
          // ????????? ????????? ?????? ??????
          console.log(response2.data);
        })
        // ???????????? .catch() ??? ????????? ?????????
        .catch((e) => {
          console.log(e);
        });
      },
  },
  
  mounted() {
    this.retrieveFbBoardDesc();
    this.retrieveBbBoardDesc();
    this.retrieveMbBoardDesc();
    this.retrieveLbBoardDesc();
  }
}
</script>

<style>
.community {
  margin-top: 350px;
}
.table {
  margin-top: 40px;
  margin-bottom: 80px;
}

/* .board{
  background-color: #dbdbdb;
  max-width: 620px;
  height: 750px;
  overflow: hidden;
  margin: 20px;
  text-align: center;
}

table{
  height: 750px;
  text-align: center;
  margin: auto;
}
thead{
  height: 150px;
  text-align: center;
}

tbody{
  height: 100px;
  text-align: center;
} */

</style>