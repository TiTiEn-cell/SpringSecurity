package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpMethod;

import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {

        UserDetails student = User
                .withDefaultPasswordEncoder()
                .username("student")
                .password("123456")
                .roles("STUDENT")
                .build();

        UserDetails bookkeeper = User
                .withDefaultPasswordEncoder()
                .username("bookkeeper")
                .password("123456")
                .roles("BOOKKEEPER")
                .build();

        return new InMemoryUserDetailsManager(student, bookkeeper);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                // FIX CORS
                .cors(Customizer.withDefaults())

                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth

                        .requestMatchers(HttpMethod.GET, "/api/books/**")
                        .hasAnyRole("STUDENT", "BOOKKEEPER")

                        .requestMatchers(HttpMethod.POST, "/api/books/**")
                        .hasRole("BOOKKEEPER")

                        .requestMatchers(HttpMethod.PUT, "/api/books/**")
                        .hasRole("BOOKKEEPER")

                        .requestMatchers(HttpMethod.DELETE, "/api/books/**")
                        .hasRole("BOOKKEEPER")

                        .anyRequest()
                        .authenticated()
                )

                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}