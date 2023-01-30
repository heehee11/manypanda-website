// TodoDataService.js
// 목적 : Todo 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
// import http from "../services/TodoDataService";
import http from "../http-common";

class TodoDataService {
    // 정보 조회 요청 함수
    getAll(id) {
        // get 방식 통신 요청 -> @GetMapping("/api/todo")
        return http.get(`/todo/all/${id}`); 
    }

    // 번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/todo/{no}"), @PathVariable
    get(tno) {
        return http.get(`/todo/${tno}`)
    }

    // 정보 생성(insert) 요청 함수
    // post 방식 통신 요청 -> @PostMapping("/api/todo"), @RequestBody
    create(data) {
        console.log(data);
        return http.post("/todo", data);
    }

    // 정보 수정(update) 요청 함수
    // put 방식 통신 요청 -> @PutMapping("/api/todo/{no}"), @RequestBody
    update(tno, data) {
        alert("성공적으로 수정되었습니다.");
        return http.put(`/todo/${tno}`, data);
    }

    // 정보 삭제(delete) 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/todo/deletion/{no}")
    //                        , @PathVariable  
    delete(tno) {
        return http.delete(`/todo/deletion/${tno}`);
    }

    // 정보 전체 삭제 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/todo/all")
    deleteAll() {
        return http.delete("/todo/all")
    }


}

export default new TodoDataService();