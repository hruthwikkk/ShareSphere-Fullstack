package com.hack_nc.sharesphere.controller;

import com.hack_nc.sharesphere.model.Notification;
import com.hack_nc.sharesphere.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<Notification> getNotifications(@RequestAttribute("userId") String userId) {
        return notificationService.getNotificationsForUser(userId);
    }

    @PutMapping("/{id}/read")
    public Notification markNotificationAsRead(@PathVariable("id") String notificationId,
            @RequestAttribute("userId") String userId) {
        return notificationService.markAsRead(notificationId, userId);
    }

    @PutMapping("/{id}")
    public Notification updateNotification(@PathVariable("id") String notificationId,
            @RequestBody Notification updatedNotification,
            @RequestAttribute("userId") String userId) {
        return notificationService.updateNotification(notificationId, updatedNotification.getMessage(), userId);
    }
}
