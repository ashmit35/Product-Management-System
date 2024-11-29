package com.PMS.PMS.service;

import com.PMS.PMS.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.PMS.PMS.repository.ProductRepository;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {
        Product product = productRepository.findById(id).get();

        if(product != null){
            productRepository.delete(product);
            return "Product Deleted";
        }
        return "Error in deleting the product";
    }

    @Override
    public Product editProduct(Product product, Integer id) {
        Product oldProduct = productRepository.findById(id).get();
        oldProduct.setProductName(product.getProductName());
        oldProduct.setId(product.getId());
        oldProduct.setDescription(product.getDescription());
        oldProduct.setPrice(product.getPrice());
        oldProduct.setStatus(product.getStatus());

        return productRepository.save(oldProduct);
    }
}
