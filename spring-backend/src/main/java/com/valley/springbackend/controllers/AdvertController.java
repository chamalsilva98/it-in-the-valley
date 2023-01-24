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

import com.valley.springbackend.models.Advert;
import com.valley.springbackend.repository.AdvertRepository;

@RestController
@RequestMapping("/api/advert")
public class AdvertController {

    private final AdvertRepository repository;

    AdvertController(AdvertRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    List<Advert> all() {
        return repository.findAll();
    }

    @PostMapping()
    Advert newAdvert(@RequestBody Advert advert) {
        return repository.save(advert);
    }

    @GetMapping("/{id}")
    Advert one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    Advert replaceAdvert(@RequestBody Advert newAdvert, @PathVariable Long id) {
        return repository.findById(id)
                .map(advert -> {
                    advert.setTitle(newAdvert.getTitle());
                    advert.setDescription(newAdvert.getDescription());
                    return repository.save(advert);
                })
                .orElseGet(() -> {
                    newAdvert.setId(id);
                    return repository.save(newAdvert);
                });
    }

    @DeleteMapping("/{id}")
    void deleteStory(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
