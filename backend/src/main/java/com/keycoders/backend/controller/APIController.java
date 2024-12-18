package com.keycoders.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import com.keycoders.backend.entities.Credentials;
import com.keycoders.backend.entities.UserProfile;
import com.keycoders.backend.model.Message;
import com.keycoders.backend.repositories.UserProfileRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "api", produces = MediaType.APPLICATION_JSON_VALUE)
// For simplicity of this sample, allow all origins. Real applications should
// configure CORS for their use case.
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class APIController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @PostMapping(value = "/token")
    public Message token(@RequestBody Credentials credential) {
        String sql = "SELECT COUNT(*) FROM sys.all_columns";
        String message = jdbcTemplate.queryForObject(sql, String.class);
        return new Message(message);
    }

    @GetMapping(value = "/token")
    public Message getToken() {
        // String sql = "SELECT COUNT(*) FROM sys.all_columns";
        String sql = "SELECT STRING_AGG(NAME,',') FROM SYS.tables";
        String message = jdbcTemplate.queryForObject(sql, String.class);
        return new Message(message);
    }

    @GetMapping(value = "/public")
    public Message publicEndpoint() {
        System.out.println("hello");
        return new Message("All good. You DO NOT need to be authenticated to call /api/public.");
    }

    @GetMapping(value = "/user-profile")
    public ResponseEntity<?> getUserProfileByID(@RequestParam Integer id) {

        UserProfile userProfile = userProfileRepository.findUserProfileByUserId(id);
        return (ResponseEntity<?>) ResponseEntity.ok().body(userProfile);
    }

    @GetMapping(value = "/private")
    public Message privateEndpoint() {
        return new Message("All good. You can see this because you are Authenticated.");
    }

    @GetMapping(value = "/private-scoped")
    public Message privateScopedEndpoint() {
        return new Message(
                "All good. You can see this because you are Authenticated with a Token granted the 'read:messages' scope");
    }

}