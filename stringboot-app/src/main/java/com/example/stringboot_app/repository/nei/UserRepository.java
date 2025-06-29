package com.example.stringboot_app.repository.nei;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stringboot_app.entity.nei.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {
    // ユーザーエンティティに対するCRUD操作を提供するリポジトリインターフェース
    // JpaRepositoryを継承することで、基本的なCRUDメソッドが自動的に提供されます

    
    // メールアドレスでユーザーを検索
    User findByEmail(String email);
    
    // 名前で部分一致検索
    List<User> findByNameContaining(String name);

    List<User> findByName(String name);

    List<User> findByEmailContaining(String email);

    // 名前でソート済み全件取得
    List<User> findAllByOrderByIdAsc();
   
}
