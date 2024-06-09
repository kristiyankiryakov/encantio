package com.mishka.mishkabackend.Dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {
    private Integer id;
    private String email;
    private String name;
    private String body;
    private ProductDTO product;
    private Integer rating;
    private Boolean approved;
}
