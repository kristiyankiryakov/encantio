package com.mishka.mishkabackend.Service.User;

import com.mishka.mishkabackend.Dtos.CredentialsDto;
import com.mishka.mishkabackend.Dtos.SignUpDto;
import com.mishka.mishkabackend.Dtos.UserDto;

public interface UserService {

    UserDto findByEmail(String email);

    UserDto register(SignUpDto userDto);

    UserDto login(CredentialsDto credentialsDto);
}
