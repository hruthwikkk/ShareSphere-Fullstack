package com.hack_nc.sharesphere.controller;

import com.hack_nc.sharesphere.model.Request;
import com.hack_nc.sharesphere.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    /**
     * Endpoint to create a new request.
     * The request body should include the listingId and an optional message.
     * The requester’s user ID is provided via the X-User-Id header.
     */
    @PostMapping
    public Request createRequest(@RequestBody Request request,
            @RequestHeader(value = "X-User-Id", required = false) String requesterId) {
        return requestService.createRequest(request, requesterId);
    }

    /**
     * Endpoint to approve a request.
     * Only the owner of the listing (the user who posted the listing) can approve.
     */
    @PutMapping("/{id}/approve")
    public Request approveRequest(@PathVariable("id") String requestId,
            @RequestHeader(value = "X-User-Id", required = false) String ownerId) {
        return requestService.approveRequest(requestId, ownerId);
    }

    /**
     * Endpoint to reject a request.
     * Only the owner of the listing can reject the request.
     */
    @PutMapping("/{id}/reject")
    public Request rejectRequest(@PathVariable("id") String requestId,
            @RequestHeader(value = "X-User-Id", required = false) String ownerId) {
        return requestService.rejectRequest(requestId, ownerId);
    }
}
