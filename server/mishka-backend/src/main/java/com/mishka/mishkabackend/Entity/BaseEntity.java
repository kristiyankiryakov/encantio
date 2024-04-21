package com.mishka.mishkabackend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Data
@MappedSuperclass
public class BaseEntity {

    @Id
    @GeneratedValue
    private Integer id;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Date createAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updatedAt;
}
