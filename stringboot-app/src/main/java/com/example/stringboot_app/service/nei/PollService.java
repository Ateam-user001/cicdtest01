package com.example.stringboot_app.service.nei;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.stringboot_app.entity.nei.Poll;
import com.example.stringboot_app.repository.nei.PollRepository;
import org.springframework.stereotype.Service;

@Service
public class PollService {

    @Autowired
    private PollRepository pollRepository;
    // Pollリポジトリを使用して、Pollに関するビジネスロジックを実装する
    
    // 全データ取得（ID順）
    public List<Poll> getAllPolls() {
        return pollRepository.findAllByOrderByIdAsc();
    }
    
       // データを保存
    public Poll savePoll(Poll poll) {
        return pollRepository.save(poll);
    }

    // IDでデータ取得
    public Optional<Poll> getPollById(Long id) {

        return pollRepository.findById(id);

    }

}
