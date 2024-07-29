package com.mishka.mishkabackend.Controller;

import com.mishka.mishkabackend.Entity.Tag.Tag;
import com.mishka.mishkabackend.Service.Tag.TagService;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping()
    public List<Tag> getAllTags() {
        return tagService.getAllTags();
    }

    @PostMapping
    public Tag createTag(@RequestParam @Valid String name) throws BadRequestException {
        return tagService.createTag(name);
    }
}
