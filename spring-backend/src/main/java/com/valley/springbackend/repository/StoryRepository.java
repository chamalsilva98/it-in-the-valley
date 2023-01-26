package com.valley.springbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valley.springbackend.models.Story;

public interface StoryRepository extends JpaRepository<Story, Long> {

    List<Story> findByUserId(Long id);

    List<Story> findByAdvertId(Long id);

}