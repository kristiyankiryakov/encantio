package com.mishka.mishkabackend.Entity.Product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mishka.mishkabackend.Entity.BaseEntity;
import com.mishka.mishkabackend.Entity.Review.Review;
import com.mishka.mishkabackend.Entity.Tag.Tag;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
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

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int stock;

    private String thumbnail = null;

    @ManyToMany
    @JoinTable(
            name = "product_tag",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags;

    @NotNull
    @DecimalMin(value = "0.00", inclusive = true, message = "Total must be greater than or equal to 0")
    private BigDecimal price;

    private List<String> images;

    @OneToMany(mappedBy = "product",cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Review> reviews;

    @Column(nullable = false)
    private Boolean featured = false;
}