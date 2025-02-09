package com.hack_nc.sharesphere.service;

import com.hack_nc.sharesphere.model.Listing;
import com.hack_nc.sharesphere.model.User;
import com.hack_nc.sharesphere.repository.ListingRepository;
import com.hack_nc.sharesphere.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.Optional;

@Service
public class ListingService {

    @Autowired
    private ListingRepository listingRepository;
    
    @Autowired
    private UserRepository userRepository;

    public Listing createListing(Listing listing, String userId) {
        listing.setUserId(userId);
        listing.setCreatedAt(new Date());
        listing.setUpdatedAt(new Date());
        listing.setStatus("active");
        return listingRepository.save(listing);
    }
    
    public Listing markListingCompleted(String listingId, String userId) {
        Optional<Listing> optionalListing = listingRepository.findById(listingId);
        if (!optionalListing.isPresent()) {
            throw new RuntimeException("Listing not found");
        }
        Listing listing = optionalListing.get();
        if (!listing.getUserId().equals(userId)) {
            throw new RuntimeException("User not authorized to complete this listing");
        }
        listing.setStatus("completed");
        listing.setUpdatedAt(new Date());
        listingRepository.save(listing);
        
        // Award points to the owner – for example, add 10 points and increment helpedCount by 1
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setPoints(user.getPoints() + 10);
        user.setHelpedCount(user.getHelpedCount() + 1);
        user.setUpdatedAt(new Date());
        userRepository.save(user);
        
        return listing;
    }
}

