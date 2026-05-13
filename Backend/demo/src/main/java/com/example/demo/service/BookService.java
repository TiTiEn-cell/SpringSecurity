package com.example.demo.service;

import com.example.demo.entity.Book;

import java.util.List;

public interface BookService {

    List<Book> getAllBooks();

    Book getBookById(Long id);

    Book createBook(Book book);

    Book updateBook(Long id, Book book);

    void deleteBook(Long id);

    List<Book> searchBooks(String keyword);
}