package com.hack_nc.sharesphere.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "notifications")
public class Notification {

    @Id
    private String id;
    private String userId;      // The recipient (listing owner)
    private String requestId;   // The request that triggered this notification
    private String message;     // Notification message
    private boolean read;       // Whether the notification has been read
    private Date createdAt;
    private Date updatedAt;     // When the notification was last modified

    public Notification() {
        this.read = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    public Notification(String userId, String requestId, String message) {
        this.userId = userId;
        this.requestId = requestId;
        this.message = message;
        this.read = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    // Getters and Setters

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getRequestId() { return requestId; }
    public void setRequestId(String requestId) { this.requestId = requestId; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public boolean isRead() { return read; }
    public void setRead(boolean read) { this.read = read; }

    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }

    public Date getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Date updatedAt) { this.updatedAt = updatedAt; }
}
