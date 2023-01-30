package com.example.simpledms.repository;

import com.example.simpledms.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.jpaexam.repository
 * fileName : DeptRepository
 * author : ds
 * date : 2022-10-20
 * description : 다이어리 repository
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-20         ds          최초 생성
 */

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {


    // @Query, 다이어리 조회 함수
    @Query(value = "SELECT t.* " +
            "FROM TB_TODO t " +
            "WHERE :id = t.USER_ID " +
            "AND t.delete_Yn = 'N'" ,
            nativeQuery = true)
    List<Todo> findByUserId(@Param("id") Long id);


}









