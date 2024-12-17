package com.keycoders.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Credentials {
    private String login;
    private String password;

    public String getLogin() {
        return this.login;
    }

    public String getPassword() {
        return this.password;
    }
}
