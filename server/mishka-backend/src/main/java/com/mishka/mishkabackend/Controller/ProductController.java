package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Product.Product;
import com.mishka.mishkabackend.Service.Product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    List<Product> all(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "20") int pageSize
    ) {
        return productService.getAllProducts(pageNumber, pageSize);
    }

    @PostMapping()
    Product newProduct(@RequestBody Product newProduct) {
        return productService.createProduct(newProduct);
    }


    @GetMapping("/{id}")
    Product one(@PathVariable Integer id) {
        return productService.findProductById(id);
    }

    @PutMapping("/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Integer id) {
        return productService.updateProduct(newProduct, id);
    }

    @DeleteMapping("/{id}")
    Void deleteProductById(@PathVariable Integer id) {
        return productService.deleteProduct(id);
    }

}
