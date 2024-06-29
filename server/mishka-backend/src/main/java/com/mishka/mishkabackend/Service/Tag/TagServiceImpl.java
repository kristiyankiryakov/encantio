package com.mishka.mishkabackend.Service.Tag;

import com.mishka.mishkabackend.Entity.Tag.Tag;
import com.mishka.mishkabackend.Repository.Tag.TagRepository;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private final TagRepository tagRepository;

    @Autowired
    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    public Tag createTag(String name) throws BadRequestException {
        Optional<Tag> existingTag = tagRepository.findByName(name);
        if (existingTag.isPresent()) {
            throw new BadRequestException("tag with name " + name + " already exists!");
        }

        Tag tag = new Tag();
        tag.setName(name);
        return tagRepository.save(tag);
    }
}
