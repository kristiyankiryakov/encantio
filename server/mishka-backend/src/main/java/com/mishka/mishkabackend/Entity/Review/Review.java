package com.mishka.mishkabackend.Entity.Review;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mishka.mishkabackend.Entity.BaseEntity;
import com.mishka.mishkabackend.Entity.Product.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review extends BaseEntity {

    @Email(message = "Please provide a valid email.")
    @Size(max = 100)
    private String email;

    @Size(max = 100)
    private String name;

    @Column(nullable = false)
    private String body;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JsonBackReference
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    private Integer rating;

    private Boolean approved = false;

}
