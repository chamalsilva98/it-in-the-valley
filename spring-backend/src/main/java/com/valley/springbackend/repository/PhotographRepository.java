package com.valley.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valley.springbackend.models.Photograph;

public interface PhotographRepository extends JpaRepository<Photograph, Long> {

}