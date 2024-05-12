package com.mishka.mishkabackend.Entity.Review;

import com.mishka.mishkabackend.Entity.BaseEntity;
import com.mishka.mishkabackend.Entity.Product.Product;
import com.mishka.mishkabackend.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

    @Column(nullable = false)
    private String body;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    private Integer rating;

}
