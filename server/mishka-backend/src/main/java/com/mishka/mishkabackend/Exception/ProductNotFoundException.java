package com.mishka.mishkabackend.Exception;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Integer id) {

        super("Could not find product " + id);
    }

}
