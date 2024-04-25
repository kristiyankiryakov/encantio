package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Order;
import com.mishka.mishkabackend.Exception.NotFoundException;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders(int pageNumber, int pageSize);

    Order createOrder(Order newOrder);

    Order findOrderById(Integer id) throws NotFoundException;

    Order updateOrder(Order newOrder, Integer id);

    Void deleteOrder(Integer id) throws NotFoundException;

}
