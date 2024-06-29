document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const category = urlParams.get('category');


    const productData={
        ['CNC']:{
            SMTCL:{
                categoryName: 'تراش CNC',
                name: "فرز cnc چینی سری B برند SMTCL",
                description: "این سری دارای ابعاد بسیار مناسب برای ماشینکاری میباشد ، عرض 610 میلی متر و ارتفاع 650 توان موتور اسپیندل در این سری 11/15 کیلو وات میباشد ( VMC850-VMC1100 )سیستم سفاله کش نقاله ای وزن بالا به منظور رسیدن به صلبیت بیشتر 6800-7200 کیلو گرم کنترل فانوک با قابلیت محور چهارم به صورت همزمان ",
                price: "$49.99",
                image: "assets/img/productDetail/image 84.png"
            },
        },
        ['millingCutter']:{
            SMTCL:{
                name: "Product 2",
                description: "Description for product 2",
                price: "$59.99",
                image: "images/product2.jpg"
            },
        }



    }
    // const productData = {
    //     1: {
    //         name: "Product 1",
    //         description: "Description for product 1",
    //         price: "$49.99",
    //         image: "images/product1.jpg"
    //     },
    //     2: {
    //         name: "Product 2",
    //         description: "Description for product 2",
    //         price: "$59.99",
    //         image: "images/product2.jpg"
    //     },
    //     3: {
    //         name: "Product 3",
    //         description: "Description for product 3",
    //         price: "$69.99",
    //         image: "images/product3.jpg"
    //     },
    //     4: {
    //         name: "Product 4",
    //         description: "Description for product 4",
    //         price: "$79.99",
    //         image: "images/product4.jpg"
    //     }
    // };

    const product = productData[category][brand];

    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        // document.getElementById('product-price').innerText = product.price;
        document.getElementById('product-image').src = product.image;
    }
});



const productDisplay = document.querySelector("[data-product-display]");
const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

for (let i = 0; i < productThumbnails.length; i++) {
  productThumbnails[i].addEventListener("click", function () {
    productDisplay.src = this.src;
    productDisplay.classList.add("fade-anim");

    setTimeout(function () {
      productDisplay.classList.remove("fade-anim");
    }, 250);

  });
}