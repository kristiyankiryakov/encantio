package com.mishka.mishkabackend.Entity.Tag;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mishka.mishkabackend.Entity.BaseEntity;
import com.mishka.mishkabackend.Entity.Product.Product;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tag extends BaseEntity {

    @Column
    @NotNull
    String name;

    @ManyToMany(mappedBy = "tags")
    @JsonIgnore
    private List<Product> products;
}
