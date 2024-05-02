package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Order;
import com.mishka.mishkabackend.Entity.OrderItem;
import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderItemImpl implements OrderItemService {

    private final OrderItemRepository orderItemRepository;

    @Autowired
    public OrderItemImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public List<OrderItem> createOrderItems(List<OrderItem> orderItems) {
        List<OrderItem> createdOrderItems = new ArrayList<>();
        for (OrderItem orderItem : orderItems) {
            OrderItem createdOrderItem = orderItemRepository.save(orderItem);
            createdOrderItems.add(createdOrderItem);
        }
        return createdOrderItems;
    }

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    @Override
    public OrderItem getOrderItemById(Integer id) {
        return orderItemRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Order item", id));
    }

    @Override
    public OrderItem updateOrderItem(OrderItem newOrderItem, Integer id) {
        return orderItemRepository.findById(id)
                .map(orderItem -> {
                    orderItem.setOrder(newOrderItem.getOrder());
                    orderItem.setQuantity(newOrderItem.getQuantity());
                    orderItem.setProductId(newOrderItem.getProductId());

                    return orderItemRepository.save(orderItem);
                })
                .orElseGet(() -> {
                    newOrderItem.setId(id);
                    return orderItemRepository.save(newOrderItem);
                });
    }

    @Override
    public Void deleteOrderItem(Integer id) {
        Optional<OrderItem> orderItemOptional = orderItemRepository.findById(id);
        if (orderItemOptional.isPresent()) {
            orderItemRepository.deleteById(id);
            return null;
        } else {
            throw new NotFoundException("Order item", id);

        }
    }

}
