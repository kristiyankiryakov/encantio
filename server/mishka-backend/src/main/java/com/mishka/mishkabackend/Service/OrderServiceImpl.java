package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Order;
import com.mishka.mishkabackend.Entity.OrderItem;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.OrderItemRepository;
import com.mishka.mishkabackend.Repository.OrderRepository;
import com.mishka.mishkabackend.Repository.ProductRepository;
import com.mishka.mishkabackend.Validator.RestValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final OrderItemService orderItemService;

    private final ProductService productService;

    private final RestValidator restValidator;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, OrderItemService orderItemService, ProductService productService, RestValidator restValidator) {
        this.orderRepository = orderRepository;
        this.orderItemService = orderItemService;
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
    public Order createOrder(String customerEmail, List<OrderItem> orderItems) {

        restValidator.validateEmailFormat(customerEmail);
        restValidator.checkListNotEmpty(orderItems);

        Order createdOrder = this.initiliazeOrder(customerEmail);

        this.addOrderItems(createdOrder, orderItems);

        return createdOrder;
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

    private void addOrderItems(Order order, List<OrderItem> orderItems) {

        for (OrderItem orderItem : orderItems) {

            if (!productService.doesProductExist(orderItem.getProductId())) {
                throw new NotFoundException("Product", orderItem.getProductId());
            }
            orderItem.setOrder(order);
            orderItemService.createOrderItem(orderItem);
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
