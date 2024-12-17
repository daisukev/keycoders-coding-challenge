package com.keycoders.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

/**
 * Configures our application with Spring Security to restrict access to our API
 * endpoints.
 */
@Configuration
public class SecurityConfig {

        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http, CorsFilter corsFilter) throws Exception {
                // TODO: Integrate the JWT check here. Figure out the scoped as well.
                return http
                                .addFilterBefore(corsFilter, org.springframework.web.filter.CorsFilter.class)
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests((authorize) -> authorize
                                                .anyRequest().permitAll())
                                // .requestMatchers("/api/login").permitAll()
                                // .requestMatchers("/api/token").permitAll()
                                // .requestMatchers("/api/public").permitAll()
                                // .requestMatchers("/api/private").authenticated()
                                // .requestMatchers("/api/private-scoped")
                                // .hasAuthority("SCOPE_read:messages"))
                                .build();
        }
}