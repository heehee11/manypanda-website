// MbCategoryService.js
// 목적 : MbCategory 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../../http-common";

class MbCategoryService {

  // 전체조회(검색기능 포함)
  getAll() {
    return http.get(`/mbCategory/all`);
  }
}

export default new MbCategoryService();