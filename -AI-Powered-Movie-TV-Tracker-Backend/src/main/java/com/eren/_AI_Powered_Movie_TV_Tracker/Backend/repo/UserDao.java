package com.eren._AI_Powered_Movie_TV_Tracker.Backend.repo;

import com.eren._AI_Powered_Movie_TV_Tracker.Backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<Users, Integer> {
    Optional<Users> findByEmail(String id);
}
