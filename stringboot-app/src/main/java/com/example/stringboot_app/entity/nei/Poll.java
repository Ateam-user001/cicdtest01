package com.example.stringboot_app.entity.nei;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "nei_polls")
@Data
public class Poll {
    @Id
    private Long id;
    private String question;
    private Integer thcount;
}

