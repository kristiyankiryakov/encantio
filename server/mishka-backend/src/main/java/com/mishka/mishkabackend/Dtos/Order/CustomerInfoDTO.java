package com.mishka.mishkabackend.Dtos.Order;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerInfoDTO {
    private String name;

    @Email
    private String email;
    private String phone;
}
