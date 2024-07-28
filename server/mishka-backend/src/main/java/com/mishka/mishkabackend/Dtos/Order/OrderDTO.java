package com.mishka.mishkabackend.Dtos.Order;

import com.mishka.mishkabackend.Entity.Order.CustomerInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Integer id;
    private List<OrderItemDTO> orderItems;
    private CustomerInfo customerInfo;
    private BigDecimal total;
}
