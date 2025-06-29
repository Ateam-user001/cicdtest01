package com.example.stringboot_app.controller.nei;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Update the import path to the correct package where DemoResponse is located
import com.example.stringboot_app.repository.nei.DemoResponse;

@RestController
public class DemoController {

    @GetMapping("/demo")
    // public String display() {
    //     return "HelloWorld 出力!";
    // }
    public DemoResponse display() {
        // DemoResponseクラスのインスタンスを作成して返す
        return new DemoResponse("HelloWorld 出力!", "Java");
    }

    @GetMapping("/home")
    public String home() {
        return "Welcome to Spring Boot Demo!";
    }

   @RequestMapping("/sample")
   public String sample() {
       return "Welcome to sample";
   }

}