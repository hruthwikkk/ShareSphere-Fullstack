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

    @Autowired
    private NotificationService notificationService;

    /**
     * Creates a new request for a listing and triggers a notification for the
     * listing owner.
     *
     * @param request     The request object (should contain at least the listingId
     *                    and an optional message).
     * @param requesterId The ID of the user making the request.
     * @return The saved Request object.
     */
    public Request createRequest(Request request, String requesterId) {
        request.setRequesterId(requesterId);
        request.setStatus("pending");
        request.setCreatedAt(new Date());
        request.setUpdatedAt(new Date());
        Request savedRequest = requestRepository.save(request);

        // Look up the listing to get the owner’s user ID.
        Optional<Listing> listingOpt = listingRepository.findById(request.getListingId());
        if (listingOpt.isPresent()) {
            Listing listing = listingOpt.get();
            String ownerId = listing.getUserId();
            String message = "A new request has been made for your listing \"" + listing.getTitle()
                    + "\". Please review, approve, or reject it.";
            notificationService.createNotification(ownerId, savedRequest.getId(), message);
        } else {
            throw new RuntimeException("Listing not found for request");
        }

        return savedRequest;
    }

    /**
     * Approves a request.
     * Only the owner of the listing (passed as ownerId) can approve the request.
     *
     * @param requestId The ID of the request to approve.
     * @param ownerId   The ID of the listing owner.
     * @return The updated Request object.
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
     * Rejects a request.
     * Only the owner of the listing (passed as ownerId) can reject the request.
     *
     * @param requestId The ID of the request to reject.
     * @param ownerId   The ID of the listing owner.
     * @return The updated Request object.
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
