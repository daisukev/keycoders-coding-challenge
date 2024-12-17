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

        user.setUserID((rs.getInt("UserID")));
        user.setUserName(rs.getString("UserName"));
        user.setLoweredUserName(rs.getString("LoweredUserName"));
        user.setMobileAlias(rs.getString("MobileAlias"));
        user.setIsAnonymous(rs.getBoolean("IsAnonymous"));
        user.setLastActivityDate(rs.getTimestamp("LastActivityDate"));
        user.setCreatedDate(rs.getTimestamp("CreatedDate"));
        user.setUpdatedDate(rs.getTimestamp("UpdatedDate"));
        return user;
    }

}
