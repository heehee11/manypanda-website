// FbDataService.js
// 목적 : Fb 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
/* eslint-disable */
import http from "../http-common";

class FbLikeService {
 
  // 좋아요 조회
  getLike(fno, userId) {
    return http.get(`/fblike/${fno}/${userId}`);
  }
  // TODO : count like
  countLike(fno) {
    return http.get(`/fblike/${fno}`);
  }


  // 좋아요 등록
  create(data) {
    console.log(data);
    return http.post('/fblike', data);
  }

  delete(fbLikeId) {
    return http.delete(`/fblike/deletion/${fbLikeId}`);
}

}

export default new FbLikeService();
