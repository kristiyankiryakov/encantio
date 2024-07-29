package com.mishka.mishkabackend.Entity.Order;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mishka.mishkabackend.Entity.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem extends BaseEntity {

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", referencedColumnName = "id", nullable = false)
    private Order order;

    @Column(name = "product_id", nullable = false)
    private Integer productId;

    private int quantity;
}
