package com.hack_nc.sharesphere.controller;

import com.hack_nc.sharesphere.model.Reward;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/rewards")
public class RewardController {

    @GetMapping
    public List<Reward> getRewards() {
        List<Reward> rewards = new ArrayList<>();
        rewards.add(new Reward("1", "Coffee Coupon", "Get a free coffee on campus", 50));
        rewards.add(new Reward("2", "Book Discount", "10% off on your next textbook", 100));
        rewards.add(new Reward("3", "Free Meal", "Enjoy a free meal at the campus cafeteria", 150));
        return rewards;
    }
}

