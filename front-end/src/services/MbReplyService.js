import http from "../http-common";

class MbReplyService {
  /* eslint-disable */
  // 전체조회(검색기능 포함)
  getAll(mno) {
    return http.get(`/mbreply/${mno}`);
  }

    // 번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/dept/{dno}"), @PathVariable
    get(mno) {
      return http.get(`/mb/detail/${mno}`)
  }

  // 정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/mb"), @RequestBody
  create(data) {
      console.log(data);
      return http.post("/mbreply", data);
  }

  // 정보 수정(update) 요청 함수
  // put 방식 통신 요청 -> @PutMapping("/api/dept/{dno}"), @RequestBody
  update(mno, data) {
      return http.put(`/mb/${mno}`, data);
  }

  // 정보 삭제(delete) 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{dno}")
  //                        , @PathVariable  
  delete(mno) {
      return http.delete(`/mb/deletion/${mno}`);
  }

  // 정보 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
  deleteAll() {
      return http.delete("/mb/all")
  }

}

export default new MbReplyService();
