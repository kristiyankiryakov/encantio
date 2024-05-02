package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Review.Review;
import com.mishka.mishkabackend.Service.Review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/{productId}")
    Review createReview(@PathVariable Integer productId, @RequestBody Review review) {
        return this.reviewService.createReview(productId, review);
    }
}
