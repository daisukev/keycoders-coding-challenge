package com.keycoders.backend.repositories;

import com.keycoders.backend.entities.User;
import com.keycoders.backend.mappers.UserMapper;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // seems to be the login default.
    public User findUserByUserName(String username) {
        String sql = "SELECT UserID, UserName, LoweredUserName, MobileAlias, IsAnonymous, LastActivityDate, CreatedDate, UpdatedDate FROM [User] WHERE UserName = ?";
        return jdbcTemplate.queryForObject(sql, new UserMapper(), username);
    }

    public <List> User findUsersByUserName(String username) {
        String sql = "SELECT UserID, UserName, LoweredUserName, MobileAlias, IsAnonymous, LastActivityDate, CreatedDate, UpdatedDate FROM [User]";
        return jdbcTemplate.queryForObject(sql, new UserMapper(), username);
    }
}