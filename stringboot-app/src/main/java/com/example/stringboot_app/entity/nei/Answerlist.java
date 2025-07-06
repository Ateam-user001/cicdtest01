package com.example.stringboot_app.entity.nei;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "nei_answerlist")
@Data
public class Answerlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   
    private String sex;
    private String age;
    private Integer select_num; // 投票結果
}
