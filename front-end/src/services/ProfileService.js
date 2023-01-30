// FileDbDataService.js
import http from "../http-common";

class ProfileService {
    /* eslint-disable */

    // 함수명   : upload() 함수 ( DB 저장 함수 )
    // 매개변수 title : 제목
    //          content : 내용
    //          fileDb : 업로드 대상 이미지
    upload(userId, fileDb) {
        // json 객체 사용하지 않음 (x)
        // form 태그로 전송하는 방식을 이용함
        // html <form></form> == js FormData 객체로 사용가능
        //                       .append("속성명", 값) 함수 : 데이터를 저장
        // axios 함수 : .post()
        // 헤더 : "Content-Type" : "multipart/form-data" 
        let formData = new FormData(); // 폼(form) 객체 생성

        formData.append("userId", userId);
        formData.append("profile", fileDb);

        return http.post("/profile/upload", formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })
    }

    update(pid, userId, fileDb) {
        // json 객체 사용하지 않음 (x)
        // form 태그로 전송하는 방식을 이용함
        // html <form></form> == js FormData 객체로 사용가능
        //                       .append("속성명", 값) 함수 : 데이터를 저장
        // axios 함수 : .post()
        // 헤더 : "Content-Type" : "multipart/form-data" 
        let formData = new FormData(); // 폼(form) 객체 생성

        formData.append("pid", pid);
        formData.append("userId", userId);
        formData.append("fileDb", fileDb);

        return http.post(`/profile/update/${pid}`, formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })
    }


    getFiles() {
        return http.get(`/profile`)
    }
    
    // 이미지 삭제 요청 함수
    delete(pid) {
        return http.delete(`/profile/deletion/${pid}`);
    }

}

export default new ProfileService();