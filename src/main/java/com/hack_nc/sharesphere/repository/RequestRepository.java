package com.hack_nc.sharesphere.repository;

import com.hack_nc.sharesphere.model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequestRepository extends MongoRepository<Request, String> {
    // Additional custom query methods can be added if needed.
}

