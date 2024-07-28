package com.mishka.mishkabackend.mapper;

import com.mishka.mishkabackend.Dtos.Order.OrderDTO;
import com.mishka.mishkabackend.Dtos.Order.OrderItemDTO;
import com.mishka.mishkabackend.Entity.Order.CustomerInfo;
import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mappings({
            @Mapping(source = "customerInfo", target = "customerInfo"),
            @Mapping(source = "orderItems", target = "orderItems"),
            @Mapping(source = "deliveryType", target = "deliveryType"),
            @Mapping(source = "address", target = "address")
    })
    OrderDTO orderToOrderDTO(Order order);
    @Mappings({
            @Mapping(source = "customerInfo", target = "customerInfo"),
            @Mapping(source = "orderItems", target = "orderItems"),
            @Mapping(source = "deliveryType", target = "deliveryType"),
            @Mapping(source = "address", target = "address")
    })
    Order orderDTOToOrder(OrderDTO orderDTO);

    OrderItemDTO orderItemToOrderItemDTO(OrderItem orderItem);
    OrderItem orderItemDTOToOrderItem(OrderItemDTO orderItemDTO);

    List<OrderItemDTO> orderItemsToOrderItemDTOs(List<OrderItem> orderItems);
    List<OrderItem> orderItemDTOsToOrderItems(List<OrderItemDTO> orderItemDTOs);
}
