import http from "../http-common";

class BbReplyService {
  /* eslint-disable */
  // 전체조회(검색기능 포함)
  getAll(bno) {
    return http.get(`/bbreply/${bno}`);
  }

      // 부서번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/dept/{dno}"), @PathVariable
    get(bno) {
      return http.get(`/bb/detail/${bno}`)
  }

  // 상품정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/bb"), @RequestBody
  create(data) {
      console.log(data);
      return http.post("/bbreply", data);
  }

  // 부서정보 수정(update) 요청 함수
  // put 방식 통신 요청 -> @PutMapping("/api/dept/{dno}"), @RequestBody
  update(bno, data) {
      return http.put(`/bb/${bno}`, data);
  }

  // 부서정보 삭제(delete) 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{dno}")
  //                        , @PathVariable  
  delete(bno) {
      return http.delete(`/bb/deletion/${bno}`);
  }

  // 부서정보 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
  deleteAll() {
      return http.delete("/bb/all")
  }

}

export default new BbReplyService();
