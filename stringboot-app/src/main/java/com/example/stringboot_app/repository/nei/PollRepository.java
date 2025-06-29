package com.example.stringboot_app.repository.nei;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.stringboot_app.entity.nei.Poll;

public interface PollRepository extends JpaRepository<Poll, Long>{
        // Idソートで全件取得
    List<Poll> findAllByOrderByIdAsc();
}
