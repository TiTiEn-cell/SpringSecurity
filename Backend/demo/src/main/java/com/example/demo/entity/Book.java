package com.example.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "books")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Author is required")
    private String author;

    private String category;

    private String publisher;

    @Min(value = 1900, message = "Published year invalid")
    private Integer publishedYear;

    @Min(value = 0, message = "Quantity cannot be negative")
    private Integer quantity;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String imageUrl;
}