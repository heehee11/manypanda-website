import http from "../http-common";

class GoodReplyService {
  /* eslint-disable */
  // 전체조회(검색기능 포함)
  getAll(goodsId, commetnId) {
    return http.get(`/goodreply/${goodsId}`);
  }

    // 번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/dept/{no}"), @PathVariable
    get(goodsId) {
      return http.get(`/goods/detail/${goodsId}`)
  }

  // 상품정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/goods"), @RequestBody
  create(data) {
      console.log(data);
      return http.post("/goodreply", data);
  }

  // 정보 수정(update) 요청 함수
  // put 방식 통신 요청 -> @PutMapping("/api/dept/{no}"), @RequestBody
  update(goodsId, data) {
      return http.put(`/goods/${goodsId}`, data);
  }

  // 정보 삭제(delete) 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{no}")
  //                        , @PathVariable  
  delete(replyId) {
      return http.delete(`/goodreply/deletion/${replyId}`);
  }

  // 정보 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
  deleteAll() {
      return http.delete("/goods/all")
  }

}

export default new GoodReplyService();
