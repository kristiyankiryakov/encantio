package com.mishka.mishkabackend.Entity.Order;

import com.mishka.mishkabackend.Entity.BaseEntity;
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
@Table(name = "orders")
public class Order extends BaseEntity {

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems;

    @Email(message = "Please provide a valid email address.")
    @Column(nullable = false, unique = false)
    private String email;

    @NotNull
    @DecimalMin(value = "0.00", inclusive = true, message = "Total must be greater than or equal to 0")
    private BigDecimal total = BigDecimal.valueOf(0);
}
