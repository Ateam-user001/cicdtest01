package com.example.stringboot_app.service.nei;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stringboot_app.entity.nei.User;
import com.example.stringboot_app.repository.nei.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // ユーザーリポジトリを使用して、ユーザーに関するビジネスロジックを実装する
    
    // 全ユーザー取得（名前順）
    public List<User> getAllUsers() {
        return userRepository.findAllByOrderByIdAsc();
    }
    
    // メールアドレスでユーザーを取得
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    // 名前で部分一致検索
    public List<User> searchByName(String name) {
        return userRepository.findByNameContaining(name);
    }
    
    // 名前で完全一致検索
    public List<User> findByName(String name) {
        return userRepository.findByName(name);
    }
    // メールアドレスで部分一致検索
    public List<User> searchByEmail(String email) {
        return userRepository.findByEmailContaining(email);
    }
    // ユーザーを保存
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    // ユーザーを削除
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    // ユーザーをIDで取得
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

}
