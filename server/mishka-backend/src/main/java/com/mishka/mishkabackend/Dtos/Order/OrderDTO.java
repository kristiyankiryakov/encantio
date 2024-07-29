package com.mishka.mishkabackend.Dtos.Order;

import com.mishka.mishkabackend.Entity.Order.Address;
import com.mishka.mishkabackend.Entity.Order.CustomerInfo;
import com.mishka.mishkabackend.Enums.DeliveryType;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {


    private Integer id;
    @NotNull
    private List<OrderItemDTO> orderItems;
    @Valid
    @NotNull
    private CustomerInfo customerInfo;
    @NotNull
    @Valid
    private Address address;
    @NotNull
    private DeliveryType deliveryType;
    private BigDecimal total;
}
