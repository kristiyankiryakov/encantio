package com.mishka.mishkabackend.Entity.Order;

import jakarta.persistence.Embeddable;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @Valid

    @NotNull
    @NotBlank
    private String city;
    @NotNull
    @NotBlank
    private String state;
    @NotNull
    @NotBlank
    private String street;
}
