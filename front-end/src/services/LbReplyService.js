import http from "../http-common";

class LbReplyService {
  /* eslint-disable */
  // 전체조회(검색기능 포함)
  getAll(lno) {
    return http.get(`/lbreply/${lno}`);
  }

    // 번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/dept/{no}"), @PathVariable
    get(lno) {
      return http.get(`/lb/detail/${lno}`)
  }

  // 상품정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/lb"), @RequestBody
  create(data) {
      console.log(data);
      return http.post("/lbreply", data);
  }

  // 정보 수정(update) 요청 함수
  // put 방식 통신 요청 -> @PutMapping("/api/dept/{no}"), @RequestBody
  update(lno, data) {
      return http.put(`/lb/${lno}`, data);
  }

  // 정보 삭제(delete) 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{no}")
  //                        , @PathVariable  
  delete(lno) {
      return http.delete(`/lb/deletion/${lno}`);
  }

  // 정보 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
  deleteAll() {
      return http.delete("/lb/all")
  }

}

export default new LbReplyService();
