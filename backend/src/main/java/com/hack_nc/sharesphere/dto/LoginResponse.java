package com.hack_nc.sharesphere.dto;

public class LoginResponse {
    private String token;
    private int points;
    private int helpedCount;
    private String avatarUrl;

    // Getters and Setters
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }

    public int getHelpedCount() { return helpedCount; }
    public void setHelpedCount(int helpedCount) { this.helpedCount = helpedCount; }

    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }
}


