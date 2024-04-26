package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Order;
import com.mishka.mishkabackend.Service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

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
    Order create(@RequestBody Order newOrder) {
        return orderService.createOrder(newOrder.getEmail(), newOrder.getOrderItems());
    }

    @GetMapping("/{id}")
    Order one(@PathVariable Integer id) {
        return orderService.findOrderById(id);
    }

    @PutMapping("/{id}")
    Order updateOrder(@RequestBody Order newOrder, @PathVariable Integer id) {
        return orderService.updateOrder(newOrder, id);
    }

    @DeleteMapping("/{id}")
    Void deleteOrderById(@PathVariable Integer id) {
        return orderService.deleteOrder(id);
    }

}
