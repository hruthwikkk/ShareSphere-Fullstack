package com.hack_nc.sharesphere.repository;

import com.hack_nc.sharesphere.model.Listing;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ListingRepository extends MongoRepository<Listing, String> {
    // You can add custom queries if needed
}

