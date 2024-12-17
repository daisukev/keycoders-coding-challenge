package com.keycoders.backend.controller;

import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;

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

    UserRepository userRepository = new UserRepository();

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}") // JWT expiration in milliseconds
    private long jwtExpirationMS;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Credentials credentials) {
        // User user = userRepository.findUserByEmail(credentials.getLogin());

        // compare passwords
        String hashedPass = passwordEncoder.encode(credentials.getPassword());
        // String jwt = generateJwtToken(user);

        String hashedPassResult = "{pass: " + hashedPass + "}";

        return (ResponseEntity<?>) ResponseEntity.ok().body(hashedPassResult);
    }

    private String generateJwtToken(User user) {

        // create key using secret.
        SecretKey key = Keys.hmacShaKeyFor(this.jwtSecret.getBytes(StandardCharsets.UTF_8));
        // add user object

        // java.util.Date date = new java.util.Date();
        Timestamp issueDate = new Timestamp(System.currentTimeMillis());
        Timestamp expirationDate = new Timestamp(issueDate.getTime() + this.jwtExpirationMS);
        return Jwts.builder().subject(user.getEmailAddress())
                .issuedAt(issueDate)
                .expiration(expirationDate)
                .signWith(key)
                .compact();

    }

}
