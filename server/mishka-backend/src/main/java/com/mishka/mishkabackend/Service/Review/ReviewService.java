package com.mishka.mishkabackend.Service.Review;

import com.mishka.mishkabackend.Entity.Review.Review;

public interface ReviewService {

    Review createReview (Integer productId, Review review);
}
