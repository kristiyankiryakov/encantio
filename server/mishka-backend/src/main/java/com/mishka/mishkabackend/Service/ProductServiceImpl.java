package com.mishka.mishkabackend.Service;

import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts(int pageNumber, int pageSize) {
        PageRequest pageable = PageRequest.of(pageNumber, pageSize);
        Page<Product> productPage = productRepository.findAll(pageable);
        return productPage.getContent();
    }

    @Override
    public Product createProduct(Product newProduct) {
        return productRepository.save(newProduct);
    }

    @Override
    public Product findProductById(Integer id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("product", id));
    }

    @Override
    public Product updateProduct(Product newProduct, Integer id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setTitle(newProduct.getTitle());
                    product.setDescription(newProduct.getDescription());
                    product.setImages(newProduct.getImages());
                    product.setPrice(newProduct.getPrice());
                    product.setStock(newProduct.getStock());

                    return productRepository.save(product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return productRepository.save(newProduct);
                });
    }

    @Override
    public Void deleteProduct(Integer id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            productRepository.deleteById(id);
            return null;
        } else {
            throw new NotFoundException("product", id);

        }
    }

    @Override
    public boolean doesProductExist(Integer id) {
        return productRepository.existsById(id);
    }

}
