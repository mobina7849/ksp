document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('click', () => {
            window.location.href = `product-detail.html`;
        });
    });
});