import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService {
    
    saveProduct(product) {
        return axios.post(API_URL + "/saveProduct", product);
    }

    getAllProducts() {
        return axios.get(API_URL + "/getAll");
    }

    getProductById(id) {
        return axios.get(API_URL + "/getById/" + id);
    }

    deleteProductById(id) {
        return axios.delete(API_URL + "/deleteProduct/" + id);
    }

    editProduct(product, id) {
        return axios.put(API_URL + "/editProduct/" + id, product);
    }
}

export default new ProductService();