package com.hack_nc.sharesphere.service;


import com.hack_nc.sharesphere.model.Listing;
import com.hack_nc.sharesphere.model.Request;
import com.hack_nc.sharesphere.repository.ListingRepository;
import com.hack_nc.sharesphere.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private ListingRepository listingRepository;

    /**
     * Creates a new request. The requesterId is set from the caller.
     */
    public Request createRequest(Request request, String requesterId) {
        request.setRequesterId(requesterId);
        request.setStatus("pending");
        request.setCreatedAt(new Date());
        request.setUpdatedAt(new Date());
        return requestRepository.save(request);
    }

    /**
     * Approves a request. Only the owner (poster) of the listing may approve.
     */
    public Request approveRequest(String requestId, String ownerId) {
        Optional<Request> optionalRequest = requestRepository.findById(requestId);
        if (!optionalRequest.isPresent()) {
            throw new RuntimeException("Request not found");
        }
        Request req = optionalRequest.get();
        
        // Validate that the caller is the owner of the listing.
        Optional<Listing> optionalListing = listingRepository.findById(req.getListingId());
        if (!optionalListing.isPresent()) {
            throw new RuntimeException("Listing not found");
        }
        Listing listing = optionalListing.get();
        if (!listing.getUserId().equals(ownerId)) {
            throw new RuntimeException("User not authorized to approve this request");
        }
        
        req.setStatus("accepted");
        req.setUpdatedAt(new Date());
        return requestRepository.save(req);
    }

    /**
     * Rejects a request. Only the owner (poster) of the listing may reject.
     */
    public Request rejectRequest(String requestId, String ownerId) {
        Optional<Request> optionalRequest = requestRepository.findById(requestId);
        if (!optionalRequest.isPresent()) {
            throw new RuntimeException("Request not found");
        }
        Request req = optionalRequest.get();
        
        // Validate that the caller is the owner of the listing.
        Optional<Listing> optionalListing = listingRepository.findById(req.getListingId());
        if (!optionalListing.isPresent()) {
            throw new RuntimeException("Listing not found");
        }
        Listing listing = optionalListing.get();
        if (!listing.getUserId().equals(ownerId)) {
            throw new RuntimeException("User not authorized to reject this request");
        }
        
        req.setStatus("rejected");
        req.setUpdatedAt(new Date());
        return requestRepository.save(req);
    }
}

