package com.digitalBook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalBook.DTO.PurchaseBookDTO;
import com.digitalBook.entity.BookEntity;
import com.digitalBook.entity.PurchaseBook;
import com.digitalBook.repository.BookRepository;
import com.digitalBook.repository.PurchaseBookRepository;
import com.digitalBook.springjwt.models.User;
import com.digitalBook.springjwt.repository.UserRepository;
@Service
public class BookService {
@Autowired
BookRepository bookRepository;
@Autowired
UserRepository userRepository;
@Autowired
PurchaseBookRepository purchaseBookRepository;

	public Iterable<BookEntity> getBooks() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();
	}
	public BookEntity postBook(BookEntity book) {
		// TODO Auto-generated method stub
		 bookRepository.save(book);
		 return book;
		
	}
	public Optional<BookEntity> getBookbyid(Integer id) {
		// TODO Auto-generated method stub
		return bookRepository.findById(id);
	}
	public void delete(Integer id) {
        // TODO Auto-generated method stub
        bookRepository.deleteById(id);
        
        
    }
	public String purachaseBook(PurchaseBookDTO purchaseBookDTO) {
		String Status="failure";
		Optional<BookEntity> book = bookRepository.findById(purchaseBookDTO.getBookId());
		System.out.println("book=="+book);
		if(book.get()!=null) {
		int getuserId = userRepository.getuserId(purchaseBookDTO.getUsername(),purchaseBookDTO.getUseremail());
			PurchaseBook purchaseBook = new PurchaseBook();
			purchaseBook.setBookId(purchaseBookDTO.getBookId());
			purchaseBook.setUserId(getuserId);
			 purchaseBookRepository.save(purchaseBook);
			 Status="success";
		}else {
			Status="failure";
		}
		
		
		// TODO Auto-generated method stub
		return Status;
	}
	public List<PurchaseBook> getPurachaseBook(String emailId) {
		
		User user = userRepository.findByEmail(emailId);
		List<PurchaseBook> purchasedBook = purchaseBookRepository.findByUserId(user.getId());
		return purchasedBook;
	}
	public Optional<BookEntity> readABook(String emailId, int bookId) {
		User user = userRepository.findByEmail(emailId);
		if(user!=null) {
			Optional<BookEntity> book = bookRepository.findById(bookId);
			// TODO Auto-generated method stub
			return book;	
		}
		Optional<BookEntity> option= Optional.empty();
		return option;
		
	}
	

}
