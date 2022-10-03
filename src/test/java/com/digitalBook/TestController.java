package com.digitalBook;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
import com.digitalBook.controller.BookController;
import com.digitalBook.entity.BookEntity;
import com.digitalBook.entity.PurchaseBook;
import com.digitalBook.service.BookService;

@ExtendWith(MockitoExtension.class)
public class TestController {

	@InjectMocks
	BookController bookController;
	@Mock
	BookService bookService;

	@Test
	void testfindBooks() {
		List<BookEntity> bookEntity = new ArrayList<>();
		BookEntity books = new BookEntity();
		books.setAuthor("Chethan");
		books.setCategory("study");
		books.setDateofPublished("07-09-2021");
		books.setId(1);
		books.setPrice(200);
		books.setPublisher("one c");
		books.setTitle("Java");
		bookEntity.add(books);
		Mockito.when(bookService.getBooks()).thenReturn(bookEntity);
		Iterable<BookEntity> getBooks = bookController.getBooks();
		assertEquals(bookEntity, getBooks);
	}

	@Test
	void testsaveBook() {

		BookEntity books = new BookEntity();
		books.setAuthor("Bagath");
		books.setCategory("comedy");
		books.setDateofPublished("07-09-2021");
		books.setId(2);
		books.setPrice(300);
		books.setPublisher("one c");
		books.setTitle("funn");
		Mockito.when(bookService.postBook(books)).thenReturn(books);
		Integer savebookId = bookController.postBook(books);
		assertEquals(2, savebookId);

	}
	@Test
	void testgetBookbyid() throws Exception {
		Optional<BookEntity> books=Optional.of(new BookEntity());
		Mockito.when(bookService.getBookbyid(1)).thenReturn(books);
		Optional<BookEntity> bookbyId=bookController.getBookbyid(1);
		assertEquals(books, bookbyId);
	}
	

	@Test
	void purachaseBook() {
		PurchaseBookDTO purchaseBookDTO = new PurchaseBookDTO();
		purchaseBookDTO.setBookId(1);
		purchaseBookDTO.setUseremail("mani@gmail.com");
		purchaseBookDTO.setUsername("mani");
		String response = "success";
		Mockito.when(bookService.purachaseBook(purchaseBookDTO)).thenReturn(response);
		String savebookId = bookController.purachaseBook(purchaseBookDTO);
		assertEquals(response, savebookId);

	}
	@Test
	void getPurachaseBook() {
		
        String emailId="mani@gmail.com";
		PurchaseBook purchaseBook = new PurchaseBook();
		purchaseBook.setId(1);
		purchaseBook.setBookId(1);
		purchaseBook.setUserId(1);
		List<PurchaseBook> arrayList = new ArrayList<>();
		arrayList.add(purchaseBook);
		Mockito.when(bookService.getPurachaseBook(emailId)).thenReturn(arrayList);
		List<PurchaseBook> savebookId = bookController.getPurachaseBook(emailId);
		assertEquals(arrayList, savebookId);

	}
	@Test
	void readABook() {
		int id=1;
        String emailId="mani@gmail.com";
		Optional<BookEntity> books = Optional.of(new BookEntity());		
		Mockito.when(bookService.readABook(emailId,id)).thenReturn(books);
		Optional<BookEntity> savebookId = bookController.readABook(emailId,id);
		assertEquals(books, savebookId);

	}

	
	
	
	
	
	
	
	
	
	
	
}