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
//
//    @PostMapping("/products")
//    Product newProduct(@RequestBody Product newProduct) {
//        return productRepository.save(newProduct);
//    }
//
//
//    @GetMapping("/products/{id}")
//    Product one(@PathVariable Integer id) {
//
//        return productRepository.findById(id)
//                .orElseThrow(() -> new ProductNotFoundException(id));
//    }
//
//    @PutMapping("/products/{id}")
//    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Integer id) {
//        return productRepository.findById(id)
//                .map(product -> {
//                    product.setTitle(newProduct.getTitle());
//                    product.setDescription(newProduct.getDescription());
//                    product.setImages(newProduct.getImages());
//                    product.setStock(newProduct.getStock());
//
//                    return productRepository.save(product);
//                })
//                .orElseGet(() -> {
//                    newProduct.setId(id);
//                    return productRepository.save(newProduct);
//                });
//    }
//
//    @DeleteMapping("/products/{id}")
//    void deleteProductById(@PathVariable Integer id) {
//        productRepository.deleteById(id);
//    }

}
