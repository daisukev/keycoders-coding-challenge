package com.keycoders.backend.repositories;

import com.keycoders.backend.entities.User;
import com.keycoders.backend.mappers.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public UserRepository() {
        this.jdbcTemplate = new JdbcTemplate();
    }

    public User findUserByEmail(String email) {
        String sql = "SELECT UserID, Name, EmailAddress, UserLevelID, CreatedDate, UpdatedDate FROM User WHERE EmailAddress = ?";

        return jdbcTemplate.queryForObject(sql, new UserMapper(), email);
    }

}