// package com.keycoders.backend.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.lang.NonNull;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// // This allows cross origin requests - like from our frontend on 5173 to
// backend 8080.
// @Configuration
// public class WebConfig implements WebMvcConfigurer {

// @Override
// public void addCorsMappings(@NonNull CorsRegistry registry) {
// registry.addMapping("/**")
// .allowedOrigins("http://localhost:5173")
// .allowedMethods("GET", "POST", "PUT", "DELETE")
// .allowedHeaders("*")
// .allowCredentials(true);
// }
// }
