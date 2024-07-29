package com.mishka.mishkabackend.Service.Product;

import com.mishka.mishkabackend.Entity.Product.Product;
import com.mishka.mishkabackend.Exception.NotFoundException;
import org.apache.coyote.BadRequestException;

import java.util.List;
import java.util.Map;

public interface ProductService {

    List<Product> getAllProducts(int pageNumber, int pageSize);

    Product createProduct(Product newProduct);

    Product findProductById(Integer id) throws NotFoundException;

    Product updateProduct(Product newProduct, Integer id);

    Void deleteProduct(Integer id) throws NotFoundException;

    Product handleTagToProduct(Integer productId, Integer tagId);
}
