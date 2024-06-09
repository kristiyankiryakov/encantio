package com.mishka.mishkabackend.Service.Review;

import com.mishka.mishkabackend.Dtos.ReviewDTO;
import com.mishka.mishkabackend.Entity.Review.Review;

import java.util.List;

public interface ReviewService {

    ReviewDTO createReview(Integer productId, Review review);

    List<ReviewDTO> getAll();

    ReviewDTO getReviewById(Integer reviewId);
}
