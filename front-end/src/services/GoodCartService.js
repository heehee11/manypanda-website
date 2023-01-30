// FbDataService.js
// 목적 : Fb 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../http-common";

class FbLikeService {
 
  getCart(goodsId, userId) {
    return http.get(`/goodcart/${goodsId}/${userId}`);
  }

  // getAll() {
  //   return http.get(`/fblike/find`);
  // }

  // getFbLikeById(fno)  {
  //   return http.get(`/fblike/${fno}`);
  // }

  // get(fbLikeId) {
  //   return http.get(`/fblike/${fbLikeId}`);
  // }
  delete(cartId) {
    return http.delete(`/goodcart/deletion/${cartId}`);
}

  // 게시글 생성
  create(data) {
    console.log(data);
    return http.post('/goodcart', data);
  }

}

export default new FbLikeService();
