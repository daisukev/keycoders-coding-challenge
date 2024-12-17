package com.keycoders.backend.entities;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    private int userID;

    private String UserName;

    private String LoweredUserName;

    private String MobileAlias;

    private Boolean IsAnonymous;

    private Timestamp LastActivityDate;

    private Timestamp createdDate;

    private Timestamp updatedDate;

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getLoweredUserName() {
        return LoweredUserName;
    }

    public void setLoweredUserName(String loweredUserName) {
        LoweredUserName = loweredUserName;
    }

    public String getMobileAlias() {
        return MobileAlias;
    }

    public void setMobileAlias(String mobileAlias) {
        MobileAlias = mobileAlias;
    }

    public Boolean getIsAnonymous() {
        return IsAnonymous;
    }

    public void setIsAnonymous(Boolean isAnonymous) {
        IsAnonymous = isAnonymous;
    }

    public Timestamp getLastActivityDate() {
        return LastActivityDate;
    }

    public void setLastActivityDate(Timestamp lastActivityDate) {
        LastActivityDate = lastActivityDate;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    public Timestamp getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Timestamp updatedDate) {
        this.updatedDate = updatedDate;
    }
}
