package com.example.stringboot_app.service.nei;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.stringboot_app.entity.nei.Answerlist;
import com.example.stringboot_app.repository.nei.AnswerlistRepository;
import org.springframework.stereotype.Service;

@Service
public class AnwserlistService {

    @Autowired
    private AnswerlistRepository answerlistRepository;
    // Pollリポジトリを使用して、Pollに関するビジネスロジックを実装する
    
    // 全データ取得（ID順）
    public List<Answerlist> getAllAnswerlist() {
        return answerlistRepository.findAllByOrderByIdAsc();
    }
    
    // データを保存
    public Answerlist saveAnwserlist(Answerlist answerlist) {

        return answerlistRepository.save(answerlist);
    }

    // IDでデータ取得
    public Optional<Answerlist> getAnswerlistById(Long id) {
        return answerlistRepository.findById(id);
    }

}
