package com.mishka.mishkabackend.Service.Review;

import com.mishka.mishkabackend.Dtos.ProductDTO;
import com.mishka.mishkabackend.Dtos.ReviewDTO;
import com.mishka.mishkabackend.Entity.Product.Product;
import com.mishka.mishkabackend.Entity.Review.Review;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.Review.ReviewRepository;
import com.mishka.mishkabackend.Service.Product.ProductService;
import com.mishka.mishkabackend.Validator.RestValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private final ReviewRepository reviewRepository;

    @Autowired
    private final ProductService productService;

    @Autowired
    private RestValidator restValidator;

    @Autowired
    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
    }

    @Override
    public ReviewDTO createReview(Integer productId, Review review) {
        restValidator.isValidIntegerId(productId);
        Product product = productService.findProductById(productId); // Fetch the product

        restValidator.checkNullOrBlank(review.getBody());
        restValidator.isValidIntegerId(review.getRating());

        review.setProduct(product); // Set the fetched product in the review
        Review savedReview = reviewRepository.save(review);

        return mapToReviewDTO(savedReview);
    }

    @Override
    public List<ReviewDTO> getAll() {
        List<Review> reviews = reviewRepository.findAll();
        return reviews.stream()
                .map(this::mapToReviewDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ReviewDTO getReviewById(Integer reviewId) {
        Review review = reviewRepository.findById(reviewId.longValue())
                .orElseThrow(() -> new NotFoundException("Review not found with id ", reviewId));
        return mapToReviewDTO(review);
    }

    private ReviewDTO mapToReviewDTO(Review review) {
        ProductDTO productDTO = new ProductDTO(review.getProduct().getId(), review.getProduct().getName());
        return new ReviewDTO(
                review.getId(),
                review.getEmail(),
                review.getName(),
                review.getBody(),
                productDTO,
                review.getRating(),
                review.getApproved()
        );
    }
}
