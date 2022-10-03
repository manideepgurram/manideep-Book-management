package com.digitalBook;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.digitalBook.DTO.PurchaseBookDTO;
import com.digitalBook.entity.BookEntity;
import com.digitalBook.repository.BookRepository;
import com.digitalBook.repository.PurchaseBookRepository;
import com.digitalBook.service.BookService;
import com.digitalBook.springjwt.repository.UserRepository;

@ExtendWith(MockitoExtension.class)

public class TestService {

	@InjectMocks
	BookService bookService;
	@Mock
	BookRepository bookRepository;
	@Mock
	UserRepository userRepository;
	@Mock
	PurchaseBookRepository purchaseBookRepository;
	
	@Test
	void testfindBooks() throws Exception{
		List<BookEntity> books = new ArrayList<>();
		BookEntity bookEntity =new BookEntity();
		bookEntity.setAuthor("Deep"); 
		bookEntity.setCategory("comedy");
		bookEntity.setId(1);
		bookEntity.setPrice(500);
		bookEntity.setPublisher("mani");
		bookEntity.setDateofPublished("2022-09-30");
		bookEntity.setTitle("MANI");	
		books.add(bookEntity);
	    when(bookRepository.findAll()).thenReturn(books);
	    Iterable<BookEntity> getBooks=bookService.getBooks();
	    assertEquals(books, getBooks);
	    
	    
	}

	@Test
void postBook() {
		
		BookEntity bookEntity = new BookEntity();
		bookEntity.setAuthor("Deep"); 
		bookEntity.setCategory("comic");
		bookEntity.setId(1);
		bookEntity.setPrice(500);
		bookEntity.setPublisher("mani");
		bookEntity.setDateofPublished("2022-09-30");
		bookEntity.setTitle("BAt-man");
		
		Mockito.when( bookRepository.save(bookEntity)).thenReturn(bookEntity);
		BookEntity savebookId = bookService.postBook(bookEntity);
		assertEquals(bookEntity, savebookId);
	
	
	}
	@Test
	void testgetBookbyid() throws Exception {
		Optional<BookEntity> books=Optional.of(new BookEntity());
		Mockito.when(bookRepository.findById(1)).thenReturn(books);
		Optional<BookEntity> bookbyId=bookService.getBookbyid(1);
		assertEquals(books, bookbyId);
	}
	@Test
	void purachaseBook() {
		PurchaseBookDTO purchaseBook = new PurchaseBookDTO();
		purchaseBook.setBookId(1);
		purchaseBook.setUseremail("mani@gmail.com");
		purchaseBook.setUsername("mani");
		
		BookEntity bookEntity = new BookEntity();

		String response="success";
		Optional<BookEntity> option=Optional.of(bookEntity);
		Mockito.when(bookRepository.findById(purchaseBook.getBookId())).thenReturn(option);
		String savebookId = bookService.purachaseBook(purchaseBook);
		assertEquals(response, savebookId);
	}
	
	
	
}
