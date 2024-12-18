package com.keycoders.backend.entities;

import java.time.LocalDate;

/**
 * 
 * Get the data:
 * Columns: 
 * 	[UserProfileID] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Name] [varchar](255) NULL,
	[Title] [varchar](255) NULL,
	[Comment] [varchar](1000) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL

 */
public record UserProfile(
		Integer UserProfileID, 
		Integer UserId, 
		String Name, 
		String Title, 
		String Comment, 
		LocalDate CreatedDate,
		LocalDate UpdatedDate) {

	
}
