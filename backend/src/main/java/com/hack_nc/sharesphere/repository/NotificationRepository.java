package com.hack_nc.sharesphere.repository;

import com.hack_nc.sharesphere.model.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository extends MongoRepository<Notification, String> {
    // Find all notifications for a given user (e.g., to display in a notifications
    // list)
    List<Notification> findByUserId(String userId);
}
