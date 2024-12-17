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
    public User findUserByEmail(String email) {
        // String sql = "SELECT UserID, Name, EmailAddress, UserLevelID, CreatedDate,
        // UpdatedDate FROM [User] WHERE EmailAddress = ?";
        String sql = "SELECT * FROM [dbo].[User] WHERE EmailAddress = ?";
        return jdbcTemplate.queryForObject(sql, new UserMapper(), email);
    }

}