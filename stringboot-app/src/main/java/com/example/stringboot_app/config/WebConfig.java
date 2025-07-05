package com.example.stringboot_app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class WebConfig {

    @Value("${custom.server.ip}")
    private String serverIp;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {

                registry.addMapping("/api/**")
                         .allowedOriginPatterns(serverIp)    // ローカル用、サーバ用が異なるため、プロパティファイルから取得
                         .allowedMethods("PUT", "POST", "GET", "DELETE")
                         .allowedHeaders("*")
                         .allowCredentials(true);
            }
        };
    }
}
