package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Product.Product;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Service.Product.ProductService;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    Product newProduct(@Valid @RequestBody Product newProduct) throws BadRequestException {
        return productService.createProduct(newProduct);
    }


    @GetMapping("/{id}")
    Product one(@Valid @PathVariable Integer id) {
        return productService.findProductById(id);
    }

    @PutMapping("/{id}")
    Product updateProduct(@Valid @RequestBody Product newProduct,@Valid @PathVariable Integer id) {
        return productService.updateProduct(newProduct, id);
    }

    @DeleteMapping("/{id}")
    Void deleteProductById(@PathVariable @Valid Integer id) {
        return productService.deleteProduct(id);
    }

    @PostMapping("/{productId}/{tagId}")
    Product addTagToProduct(@PathVariable @Valid Integer productId, @PathVariable @Valid Integer tagId) throws BadRequestException, NotFoundException {
        return productService.handleTagToProduct(productId, tagId);
    }

}
