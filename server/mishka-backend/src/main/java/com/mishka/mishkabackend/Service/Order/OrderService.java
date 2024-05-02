package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Order;
import com.mishka.mishkabackend.Entity.OrderItem;
import com.mishka.mishkabackend.Exception.NotFoundException;
import org.apache.coyote.BadRequestException;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders(int pageNumber, int pageSize);

    Order createOrder(String customerEmail, List<OrderItem> orderItems);

    Order findOrderById(Integer id) throws NotFoundException;

    Order updateOrder(Order newOrder, Integer id);

    Void deleteOrder(Integer id) throws NotFoundException;

}
