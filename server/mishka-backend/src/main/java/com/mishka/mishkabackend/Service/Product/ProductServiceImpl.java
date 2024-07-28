package com.mishka.mishkabackend.Service.Product;

import com.mishka.mishkabackend.Entity.Product.Product;
import com.mishka.mishkabackend.Entity.Tag.Tag;
import com.mishka.mishkabackend.Exception.NotFoundException;
import com.mishka.mishkabackend.Repository.Product.ProductRepository;
import com.mishka.mishkabackend.Repository.Tag.TagRepository;
import com.mishka.mishkabackend.Validator.RestValidator;
import org.apache.coyote.BadRequestException;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.naming.LimitExceededException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    @Autowired
    private RestValidator restValidator;

    @Autowired
    private TagRepository tagRepository;

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

        restValidator.isValidIntegerId(id);


        return productRepository.findById(id)
                .map(product -> {
                    product.setDescription(newProduct.getDescription());
                    product.setImages(newProduct.getImages());
                    product.setPrice(newProduct.getPrice());
                    product.setStock(newProduct.getStock());
                    product.setFeatured(newProduct.getFeatured());
                    product.setThumbnail(newProduct.getThumbnail());
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
    public Product handleTagToProduct(Integer productId, Integer tagId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new NotFoundException("product", productId));

        Tag tag = tagRepository.findById(tagId)
                .orElseThrow(() -> new NotFoundException("tag", tagId));

        if (product.getTags().contains(tag)) {
            product.getTags().removeIf(t -> t.equals(tag));
        } else {
            product.getTags().add(tag);
        }

        return productRepository.save(product);

    }

}
