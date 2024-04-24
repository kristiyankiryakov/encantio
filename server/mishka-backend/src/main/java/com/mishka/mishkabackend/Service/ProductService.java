package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts(int pageNumber, int pageSize);

}
