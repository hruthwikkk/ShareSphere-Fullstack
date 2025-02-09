package com.hack_nc.sharesphere.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "rewards")
public class Reward {
    @Id
    private String id;
    private String name;
    private String description;
    private int requiredPoints;

    public Reward() {}

    public Reward(String id, String name, String description, int requiredPoints) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.requiredPoints = requiredPoints;
    }

    // Getters and setters

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getRequiredPoints() { return requiredPoints; }
    public void setRequiredPoints(int requiredPoints) { this.requiredPoints = requiredPoints; }
}

