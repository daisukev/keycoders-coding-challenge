package com.keycoders.backend.services;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.keycoders.backend.entities.Credentials;
import com.keycoders.backend.entities.User;
import com.keycoders.backend.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository = new UserRepository();

    public ResponseEntity<?> login(Credentials credentials) {
        User user = userRepository.findUserByEmail(credentials.getLogin());
        System.out.println("Credentials: " + credentials);

        return ResponseEntity.ok(user);
    }
}
