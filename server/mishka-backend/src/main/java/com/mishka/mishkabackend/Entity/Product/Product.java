package com.mishka.mishkabackend.Entity.Product;

import com.mishka.mishkabackend.Entity.BaseEntity;
import com.mishka.mishkabackend.Entity.Review.Review;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private int stock;

    @NotNull
    @DecimalMin(value = "0.00", inclusive = true, message = "Total must be greater than or equal to 0")
    private BigDecimal price;

    private List<String> images;

    @OneToMany(mappedBy = "product")
    private List<Review> reviews;

    @Column(nullable = false)
    private boolean isFeatured = false;
}