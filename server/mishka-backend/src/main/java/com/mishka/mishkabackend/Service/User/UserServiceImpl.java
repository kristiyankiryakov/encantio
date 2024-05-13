package com.mishka.mishkabackend.Service.User;

import com.mishka.mishkabackend.Dtos.CredentialsDto;
import com.mishka.mishkabackend.Dtos.SignUpDto;
import com.mishka.mishkabackend.Dtos.UserDto;
import com.mishka.mishkabackend.Entity.User;
import com.mishka.mishkabackend.Exception.AppException;
import com.mishka.mishkabackend.Exception.NotFoundException;


import com.mishka.mishkabackend.Repository.UserRepository;

import com.mishka.mishkabackend.mapper.TestMappingMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final TestMappingMapper testMappingMapper;

    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("user", 1));
        return testMappingMapper.toUserDto(user);
    }

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByEmail(credentialsDto.getEmail())
                .orElseThrow(() -> new NotFoundException("Unknown user", 1));
        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())) {
            return testMappingMapper.toUserDto(user);
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto) {
        Optional<User> optionalUser = userRepository.findByEmail(userDto.getEmail());

        if (optionalUser.isPresent()) {
            throw new AppException("user already exists", HttpStatus.BAD_REQUEST);
        }

        User user = testMappingMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));

        User savedUser = userRepository.save(user);

        return testMappingMapper.toUserDto(user);
    }

}
