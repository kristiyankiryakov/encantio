package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Dtos.Order.OrderDTO;
import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import com.mishka.mishkabackend.Service.Order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping()
    List<Order> all(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "20") int pageSize
    ) {
        return orderService.getAllOrders(pageNumber, pageSize);
    }

    @PostMapping()
    OrderDTO create(@RequestBody OrderDTO newOrder) {
        return orderService.createOrder(newOrder);
    }

    @PostMapping("/orderItems")
    public List<OrderItem> createOrderItems(@RequestBody List<OrderItem> orderItems) {
        return orderService.createOrderItems(orderItems);
    }

    @GetMapping("/{id}")
    Order one(@PathVariable Integer id) {
        return orderService.findOrderById(id);
    }

    @GetMapping("/orderItems/{id}")
    public OrderItem getOrderItemById(@PathVariable Integer id) {
        return orderService.getOrderItemById(id);
    }

    @PutMapping("/{id}")
    Order updateOrder(@RequestBody Order newOrder, @PathVariable Integer id) {
        return orderService.updateOrder(newOrder, id);
    }

    @PutMapping("/orderItems/{id}")
    public OrderItem updateOrderItem(@PathVariable Integer id, @RequestBody OrderItem orderItem) {
        return orderService.updateOrderItem(orderItem, id);
    }

    @DeleteMapping("/{id}")
    Void deleteOrderById(@PathVariable Integer id) {
        return orderService.deleteOrder(id);
    }

    @DeleteMapping("/orderItems/{id}")
    Void deleteOrderItemById(@PathVariable Integer id) {
        return orderService.deleteOrderItem(id);
    }

}
