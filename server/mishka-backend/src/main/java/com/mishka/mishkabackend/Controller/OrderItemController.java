package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.OrderItem;
import com.mishka.mishkabackend.Service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orderItems")
public class OrderItemController {

    private final OrderItemService orderItemService;


    @Autowired
    public OrderItemController(OrderItemService orderItemService) {
        this.orderItemService = orderItemService;
    }

    @PostMapping
    public List<OrderItem> createOrderItems(@RequestBody List<OrderItem> orderItems) {
        return orderItemService.createOrderItems(orderItems);
    }

    @PutMapping("/{id}")
    public OrderItem updateOrderItem(@PathVariable Integer id, @RequestBody OrderItem orderItem) {
        return orderItemService.updateOrderItem(orderItem, id);
    }

    @GetMapping("/{id}")
    public OrderItem getOrderItemById(@PathVariable Integer id) {
        return orderItemService.getOrderItemById(id);
    }

    @DeleteMapping("/{id}")
    Void deleteOrderById(@PathVariable Integer id) {
        return orderItemService.deleteOrderItem(id);
    }
}
