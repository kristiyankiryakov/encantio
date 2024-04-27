package com.mishka.mishkabackend.Exception;

class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}