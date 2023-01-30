// DiaryDataService.js
// 목적 : Diary 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
// import http from "../services/DiaryDataService";
import http from "../http-common";

class DiaryDataService {
    // 모든 부서정보 조회 요청 함수
    getAll(id) {
        // get 방식 통신 요청 -> @GetMapping("/api/diary")
        return http.get(`/diary/all/${id}`); 
    }

    // 부서번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/diary/{no}"), @PathVariable
    get(dno) {
        return http.get(`/diary/${dno}`)
    }

    // 부서정보 생성(insert) 요청 함수
    // post 방식 통신 요청 -> @PostMapping("/api/diary"), @RequestBody
    create(data) {
        console.log(data);
        return http.post("/diary", data);
    }

    // 부서정보 수정(update) 요청 함수
    // put 방식 통신 요청 -> @PutMapping("/api/diary/{no}"), @RequestBody
    update(dno, data) {
        alert("성공적으로 수정되었습니다.");
        return http.put(`/diary/${dno}`, data);
    }

    // 부서정보 삭제(delete) 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/diary/deletion/{no}")
    //                        , @PathVariable  
    delete(dno) {
        alert("성공적으로 삭제되었습니다.");
        return http.delete(`/diary/deletion/${dno}`);
    }

    // 부서정보 전체 삭제 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/diary/all")
    deleteAll() {
        return http.delete("/diary/all")
    }


}

export default new DiaryDataService();