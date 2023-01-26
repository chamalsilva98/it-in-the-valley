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

import com.valley.springbackend.models.Magazine;
import com.valley.springbackend.repository.MagazineRepository;

@RestController
@RequestMapping("/api/magazine")
public class MagazineController {

    private final MagazineRepository repository;

    MagazineController(MagazineRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    List<Magazine> all() {
        return repository.findAll();
    }

    @PostMapping()
    Magazine newMagazine(@RequestBody Magazine magazine) {
        return repository.save(magazine);
    }

    @GetMapping("/{id}")
    Magazine one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @GetMapping("/user/{id}")
    List<Magazine> magazineByUser(@PathVariable Long id) {
        return repository.findByAdvertUserId(id);
    }

    @PutMapping("/{id}")
    Magazine replaceMagazine(@RequestBody Magazine newMagazine, @PathVariable Long id) {
        return repository.findById(id)
                .map(magazine -> {
                    magazine.setDocument(newMagazine.getDocument());
                    return repository.save(magazine);
                })
                .orElseGet(() -> {
                    newMagazine.setId(id);
                    return repository.save(newMagazine);
                });
    }

    @DeleteMapping("/{id}")
    void deleteMagazine(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
