package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Dtos.Order.OrderDTO;
import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import com.mishka.mishkabackend.Service.Order.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@Validated
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
    OrderDTO create(@Valid @RequestBody OrderDTO newOrder) {
        return orderService.createOrder(newOrder);
    }

    @PostMapping("/orderItems")
    public List<OrderItem> createOrderItems(@Valid @RequestBody List<OrderItem> orderItems) {
        return orderService.createOrderItems(orderItems);
    }

    @GetMapping("/{id}")
    Order one(@Valid @PathVariable Integer id) {
        return orderService.findOrderById(id);
    }

    @GetMapping("/orderItems/{id}")
    public OrderItem getOrderItemById(@Valid @PathVariable Integer id) {
        return orderService.getOrderItemById(id);
    }

    @PutMapping("/{id}")
    Order updateOrder(@Valid @RequestBody Order newOrder, @Valid @PathVariable Integer id) {
        return orderService.updateOrder(newOrder, id);
    }

    @PutMapping("/orderItems/{id}")
    public OrderItem updateOrderItem(@Valid @PathVariable Integer id, @Valid @RequestBody OrderItem orderItem) {
        return orderService.updateOrderItem(orderItem, id);
    }

    @DeleteMapping("/{id}")
    Void deleteOrderById(@Valid @PathVariable Integer id) {
        return orderService.deleteOrder(id);
    }

    @DeleteMapping("/orderItems/{id}")
    Void deleteOrderItemById(@Valid @PathVariable Integer id) {
        return orderService.deleteOrderItem(id);
    }

}
