package com.eren._AI_Powered_Movie_TV_Tracker.Backend.controller;

import com.eren._AI_Powered_Movie_TV_Tracker.Backend.model.Users;
import com.eren._AI_Powered_Movie_TV_Tracker.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Email ile kullanıcı bulma (path parametre String email olmalı)
    @GetMapping("/{email}")
    public Optional<Users> getUser(@PathVariable String email){
        return userService.findByEmail(email);
    }

    // Yeni kullanıcı kaydetme
    @PostMapping("/saveUser")
    public Users saveUser(@RequestBody Users user){
        return userService.save(user);
    }
}
