package com.example.stringboot_app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
               
                registry.addMapping("/api/**")
                         .allowedOrigins("http://13.231.174.209:4200") 
                         .allowedMethods("PUT", "POST", "GET", "DELETE")
                         .allowedHeaders("*")
                         .allowCredentials(true);
            }
        };
    }
}
