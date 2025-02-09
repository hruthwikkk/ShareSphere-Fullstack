package com.hack_nc.sharesphere.controller;

import com.hack_nc.sharesphere.model.Listing;
import com.hack_nc.sharesphere.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ListingController {

    @Autowired
    private ListingService listingService;

    // Endpoint to create a new listing
    // In a production system, you'd extract the userId from the JWT; here we
    // simulate it via header.
    @PostMapping("/listings")
    public Listing createListing(@RequestBody Listing listing,
            @RequestHeader(value = "X-User-Id", required = false) String userId) {
        return listingService.createListing(listing, userId);
    }

    // Endpoint to mark a listing as completed, awarding points to the owner.
    @PutMapping("/listings/{id}/complete")
    public Listing completeListing(@PathVariable("id") String listingId, @RequestHeader(value = "X-User-Id", required = false) String userId) {
        return listingService.markListingCompleted(listingId, userId);
    }
}
