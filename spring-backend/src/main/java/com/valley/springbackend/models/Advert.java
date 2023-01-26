package com.valley.springbackend.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    @OneToMany(mappedBy = "advert")
    @JsonIgnore
    private List<Story> stories;

    @OneToMany(mappedBy = "advert")
    @JsonIgnore
    private List<Photograph> photographs;

    @OneToOne(mappedBy = "advert")
    @JsonIgnore
    private Magazine magazine;

    @ManyToOne
    private User user;

    public Advert(String title, String description) {
        this.title = title;
        this.description = description;
    }

}
