
const products = [
    { id: 1, name: 'Product 1', brand: 'BrandA' },
    { id: 2, name: 'Product 2', brand: 'BrandB' },
    { id: 3, name: 'Product 3', brand: 'BrandC' },
    { id: 4, name: 'Product 4', brand: 'BrandA' },
    { id: 5, name: 'Product 5', brand: 'BrandB' },
  ];
  
  const productsContainer = document.getElementById('products-container');
  const checkboxes = document.querySelectorAll('.form-check-input');
  
  // Function to render products
  function renderProducts(filteredProducts) {
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `<h5>${product.name}</h5><p>Brand: ${product.brand}</p>`;
      productsContainer.appendChild(productDiv);
    });
  }
  
  // Function to handle filter change
  function handleFilterChange() {
    const selectedBrands = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    const filteredProducts = selectedBrands.length === 0
      ? products
      : products.filter(product => selectedBrands.includes(product.brand));
  
    renderProducts(filteredProducts);
  }
  
  // Event listeners for checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
  
  // Initial render
  renderProducts(products);