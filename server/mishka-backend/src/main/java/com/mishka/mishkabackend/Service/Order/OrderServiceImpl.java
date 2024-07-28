package com.mishka.mishkabackend.Service.Order;

import com.mishka.mishkabackend.Dtos.Order.OrderDTO;
import com.mishka.mishkabackend.Dtos.Order.OrderItemDTO;
import com.mishka.mishkabackend.Entity.Order.CustomerInfo;
import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import com.mishka.mishkabackend.Enums.DeliveryType;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.Order.OrderItemRepository;
import com.mishka.mishkabackend.Repository.Order.OrderRepository;
import com.mishka.mishkabackend.Service.Product.ProductService;
import com.mishka.mishkabackend.Validator.RestValidator;
import com.mishka.mishkabackend.mapper.OrderMapper;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final OrderItemRepository orderItemRepository;

    private final ProductService productService;

    private final RestValidator restValidator;

    private final OrderMapper orderMapper;


    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, OrderItemRepository orderItemRepository, ProductService productService, RestValidator restValidator, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.productService = productService;
        this.restValidator = restValidator;
        this.orderMapper = orderMapper;
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
    public OrderDTO createOrder(OrderDTO newOrder) {

        Order createdOrder = this.initiliazeOrder(newOrder);

        this.addOrderItems(createdOrder, newOrder.getOrderItems());

        List<OrderItem> orderItems = orderMapper.orderItemDTOsToOrderItems(newOrder.getOrderItems());
        BigDecimal total = this.calculateOrderTotal(createdOrder, orderItems);

        createdOrder.setTotal(total);

        Order savedOrder = orderRepository.save(createdOrder);

        return orderMapper.orderToOrderDTO(savedOrder);
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
                    order.getCustomerInfo().setEmail(newOrder.getCustomerInfo().getEmail());
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

    private void addOrderItems(Order order, List<OrderItemDTO> orderItemDTOs) {

        List<OrderItem> orderItems = orderMapper.orderItemDTOsToOrderItems(orderItemDTOs);
        for (OrderItem orderItem : orderItems) {
            restValidator.isValidIntegerId(orderItem.getProductId());
            productService.findProductById(orderItem.getProductId());

            orderItem.setOrder(order);
        }
        order.setOrderItems(orderItems);
    }

    private BigDecimal calculateOrderTotal(Order order, List<OrderItem> orderItems) {
        BigDecimal total = BigDecimal.ZERO;

        for (OrderItem orderItem : orderItems) {
            // Calculate total price for the current order item
            BigDecimal orderItemTotal = productService.findProductById(orderItem.getProductId()).getPrice().multiply(BigDecimal.valueOf(orderItem.getQuantity()));
            total = total.add(orderItemTotal);
        }

        // Set the total price for the order
        order.setTotal(total);

        return total;
    }

    private Order initiliazeOrder(OrderDTO newOrder) {
        Order order = new Order();
        order.setCustomerInfo(newOrder.getCustomerInfo());
        order.setOrderItems(new ArrayList<>());
        order.setDeliveryType(newOrder.getDeliveryType());

        if (newOrder.getDeliveryType() == DeliveryType.DELIVERY) {
            order.setAddress(newOrder.getAddress());
        }

        return order;
    }

}
