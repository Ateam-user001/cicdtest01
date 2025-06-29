package com.example.stringboot_app.repository.nei;

public class DemoResponse {
    private String message;
    private String language;

    // コンストラクタ
    public  DemoResponse(String message, String language) {
        this.message = message;
        this.language = language;
    }
    
    // getterとsetter（Lombokを使えば省略可）
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    
    }
}

