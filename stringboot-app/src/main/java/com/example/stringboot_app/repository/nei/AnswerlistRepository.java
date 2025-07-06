package com.example.stringboot_app.repository.nei;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.stringboot_app.entity.nei.Answerlist;

public interface AnswerlistRepository extends JpaRepository<Answerlist, Long>{
        // Idソートで全件取得
    List<Answerlist> findAllByOrderByIdAsc();
}
