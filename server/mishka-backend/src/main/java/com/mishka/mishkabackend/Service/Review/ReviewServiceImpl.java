package com.mishka.mishkabackend.Service.Review;

import com.mishka.mishkabackend.Entity.Review.Review;
import com.mishka.mishkabackend.Repository.Review.ReviewRepository;
import com.mishka.mishkabackend.Service.Product.ProductService;
import com.mishka.mishkabackend.Validator.RestValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductService productService;

    @Autowired
    private RestValidator restValidator;

    @Autowired
    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
    }

    // needs to be added user logic to work properly, other fields are tested
    public Review createReview(Integer productId, Review review) {
        restValidator.isValidIntegerId(productId);
        productService.findProductById(productId);

        restValidator.checkNullOrBlank(review.getBody());
        restValidator.isValidIntegerId(review.getRating());

        return this.reviewRepository.save(review);
    }
}
