// UserDataService.js
/* eslint-disable */
// 목적 : 유저 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../http-common";
import authHeader from "./auth-header";

class UserDataService {
  // 모든 유저정보 조회 요청 함수
  getAll(userId, page, size) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user?userId=${userId}&page=${page}&size=${size}`);
  }
  // ----- 내가 쓴글 조회 요청 함수
  // 자유게시판
  getWrote(nick) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/wrote/${nick}`);
  }
  // 모임게시판
  getMbWrote(nick) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/wrote/mb/${nick}`);
  }
  // 추천게시판
  getBbWrote(nick) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/wrote/bb/${nick}`);
  }
  // 분실게시판
  getLbWrote(nick) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/wrote/lb/${nick}`);
  }

  // TODO : 1/8 오후 찜목록
  getWishList(id) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/wishlist/${id}`);
  }

  // TODO : 1/8 오후 좋아요 fb
  getGoodFbList(id) {
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/goodfb/${id}`);
  }

  // TODO : 1/8 오후 좋아요 mb
  getGoodMbList(username) {
    console.log("좋아요get성공");
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/goodmb/${username}`);
  }

  // TODO : 1/8 오후 좋아요 bb
  getGoodBbList(username) {
    console.log("BB좋아요get성공");
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/goodbb/${username}`);
  }

  // TODO : 1/8 오후 좋아요 lb
  getGoodLbList(username) {
    console.log("분실 좋아요get성공");
    // get 방식 통신 요청 -> @GetMapping("/api/")
    return http.get(`/user/goodlb/${username}`);
  }


  // TODO:userNum->id로 수정
  get(id) {
    return http.get(`/user/${id}`);
  }

  // 정보 생성(insert) 요청 함수
  // post 방식 통신 요청 -> @PostMapping("/api/"), @RequestBody
  create(data) {
    return http.post("/user", data);
  }



  update(id, changePwd, user) {
    console.log("a");
    console.log(user);
    let userData = {
      username: user.username,
      email: user.email,
      password: user.password,
      address: user.address,
      nick: user.nick,
      role: [user.roles[0].name],
      changePwd: changePwd,
    };

    console.log(userData);
    console.log(changePwd);
    return http.put(`/user/${id}`, userData, { headers: authHeader() });
  }



  delete(id) {
    return http.delete(`/user/deletion/${id}`, { headers: authHeader() });
  }

  // 전체 삭제 요청 함수
  // delete 방식 통신 요청 -> @DeleteMapping("/api//all")
  deleteAll() {
    return http.delete("/user/all");
  }

  // 검색 요청 함수
  // 쿼리스트링 방식 url : ?변수명=값&변수명2=값2....
  // get 방식 통신 요청 -> @GetMapping("/api/") , @RequestParam
  findByUsername(username) {
    return http.get(`/user?username=${username}`);
  }

  // 판매내역
  findGoodsByUsername(nick) {
    return http.get(`user/sold/${nick}`);
  }
}

export default new UserDataService();
