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

    @PostMapping
    public Request createRequest(@RequestBody Request request,
            @RequestAttribute("userId") String requesterId) {
        return requestService.createRequest(request, requesterId);
    }

    @PutMapping("/{id}/approve")
    public Request approveRequest(@PathVariable("id") String requestId,
            @RequestAttribute("userId") String ownerId) {
        return requestService.approveRequest(requestId, ownerId);
    }

    @PutMapping("/{id}/reject")
    public Request rejectRequest(@PathVariable("id") String requestId,
            @RequestAttribute("userId") String ownerId) {
        return requestService.rejectRequest(requestId, ownerId);
    }
}
