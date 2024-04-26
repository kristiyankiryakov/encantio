package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.OrderItem;
import com.mishka.mishkabackend.Exception.NotFoundException;

import java.util.List;

public interface OrderItemService {

    OrderItem createOrderItem(OrderItem orderItem);

    List<OrderItem> createOrderItems(List<OrderItem> orderItems);

    OrderItem getOrderItemById(Integer id) throws NotFoundException;

    OrderItem updateOrderItem(OrderItem orderItem, Integer id);

    Void deleteOrderItem(Integer id) throws NotFoundException;
}
