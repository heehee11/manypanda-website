// BbCategoryService.js
// 목적 : BbCategory 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../../http-common";

class BbCategoryService {

  // 전체조회(검색기능 포함)
  getAll() {
    return http.get(`/bbCategory/all`);
  }
}

export default new BbCategoryService();