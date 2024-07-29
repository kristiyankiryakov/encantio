package com.mishka.mishkabackend.Repository.Tag;

import com.mishka.mishkabackend.Entity.Review.Review;
import com.mishka.mishkabackend.Entity.Tag.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Integer> {
    Optional<Tag> findByName(String name);
}
