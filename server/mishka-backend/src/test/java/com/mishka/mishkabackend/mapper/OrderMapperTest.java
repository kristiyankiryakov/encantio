package com.mishka.mishkabackend.mapper;

import static org.mockito.Mockito.*;

import com.mishka.mishkabackend.Dtos.Order.OrderDTO;
import com.mishka.mishkabackend.Dtos.Order.OrderItemDTO;
import com.mishka.mishkabackend.Entity.Order.Address;
import com.mishka.mishkabackend.Entity.Order.CustomerInfo;
import com.mishka.mishkabackend.Entity.Order.Order;
import com.mishka.mishkabackend.Entity.Order.OrderItem;
import com.mishka.mishkabackend.Enums.DeliveryType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


class OrderMapperTest {
    //    private Order order = new Order();
    private final OrderMapper orderMapper = Mappers.getMapper(OrderMapper.class);

    @Test
    public void shouldMapOrderDTOToOrder() {
        OrderDTO orderDTO = getDto();

        Order order = orderMapper.orderDTOToOrder(orderDTO);

        assertEquals(orderDTO.getId(), order.getId());

        assertEquals(orderDTO.getCustomerInfo().getFirstName(), order.getCustomerInfo().getFirstName());
        assertEquals(orderDTO.getCustomerInfo().getLastName(), order.getCustomerInfo().getLastName());
        assertEquals(orderDTO.getCustomerInfo().getEmail(), order.getCustomerInfo().getEmail());
        assertEquals(orderDTO.getCustomerInfo().getPhone(), order.getCustomerInfo().getPhone());

        assertEquals(orderDTO.getAddress().getCity(), order.getAddress().getCity());
        assertEquals(orderDTO.getAddress().getState(), order.getAddress().getState());
        assertEquals(orderDTO.getAddress().getStreet(), order.getAddress().getStreet());
    }

    private static OrderDTO getDto() {
        OrderItemDTO orderItemDTO = new OrderItemDTO(1L, 1, 1);

        List<OrderItemDTO> list = new ArrayList<>();
        list.add(orderItemDTO);

        CustomerInfo customerInfo = new CustomerInfo();
        customerInfo.setFirstName("Pesho");
        customerInfo.setLastName("Stratiev");
        customerInfo.setEmail("test@test.com");
        customerInfo.setPhone("+359882760440");

        Address address = new Address();
        address.setCity("Haskovo");
        address.setState("Haskovo");
        address.setStreet("Street123");

        return new OrderDTO(1, list, customerInfo, address, DeliveryType.DELIVERY, BigDecimal.valueOf(0));
    }

}