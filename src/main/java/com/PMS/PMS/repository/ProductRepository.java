package com.PMS.PMS.repository;

import com.PMS.PMS.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

//Repository is used to connect with the database
public interface ProductRepository extends JpaRepository<Product,Integer> {

}
