package com.valley.springbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valley.springbackend.models.Magazine;

public interface MagazineRepository extends JpaRepository<Magazine, Long> {
    List<Magazine> findByAdvertUserId(Long id);
}
