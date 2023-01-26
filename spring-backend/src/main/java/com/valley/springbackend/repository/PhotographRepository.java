package com.valley.springbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valley.springbackend.models.Photograph;

public interface PhotographRepository extends JpaRepository<Photograph, Long> {

    List<Photograph> findByUserId(Long id);

    List<Photograph> findByAdvertId(Long id);

}