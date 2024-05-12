package com.mishka.mishkabackend.mapper;

import com.mishka.mishkabackend.Dtos.SignUpDto;
import com.mishka.mishkabackend.Dtos.UserDto;
import com.mishka.mishkabackend.Entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TestMappingMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
