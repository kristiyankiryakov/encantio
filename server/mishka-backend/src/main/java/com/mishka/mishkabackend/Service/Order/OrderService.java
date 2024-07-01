package com.mishka.mishkabackend.Service.Order;

import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import com.mishka.mishkabackend.Exception.NotFoundException;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders(int pageNumber, int pageSize);

    Order createOrder(String customerEmail, List<OrderItem> orderItems);

    Order findOrderById(Integer id) throws NotFoundException;

    Order updateOrder(Order newOrder, Integer id);

    Void deleteOrder(Integer id) throws NotFoundException;


    OrderItem getOrderItemById(Integer id) throws NotFoundException;

//    OrderItem createOrderItem(OrderItem orderItem);

    OrderItem updateOrderItem(OrderItem orderItem, Integer id);

    List<OrderItem> createOrderItems(List<OrderItem> orderItems);

    Void deleteOrderItem(Integer id) throws NotFoundException;


}
