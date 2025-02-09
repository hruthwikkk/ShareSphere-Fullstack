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

    @PostMapping("/listings")
    public Listing createListing(@RequestBody Listing listing,
                                 @RequestAttribute("userId") String userId) {
        return listingService.createListing(listing, userId);
    }

    @PutMapping("/listings/{id}/complete")
    public Listing completeListing(@PathVariable("id") String listingId,
                                   @RequestAttribute("userId") String userId) {
        return listingService.markListingCompleted(listingId, userId);
    }
}

