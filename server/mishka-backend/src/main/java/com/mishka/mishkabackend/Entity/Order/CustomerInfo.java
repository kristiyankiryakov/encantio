package com.mishka.mishkabackend.Entity.Order;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Embeddable
@Data
public class CustomerInfo {

    @Valid

    @NotNull(message = "firstName cannot be null")
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String phone;

    @Email(message = "Please provide a valid email address.")
    @Column(nullable = false, unique = false)
    private String email;


}
