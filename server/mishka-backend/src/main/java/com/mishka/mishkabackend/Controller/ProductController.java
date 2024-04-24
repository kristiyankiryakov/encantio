package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    List<Product> all(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "20") int pageSize
    ) {
        return productService.getAllProducts(pageNumber, pageSize);
    }

    @PostMapping("/products")
    Product newProduct(@RequestBody Product newProduct) {
        return productService.createProduct(newProduct);
    }


    @GetMapping("/products/{id}")
    Product one(@PathVariable Integer id) {
        return productService.findProductById(id);
    }

    @PutMapping("/products/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Integer id) {
        return productService.updateProduct(newProduct, id);
    }

    @DeleteMapping("/products/{id}")
    Void deleteProductById(@PathVariable Integer id) {
        return productService.deleteProduct(id);
    }

}
