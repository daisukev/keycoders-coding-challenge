package com.keycoders.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HelloContoller {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/hello")
    public String hello(@RequestParam String name) {
        String sql = "SELECT COUNT(*) FROM sys.all_columns";
        String message = jdbcTemplate.queryForObject(sql, String.class);
        return new String("Hello " + name + "! Here is the column count from DB: " + message);
    }

}
