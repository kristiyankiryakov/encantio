package com.mishka.mishkabackend.Exception;

import lombok.Getter;

@Getter
public class NotFoundException extends RuntimeException {

    private final String type;
    private final Integer id;

    public NotFoundException(String type, Integer id) {
        super(type + " not found with ID: " + id);
        this.type = type;
        this.id = id;
    }


}