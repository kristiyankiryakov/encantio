package com.mishka.mishkabackend.Repository.Order;

import com.mishka.mishkabackend.Entity.Order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
