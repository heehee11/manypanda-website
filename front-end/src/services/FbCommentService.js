import http from "../http-common";

class FbCommentService {
  /* eslint-disable */
  // 전체조회(검색기능 포함)
  getAll(fno) {
    return http.get(`/fbcomment/${fno}`);
  }

      // 부서번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/dept/{dno}"), @PathVariable
    get(fno) {
      return http.get(`/fb/detail/${fno}`)
  }

  // 상품정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/goods"), @RequestBody
  create(data) {
      console.log(data);
      return http.post("/fbcomment", data);
  }

  // 부서정보 수정(update) 요청 함수
  // put 방식 통신 요청 -> @PutMapping("/api/dept/{dno}"), @RequestBody
  update(fno, data) {
      return http.put(`/fb/${fno}`, data);
  }

  // 부서정보 삭제(delete) 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{dno}")
  //                        , @PathVariable  
  delete(fno) {
      return http.delete(`/fb/deletion/${fno}`);
  }

  // 부서정보 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
  deleteAll() {
      return http.delete("/fb/all")
  }

}

export default new FbCommentService();
