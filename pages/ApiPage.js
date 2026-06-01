class ApiPage {

    constructor(request) {
        this.request = request;
        this.baseUrl = 'https://fakestoreapi.com';
    }

    // Products APIs

    async getAllProducts() {
        return await this.request.get(
            `${this.baseUrl}/products`
        );
    }

    async getSingleProduct(id = 1) {
        return await this.request.get(
            `${this.baseUrl}/products/${id}`
        );
    }

    // Users APIs

    async getAllUsers() {
        return await this.request.get(
            `${this.baseUrl}/users`
        );
    }

    async getSingleUser(id = 1) {
        return await this.request.get(
            `${this.baseUrl}/users/${id}`
        );
    }

    // Carts APIs

    async getAllCarts() {
        return await this.request.get(
            `${this.baseUrl}/carts`
        );
    }

    async getSingleCart(id = 1) {
        return await this.request.get(
            `${this.baseUrl}/carts/${id}`
        );
    }
}

module.exports = { ApiPage };