package com.eren._AI_Powered_Movie_TV_Tracker.Backend.service;


import com.eren._AI_Powered_Movie_TV_Tracker.Backend.model.Users;
import com.eren._AI_Powered_Movie_TV_Tracker.Backend.repo.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {

    @Autowired
    UserDao userRepo;


    public Optional<Users> findByEmail(String id) {
        return userRepo.findByEmail(id);
    }

    public Users save(Users user) {
        return userRepo.save(user);
    }
}
