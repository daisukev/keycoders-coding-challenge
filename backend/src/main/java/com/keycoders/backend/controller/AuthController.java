package com.keycoders.backend.controller;

import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.keycoders.backend.entities.Credentials;
import com.keycoders.backend.entities.User;
import com.keycoders.backend.repositories.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    @Autowired
    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    @Autowired
    private UserRepository userRepository;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}") // JWT expiration in milliseconds
    private long jwtExpirationMS;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Credentials credentials) throws SQLException {
        // TODO: Error Handling on blank results
        User user = userRepository.findUserByUserName(credentials.getLogin());
        // compare passwords
        String hashedPass = passwordEncoder.encode(credentials.getPassword());
        String jwt = generateJwtToken(user);

        String hashedPassResult = "{pass: " + hashedPass + "}";

        Map<String, String> response = new HashMap<>();
        response.put("jwt", jwt);

        return (ResponseEntity<?>) ResponseEntity.ok().body(response);

    }

    private String generateJwtToken(User user) {

        // create key using secret.
        SecretKey key = Keys.hmacShaKeyFor(this.jwtSecret.getBytes(StandardCharsets.UTF_8));

        // java.util.Date date = new java.util.Date();
        Timestamp issueDate = new Timestamp(System.currentTimeMillis());
        Timestamp expirationDate = new Timestamp(issueDate.getTime() + this.jwtExpirationMS);
        return Jwts.builder().subject(user.getUserName())
                .claim("user", user)
                .issuedAt(issueDate)
                .expiration(expirationDate)
                .signWith(key)
                .compact();

    }

}
