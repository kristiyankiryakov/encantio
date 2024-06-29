package com.mishka.mishkabackend.Service.Tag;

import com.mishka.mishkabackend.Entity.Tag.Tag;
import org.apache.coyote.BadRequestException;

import java.util.List;

public interface TagService {

    List<Tag> getAllTags();

    Tag createTag(String name) throws BadRequestException;
}
