import http from "../http-common";

class GoodsDataService {
  /* eslint-disable */
  // 전체조회(검색기능 포함)
  getAll(category, title, page, size) {
    return http.get(
      `/goods?category=${category}&title=${title}&page=${page}&size=${size}`,
      {}
    );
  }

  getCarousel(title, page, size) {
    return http.get(
      `/goods/carousel?title=${title}&page=${page}&size=${size}`,
      {}
    );
  }

  getMain(title, page, size) {
    return http.get(`/goods/main?title=${title}&page=${page}&size=${size}`, {});
  }

  // 번호로 조회 요청 함수
  // get 방식 통신 요청 -> @GetMapping("/api/dept/{dno}"), @PathVariable
  get(goodsId) {
    return http.get(`/goods/detail/${goodsId}`);
  }

  // 가계부 한달
  getaccount(sellerId) {
    return http.get(`/goods/account1/${sellerId}`);
  }

  // 가계부 3달
  getaccount3(sellerId) {
    return http.get(`/goods/account3/${sellerId}`);
  }

  // 가계부 6달
  getaccount6(sellerId) {
    return http.get(`/goods/account6/${sellerId}`);
  }
  // 상품정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/goods"), @RequestBody
  create(data) {
    console.log(data);
    return http.post("/goods", data);
  }

  // 정보 수정(update) 요청 함수
  // put 방식 통신 요청 -> @PutMapping("/api/dept/{no}"), @RequestBody
  update(goodsId, data) {
    return http.put(`/goods/${goodsId}`, data);
  }

  // 정보 삭제(delete) 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{no}")
  //                        , @PathVariable
  delete(goodsId) {
    return http.delete(`/goods/deletion/${goodsId}`);
  }

  // 정보 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
  deleteAll() {
    return http.delete("/goods/all");
  }
}

export default new GoodsDataService();
