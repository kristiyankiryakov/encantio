package com.mishka.mishkabackend.Repository.Product;

import com.mishka.mishkabackend.Entity.Product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("SELECT COUNT(p) FROM Product p WHERE p.featured = true")
    long countByFeatured();
}
