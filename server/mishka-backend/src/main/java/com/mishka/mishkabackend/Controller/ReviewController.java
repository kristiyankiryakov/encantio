package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Dtos.ReviewDTO;
import com.mishka.mishkabackend.Entity.Review.Review;
import com.mishka.mishkabackend.Service.Review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/{productId}")
    public ReviewDTO createReview(@PathVariable Integer productId, @RequestBody Review review) {
        return this.reviewService.createReview(productId, review);
    }

    @GetMapping("")
    List<ReviewDTO> getReviews() {
        return this.reviewService.getAll();
    }

    @GetMapping("/{reviewId}")
    public ReviewDTO getReviewById(@PathVariable Integer reviewId) {
        return reviewService.getReviewById(reviewId);
    }


    @PutMapping("/approve/{reviewId}")
    public ReviewDTO updateApprovedState(@PathVariable Integer reviewId, @RequestBody Map<String, Boolean> requestBody) {
        Boolean isApproved = requestBody.get("isApproved");
        return this.reviewService.updateReviewStatus(reviewId, isApproved);
    }

    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Integer reviewId) {
        reviewService.deleteReview(reviewId);
    }

}
