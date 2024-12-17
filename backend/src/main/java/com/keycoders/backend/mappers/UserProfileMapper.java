package com.keycoders.backend.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.NonNull;

import com.keycoders.backend.entities.UserProfile;

public class UserProfileMapper implements RowMapper<UserProfile> {
    @Override
    public UserProfile mapRow(@NonNull ResultSet rs, int rowNum) throws SQLException {
        UserProfile userProfile = new UserProfile(
/*  [UserProfileID] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Name] [varchar](255) NULL,
	[Title] [varchar](255) NULL,
	[Comment] [varchar](1000) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL
*/
	        rs.getInt("UserProfileId"),
	        rs.getInt("UserId"),
	        rs.getString("Name"),
	        rs.getString("Title"),
	        rs.getString("Comment"),
	        rs.getDate("CreatedDate").toLocalDate(),
	        rs.getDate("UpdatedDate").toLocalDate()
	        );
	        return userProfile;
    }

}
