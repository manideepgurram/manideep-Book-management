package com.digitalBook.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.digitalBook.DTO.PurchaseBookDTO;
import com.digitalBook.entity.BookEntity;
import com.digitalBook.entity.PurchaseBook;
import com.digitalBook.service.BookService;
@CrossOrigin
@RestController
@RequestMapping("/digitalbooks")
public class BookController  {
	@Autowired
	BookService bookService;
   @GetMapping
   public Iterable<BookEntity> getBooks() {
	  return bookService.getBooks();
   }
   @PostMapping
   @ResponseStatus(code=HttpStatus.CREATED)
   public Integer postBook(@RequestBody BookEntity book) {
	   bookService.postBook(book);
		return book.getId();
   }
   @DeleteMapping("/{id}")
   public void delete(@PathVariable ("id") Integer id) {
       bookService.delete(id);
   }
   @GetMapping("/{id}")
   public Optional<BookEntity> getBookbyid(@PathVariable Integer id) {
	return   bookService.getBookbyid(id);
	   
   }
   
   @PostMapping("/buy")
   public String purachaseBook(@RequestBody PurchaseBookDTO purchaseBookDTO) {
	return   bookService.purachaseBook(purchaseBookDTO);
	   
   }
   @PostMapping("/readers/{emailId}/books")
   public List<PurchaseBook> getPurachaseBook(@PathVariable String emailId) {
	return   bookService.getPurachaseBook(emailId);
	   
   }
   
   @PostMapping("/readers/{emailId}/books/{bookId}")
   public Optional<BookEntity> readABook(@PathVariable String emailId,@PathVariable int bookId) {
	return   bookService.readABook(emailId,bookId);
	   
   }
}
