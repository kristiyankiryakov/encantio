package com.mishka.mishkabackend.Service.Order;

import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.Order.OrderItemRepository;
import com.mishka.mishkabackend.Repository.Order.OrderRepository;
import com.mishka.mishkabackend.Service.Product.ProductService;
import com.mishka.mishkabackend.Validator.RestValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final OrderItemRepository orderItemRepository;

    private final ProductService productService;

    private final RestValidator restValidator;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, OrderItemRepository orderItemRepository, ProductService productService, RestValidator restValidator) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.productService = productService;
        this.restValidator = restValidator;
    }

    @Override
    public List<Order> getAllOrders(int pageNumber, int pageSize) {
        PageRequest pageable = PageRequest.of(pageNumber, pageSize);
        Page<Order> orderPage = orderRepository.findAll(pageable);
        return orderPage.getContent();
    }


    @Override
    public OrderItem getOrderItemById(Integer id) {
        return orderItemRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Order item", id));
    }

    @Override
    public Order createOrder(String customerEmail, List<OrderItem> orderItems) {

        restValidator.validateEmailFormat(customerEmail);
        restValidator.checkListNotEmpty(orderItems);

        Order createdOrder = this.initiliazeOrder(customerEmail);

        this.addOrderItems(createdOrder, orderItems);

        return createdOrder;
    }

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
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
    public Void deleteOrder(Integer id) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            orderRepository.deleteById(id);
            return null;
        } else {
            throw new NotFoundException("order", id);
        }
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

    private void addOrderItems(Order order, List<OrderItem> orderItems) {

        for (OrderItem orderItem : orderItems) {
            restValidator.isValidIntegerId(orderItem.getProductId());
            productService.findProductById(orderItem.getProductId());

            orderItem.setOrder(order);
            this.createOrderItem(orderItem);
            this.calculateOrderPrice(order, orderItem);
        }

    }

    private void calculateOrderPrice(Order order, OrderItem orderItem) {
        order.setTotal(order.getTotal().add(orderItem.getPrice()));
    }

    private Order initiliazeOrder(String customerEmail) {
        Order newOrder = new Order();
        newOrder.setEmail(customerEmail);

        return orderRepository.save(newOrder);
    }

}
