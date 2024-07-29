package com.mishka.mishkabackend.Repository.Review;

import com.mishka.mishkabackend.Entity.Review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Long> {

}
