
/* eslint-disable */
import http from "../http-common";

class LbLikeService {
 
  // 좋아요 조회
  getLike(lno, userId) {
    return http.get(`/lblike/${lno}/${userId}`);
  }

    // TODO : count like
    countLike(lno) {
      return http.get(`/lblike/${lno}`);
    }
  
  // 좋아요 등록
  create(data) {
    console.log(data);
    return http.post('/lblike', data);
  }

  delete(lno) {
    return http.delete(`/lblike/deletion/${lno}`);
}

}

export default new LbLikeService();
