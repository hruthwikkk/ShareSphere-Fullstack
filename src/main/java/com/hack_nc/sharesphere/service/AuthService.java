package com.hack_nc.sharesphere.service;


import com.hack_nc.sharesphere.dto.LoginRequest;
import com.hack_nc.sharesphere.dto.LoginResponse;
import com.hack_nc.sharesphere.dto.SignupRequest;
import com.hack_nc.sharesphere.dto.SignupResponse;
import com.hack_nc.sharesphere.model.User;
import com.hack_nc.sharesphere.repository.UserRepository;
import com.hack_nc.sharesphere.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    // Create a BCrypt password encoder instance
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    /**
     * Signs up a new user by validating the email domain, hashing the password,
     * generating a creative avatar URL, and saving the user in MongoDB.
     */
    public SignupResponse signup(SignupRequest signupRequest) {
        // Validate that the email is within the allowed domain (e.g., @university.edu)
        if (!signupRequest.getEmail().endsWith("@ncsu.edu")) {
            throw new RuntimeException("Invalid email domain; please use your university email.");
        }

        // Check if a user with this email already exists
        if (userRepository.findByEmail(signupRequest.getEmail()) != null) {
            throw new RuntimeException("User with this email already exists.");
        }

        // Hash the password using BCrypt
        String hashedPassword = passwordEncoder.encode(signupRequest.getPassword());

        // Generate a creative avatar URL.
        // (For example, using a dummy avatar service that returns a unique avatar image based on a hash.)
        String avatarUrl = "https://api.example.com/avatars/" + UUID.nameUUIDFromBytes(signupRequest.getEmail().getBytes());

        // Create the user object with initial points and helpedCount
        User user = new User();
        user.setName(signupRequest.getName());
        user.setAge(signupRequest.getAge());
        user.setEmail(signupRequest.getEmail());
        user.setPhone(signupRequest.getPhone());
        user.setPasswordHash(hashedPassword);
        user.setPoints(0);
        user.setHelpedCount(0);
        user.setAvatarUrl(avatarUrl);
        Date now = new Date();
        user.setCreatedAt(now);
        user.setUpdatedAt(now);
        
        // Save the user to MongoDB Atlas
        userRepository.save(user);

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getId(), user.getEmail());

        SignupResponse response = new SignupResponse();
        response.setToken(token);
        response.setPoints(user.getPoints());
        response.setHelpedCount(user.getHelpedCount());
        response.setAvatarUrl(user.getAvatarUrl());
        return response;
    }

    /**
     * Logs in an existing user by checking the email and verifying the password.
     */
    public LoginResponse login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user == null) {
            throw new RuntimeException("User not found.");
        }

        // Verify the password using BCrypt
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Invalid credentials.");
        }

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getId(), user.getEmail());

        LoginResponse response = new LoginResponse();
        response.setToken(token);
        response.setPoints(user.getPoints());
        response.setHelpedCount(user.getHelpedCount());
        response.setAvatarUrl(user.getAvatarUrl());
        return response;
    }
}

