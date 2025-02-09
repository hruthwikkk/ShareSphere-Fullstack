package com.hack_nc.sharesphere.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "requests")
public class Request {
    @Id
    private String id;
    private String listingId;      // Reference to Listings._id
    private String requesterId;    // Reference to Users._id
    private String message;        // Optional message attached to the request
    private String status;         // "pending", "accepted", "rejected", "withdrawn", "completed"
    private Date createdAt;
    private Date updatedAt;

    // Getters and Setters

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    
    public String getListingId() {
        return listingId;
    }
    public void setListingId(String listingId) {
        this.listingId = listingId;
    }
    
    public String getRequesterId() {
        return requesterId;
    }
    public void setRequesterId(String requesterId) {
        this.requesterId = requesterId;
    }
    
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
    
    public Date getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}

