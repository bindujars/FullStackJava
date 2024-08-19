package com.example.blog.controller;

import com.example.blog.model.User;
import com.example.blog.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return authService.registerUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestParam String username, @RequestParam String password) {
        return authService.authenticateUser(username, password);
    }
}
