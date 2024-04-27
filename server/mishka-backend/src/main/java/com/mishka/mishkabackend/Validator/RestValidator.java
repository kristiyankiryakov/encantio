package com.mishka.mishkabackend.Validator;

import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@Component
public class RestValidator {

    public void checkNullOrBlank(String field) {

        if (field == null || field.trim().isEmpty()) {
            try {
                throw new BadRequestException("Field '" + field + "' is null or blank.");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }
    }

    public void checkListNotEmpty(List<?> list) {
        if (list == null || list.isEmpty()) {
            try {
                throw new BadRequestException("list is null or empty.");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }
    }

    public void validateEmailFormat(String email) {
        this.checkNullOrBlank(email);

        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        if (!pattern.matcher(email).matches()) {
            try {
                throw new BadRequestException("Email is not in right format.");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }
    }

    public void isValidIntegerId(Object id) {
        if (id instanceof Integer) {

        } else {
            try {
                throw new BadRequestException("Id:" + id + " must be of type Integer and not null");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }
    }

}
