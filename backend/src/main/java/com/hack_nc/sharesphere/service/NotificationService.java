package com.hack_nc.sharesphere.service;

import com.hack_nc.sharesphere.model.Notification;
import com.hack_nc.sharesphere.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    /**
     * Creates and saves a new notification.
     *
     * @param userId    The recipient's user ID (listing owner).
     * @param requestId The request that triggered this notification.
     * @param message   The notification message.
     * @return The saved Notification object.
     */
    public Notification createNotification(String userId, String requestId, String message) {
        Notification notification = new Notification(userId, requestId, message);
        return notificationRepository.save(notification);
    }

    /**
     * Retrieves all notifications for a given user.
     *
     * @param userId The user's ID.
     * @return A list of notifications for the user.
     */
    public List<Notification> getNotificationsForUser(String userId) {
        return notificationRepository.findByUserId(userId);
    }

    /**
     * Marks a specific notification as read.
     *
     * @param notificationId The ID of the notification.
     * @param userId         The ID of the user marking the notification as read.
     * @return The updated Notification.
     */
    public Notification markAsRead(String notificationId, String userId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));
        if (!notification.getUserId().equals(userId)) {
            throw new RuntimeException("User not authorized to mark this notification as read");
        }
        notification.setRead(true);
        notification.setUpdatedAt(new Date());
        return notificationRepository.save(notification);
    }
    
    /**
     * Updates (modifies) the message of a notification.
     *
     * @param notificationId The ID of the notification to update.
     * @param newMessage     The new message to set.
     * @param userId         The ID of the user modifying the notification.
     * @return The updated Notification.
     */
    public Notification updateNotification(String notificationId, String newMessage, String userId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));
        if (!notification.getUserId().equals(userId)) {
            throw new RuntimeException("User not authorized to modify this notification");
        }
        notification.setMessage(newMessage);
        notification.setUpdatedAt(new Date());
        return notificationRepository.save(notification);
    }
}
