package com.mishka.mishkabackend.Dtos.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private List<OrderItemDTO> orderItems;
    private CustomerInfoDTO customerInfo;
    private BigDecimal total;
}
