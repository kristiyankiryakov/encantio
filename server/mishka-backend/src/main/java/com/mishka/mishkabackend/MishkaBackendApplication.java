package com.mishka.mishkabackend;

import com.mishka.mishkabackend.Entity.Product;
import com.mishka.mishkabackend.Repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class MishkaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(MishkaBackendApplication.class, args);
    }

}
