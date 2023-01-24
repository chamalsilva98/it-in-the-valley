package com.valley.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valley.springbackend.models.Advert;

public interface AdvertRepository extends JpaRepository<Advert, Long> {

}
