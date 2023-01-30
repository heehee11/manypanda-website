// FbDataService.js
// 목적 : Fb 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../../http-common";

class FbCategoryService {

  // 전체조회(검색기능 포함)
  getAll() {
    return http.get(`/fbCategory/all`);
  }

  getAllPage(searchKeyword, page, size) {
    console.log(searchKeyword)
    console.log(page)
    console.log(size)
    return http.get(`/fbCategory?searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
  }

  create(data) {
    return http.post("/fbCategory", data)
  }
  delete(fbCid) {
    return http.delete(`/fbCategory/${fbCid}`);
  }
}

export default new FbCategoryService();