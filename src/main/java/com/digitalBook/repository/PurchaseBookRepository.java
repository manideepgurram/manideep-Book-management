package com.digitalBook.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.digitalBook.entity.PurchaseBook;
@Repository
public interface PurchaseBookRepository extends CrudRepository<PurchaseBook, Integer> {

	List<PurchaseBook> findByUserId(Long id);

}

