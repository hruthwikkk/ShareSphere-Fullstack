package com.hack_nc.sharesphere.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.hack_nc.sharesphere.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}

