package com.hack_nc.sharesphere.controller;

import com.hack_nc.sharesphere.dto.LoginRequest;
import com.hack_nc.sharesphere.dto.LoginResponse;
import com.hack_nc.sharesphere.dto.SignupRequest;
import com.hack_nc.sharesphere.dto.SignupResponse;
import com.hack_nc.sharesphere.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public SignupResponse signup(@RequestBody SignupRequest signupRequest) {
        return authService.signup(signupRequest);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }
}

