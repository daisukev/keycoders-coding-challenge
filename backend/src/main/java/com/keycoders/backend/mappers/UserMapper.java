package com.keycoders.backend.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.NonNull;

import com.keycoders.backend.entities.User;

public class UserMapper implements RowMapper<User> {
    @Override
    public User mapRow(@NonNull ResultSet rs, int rowNum) throws SQLException {
        User user = new User();

        // SELECT UserID, Name, EmailAddress,
        // UserLevelID, CreatedDate, UpdatedDate
        // FROM [User] WHERE EmailAddress = 'user1@naku.com';
        user.setUserID((rs.getInt("UserID")));
        user.setName(rs.getString("Name"));
        user.setEmailAddress(rs.getString("EmailAddress"));
        user.setUserLevelID(rs.getInt("UserLevelID"));
        user.setCreatedDate(rs.getTimestamp("CreatedDate"));
        user.setUpdatedDate(rs.getTimestamp("UpdatedDate"));
        return user;
    }

}
