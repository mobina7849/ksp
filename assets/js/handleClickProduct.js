document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('click', () => {
            const brand = product.getAttribute('data-brand');
            const category = product.getAttribute('data-category');
            window.location.href = `product-detail.html?category=${category}&brand=${brand}`;
        });
    });
});