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

import com.valley.springbackend.models.Photograph;
import com.valley.springbackend.repository.PhotographRepository;

@RestController
@RequestMapping("/api/photograph")
public class PhotographController {

    private final PhotographRepository repository;

    PhotographController(PhotographRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    List<Photograph> all() {
        return repository.findAll();
    }

    @PostMapping()
    Photograph newPhotograph(@RequestBody Photograph photograph) {
        return repository.save(photograph);
    }

    @GetMapping("/{id}")
    Photograph one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    Photograph replacePhotograph(@RequestBody Photograph newPhotograph, @PathVariable Long id) {
        return repository.findById(id)
                .map(photograph -> {
                    photograph.setPhotograph(newPhotograph.getPhotograph());
                    return repository.save(photograph);
                })
                .orElseGet(() -> {
                    newPhotograph.setId(id);
                    return repository.save(newPhotograph);
                });
    }

    @DeleteMapping("/{id}")
    void deletePhotograph(@PathVariable Long id) {
        repository.deleteById(id);
    }

}