package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Order;
import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders(int pageNumber, int pageSize) {
        PageRequest pageable = PageRequest.of(pageNumber, pageSize);
        Page<Order> orderPage = orderRepository.findAll(pageable);
        return orderPage.getContent();
    }

    @Override
    public Order createOrder(Order newOrder) {
        return orderRepository.save(newOrder);
    }

    @Override
    public Order findOrderById(Integer id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("order", id));
    }

    @Override
    public Order updateOrder(Order newOrder, Integer id) {
        return orderRepository.findById(id)
                .map(order -> {
                    order.setEmail(newOrder.getEmail());
                    return orderRepository.save(order);
                })
                .orElseGet(() -> {
                    newOrder.setId(id);
                    return orderRepository.save(newOrder);
                });
    }

    @Override
    public Void deleteOrder(Integer id) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            orderRepository.deleteById(id);
            return null;
        } else {
            throw new NotFoundException("order", id);
        }
    }
}
