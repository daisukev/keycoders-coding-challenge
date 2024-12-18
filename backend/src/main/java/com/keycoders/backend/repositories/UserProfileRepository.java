package com.keycoders.backend.repositories;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.keycoders.backend.entities.UserProfile;
import com.keycoders.backend.mappers.UserProfileMapper;

@Repository
public class UserProfileRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserProfileRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /**
     * @param UserId
     * @return UserProfile object
     */
    public UserProfile findUserProfileByUserId(Integer UserId) {
        // String sql = "SELECT UserID, Name, EmailAddress, UserLevelID, CreatedDate,
        // UpdatedDate FROM [User] WHERE EmailAddress = ?";
        String sql = "SELECT * FROM [dbo].[UserProfile] WHERE UserId = ?";
        return jdbcTemplate.queryForObject(sql, new UserProfileMapper(), UserId);
    }

}