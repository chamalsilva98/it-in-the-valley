package com.valley.springbackend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valley.springbackend.models.Story;
import com.valley.springbackend.repository.StoryRepository;

@RestController
@RequestMapping("/api/story")
public class StroyController {

    private final StoryRepository repository;

    StroyController(StoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    List<Story> all() {
        return repository.findAll();
    }

    @PostMapping()
    Story newStory(@RequestBody Story story) {
        return repository.save(story);
    }

    @GetMapping("/{id}")
    Story one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @GetMapping("/user/{id}")
    List<Story> storyByUser(@PathVariable Long id) {
        return repository.findByUserId(id);
    }

    @GetMapping("/advert/{id}")
    List<Story> storyByAdvert(@PathVariable Long id) {
        return repository.findByAdvertId(id);
    }

    @PutMapping("/{id}")
    Story replaceStory(@RequestBody Story newStory, @PathVariable Long id) {
        return repository.findById(id)
                .map(story -> {
                    story.setPayment(newStory.getPayment());
                    return repository.save(story);
                })
                .orElseGet(() -> {
                    newStory.setId(id);
                    return repository.save(newStory);
                });
    }

    @DeleteMapping("/{id}")
    void deleteStory(@PathVariable Long id) {
        repository.deleteById(id);
    }

}