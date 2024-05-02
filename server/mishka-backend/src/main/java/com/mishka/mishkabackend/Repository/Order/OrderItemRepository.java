package com.mishka.mishkabackend.Repository;

import com.mishka.mishkabackend.Entity.Order.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}
