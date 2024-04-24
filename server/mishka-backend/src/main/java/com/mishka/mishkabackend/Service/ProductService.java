package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Exception.ProductNotFoundException;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts(int pageNumber, int pageSize);

    Product createProduct(Product newProduct);

    Product findProductById(Integer id) throws ProductNotFoundException;

    Product updateProduct(Product newProduct, Integer id);

    Void deleteProduct(Integer id) throws ProductNotFoundException;
}
